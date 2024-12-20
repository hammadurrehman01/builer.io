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
import { toast } from "react-toastify";

const CustomAcademicToolTip = ({
  slides,
  setSlides,
  setTooltipIndex,
  index,
  modal,
  setModal,
}: any) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleEditSlide = () => {
    const slideToEdit = slides[index];
    setTitle(slideToEdit.title);
    setDescription(slideToEdit.description);
    setImage(slideToEdit.imageSrc);
    setLink(slideToEdit.link);
    setIsEditing(true);
    setModal(true);
  };

  const handleSaveEdit = () => {
    const updatedSlides = slides.map((slide: any, i: number) =>
      i === index ? { title, description, imageSrc: image, link } : slide
    );

    setSlides(updatedSlides);
    localStorage.setItem("slides", JSON.stringify(updatedSlides));
    resetFields();
  };

  const handleUploadImage = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append("files", selectedImage);

    try {
      const response = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      setImage(data.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleAddSlide = async () => {
    setIsLoading(true);

    try {
      if (title && link && selectedImage && description) {
        await fetch("/api/duplicate-page", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, newSlug: link }),
        });

        await handleUploadImage();

        const newSlide = {
          imageSrc: image,
          title,
          description,
          link,
          animation: "flip-left",
        };

        setSlides([...slides, newSlide]);
        localStorage.setItem("slides", JSON.stringify([...slides, newSlide]));
        console.log("slifdes ===>", slides);

        resetFields();

        toast.success("Slide added successfully");
      } else {
        toast.error("Please add the input");
      }
    } catch (error: any) {
      console.error(error?.message);
      toast.error(error?.message);
    }
  };

  const handleDeleteSlide = () => {
    const updatedSlides = slides.filter((_: any, i: number) => i !== index);
    setSlides(updatedSlides);
    localStorage.setItem("slides", JSON.stringify(updatedSlides));
    setTooltipIndex(null);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (file) {
      setSelectedImage(file);
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const resetFields = () => {
    setTitle("");
    setDescription("");
    setImage("");
    setLink("");
    setModal(false);
    setIsLoading(false);
    setTooltipIndex(null);
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

export default CustomAcademicToolTip;
