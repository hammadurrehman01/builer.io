// "use client";

// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Dialog,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { LoaderCircle } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Separator } from "../ui/separator";

// const CustomToolTip = ({ initialServices, services, setServices }: any) => {
//   const [modal, setModal] = useState(false);

//   const handleDuplicateSlide = (index: number) => {
//     const duplicateService = { ...services[index] };
//     duplicateService.title += 1;
//     setServices((prev: any) => [...prev, duplicateService]);
//   };

//   useEffect(() => {
//     localStorage.setItem("sample-papers", JSON.stringify(services));
//   }, [services]);

//   return (
//     <div className="absolute top-3 right-3  x-2 py-1 px-3 rounded cursor-pointer bg-black">
//       <p className="text-center py-1">Edit</p>
//       <p className="text-center py-1">Delete</p>
//       <p onClick={() => setModal(true)} className="text-center py-1">
//         Duplicate
//       </p>
//       <div>
//         <Dialog open={modal}>
//           <DialogContent className="sm:max-w-[475px]">
//             <DialogHeader>
//               <DialogTitle>Add a new Page</DialogTitle>
//             </DialogHeader>

//             <div>
//               <div className="flex justify-center items-center gap-4">
//                 <Label htmlFor="title" className="text-right">
//                   Title
//                 </Label>
//                 <Input
//                   id="title"
//                   className="col-span-3"
//                   placeholder="Take My Exam"
//                 />
//               </div>
//               <div className="flex justify-center items-center gap-4 pt-3">
//                 <Label htmlFor="href" className="text-right">
//                   Link
//                 </Label>
//                 <Input
//                   id="href"
//                   className="col-span-3"
//                   placeholder="/take-my-exam"
//                 />
//                 <Button onClick={handleDuplicateSlide}>Add Slide</Button>
//               </div>{" "}

//             </div>

//             <div className="flex items-center justify-start gap-4  py-3">
//               <Label htmlFor="isExistingPageCheckbox" className="text-right ">
//                 Do you want to add any existing page as a service?
//               </Label>
//             </div>

//             <div className="flex justify-center items-center gap-4">
//               <Label htmlFor="href" className="text-right">
//                 All pages
//               </Label>
//             </div>

//             <DialogFooter></DialogFooter>
//           </DialogContent>
//         </Dialog>
//       </div>
//     </div>
//   );
// };

// export default CustomToolTip;

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const CustomToolTip = ({
  slides,
  setSlides,
  setTooltipIndex,
  index,
  modal,
  setModal,
}: any) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(""); // Image URL or file path
  const [link, setLink] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null); // For file upload

  const handleEditSlide = () => {
    const slideToEdit = slides[index];
    setTitle(slideToEdit.title);
    setDescription(slideToEdit.description);
    setImage(slideToEdit.image);
    setLink(slideToEdit.link);
    setIsEditing(true);
    setModal(true);
  };

  const handleSaveEdit = () => {
    const updatedSlides = slides.map((slide: any, i: number) =>
      i === index ? { title, description, image, link } : slide
    );

    setSlides(updatedSlides); // Update slides state
    localStorage.setItem("slides", JSON.stringify(updatedSlides)); // Update localStorage
    setModal(false); // Close modal
    resetFields();
    setIsEditing(false);
    setTooltipIndex(null); // Close tooltip
  };

  const handleAddSlide = async () => {
    setIsLoading(true);
    if (title && link) {
      const response = await fetch("/api/duplicate-page", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, newSlug: link }),
      });
      const data = await response.json();
    }
    const newSlide = { title, description, image, link };
    setSlides([...slides, newSlide]); // Add the new slide
    localStorage.setItem("slides", JSON.stringify([...slides, newSlide])); // Store in localStorage
    setModal(false); // Close the modal
    resetFields();
    setIsLoading(false);
    setTooltipIndex(null);
  };

  const handleDeleteSlide = () => {
    const updatedSlides = slides.filter((_: any, i: number) => i !== index);
    setSlides(updatedSlides);
    localStorage.setItem("slides", JSON.stringify(updatedSlides)); // Update localStorage
    setTooltipIndex(null); // Close tooltip
  };

  // Handle file input change
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    console.log("file =>", file);

    if (file) {
      setSelectedImage(file);
      const imageUrl = URL.createObjectURL(file); // Preview image immediately
      setImage(imageUrl); // Store the image URL in state
    }
  };

  // Handle the upload of the selected image file
  const handleUploadImage = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      // Upload the image to the server and get the URL to store
      const response = await fetch("/api/upload-image", {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        body: formData,
      });

      const data = await response.json();

      // Store the uploaded image URL in the state
      setImage(data.imageUrl); // Assuming the server returns the image URL
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const resetFields = () => {
    setTitle("");
    setDescription("");
    setImage("");
    setLink("");
  };

  return (
    <div className="absolute top-3 right-3 x-2 py-1 px-3 rounded cursor-pointer bg-black">
      <p onClick={handleEditSlide} className="text-center py-1">
        Edit
      </p>
      <p onClick={handleDeleteSlide} className="text-center py-1">
        Delete
      </p>
      <p
        onClick={() => {
          setModal(true);
        }}
        className="text-center py-1"
      >
        Add
      </p>

      <Dialog open={modal} onOpenChange={setModal}>
        <DialogContent className="sm:max-w-[475px]">
          <DialogHeader>
            <DialogTitle>
              {isEditing ? "Edit Slide" : "Add a New Slide"}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter slide title"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter slide description"
              />
            </div>

            {/* Image Upload Section */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="image">Upload Image</Label>
              <Input
                type="file"
                onChange={handleImageChange}
                className="border p-2 rounded"
              />
              {image && (
                <img
                  src={image}
                  alt="Preview"
                  className="mt-2 w-32 h-32 object-cover"
                />
              )}
              {/* <Button
                onClick={handleUploadImage}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mt-2"
              >
                Upload Image
              </Button> */}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="link">Link</Label>
              <Input
                id="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Enter slide link"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              onClick={isEditing ? handleSaveEdit : handleAddSlide}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              {isEditing ? (
                <span>
                  {!isLoading ? (
                    "Save Changes"
                  ) : (
                    <span className=" flex items-center gap-2">
                      {" "}
                      <Loader2 className="animate-spin" />
                      Editing
                    </span>
                  )}
                </span>
              ) : (
                <span>
                  {!isLoading ? (
                    "Add"
                  ) : (
                    <span className=" flex items-center gap-2">
                      {" "}
                      <Loader2 className="animate-spin" />
                      Adding
                    </span>
                  )}
                </span>
              )}
            </Button>
            <Button
              onClick={() => {
                setModal(false);
                resetFields();
                setIsEditing(false);
                setTooltipIndex(null);
              }}
              className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400"
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomToolTip;
