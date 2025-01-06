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

const CustomSampleToolTip = ({
  samples,
  setSamples,
  setTooltipIndex,
  index,
  modal,
  setModal,
}: any) => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [nop, setNop] = useState(0);
  const [al, setAl] = useState("");
  const [dt, setDt] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleEditSample = () => {
    const sampleToEdit = samples[index];
    console.log("sampleToEdit =>", sampleToEdit);

    setTitle(sampleToEdit.title);
    setSubject(sampleToEdit.subject);
    setNop(sampleToEdit.pages);
    setAl(sampleToEdit.level);
    setDt(sampleToEdit.docType);
    setImage(sampleToEdit.imageSrc);
    setLink(sampleToEdit.link);
    setIsEditing(true);
    setModal(true);
  };

  const handleSaveEdit = () => {
    const updatedSamples = samples.map((sample: any, i: number) =>
      i === index
        ? {
            title,
            subject,
            pages: nop,
            level: al,
            docType: dt,
            imageSrc: image,
            link,
          }
        : sample
    );

    setSamples(updatedSamples);
    localStorage.setItem("samples", JSON.stringify(updatedSamples));
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

  const handleAddSample = async () => {
    setIsLoading(true);

    try {
      if (title && subject && nop && al && dt && image && link) {
        // const modifiedLink = `/${link.replace(/\s+/g, "-").toLowerCase()}`;
        await fetch("/api/duplicate-page", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            newSlug: `/${link.replaceAll(" ", "-")}`,
          }),
        });

        await handleUploadImage();

        // console.log("modifiedLink =>", modifiedLink);

        const newSample = {
          imageSrc: image,
          title,
          subject,
          pages: nop,
          level: al,
          docType: dt,
          link: link.replaceAll(" ", "-"),
          animation: "flip-left",
        };

        setSamples([...samples, newSample]);
        localStorage.setItem(
          "samples",
          JSON.stringify([...samples, newSample])
        );

        resetFields();

        toast.success("Sample added successfully");
      } else {
        toast.error("Please add the input");
      }
    } catch (error: any) {
      console.error(error?.message);
      toast.error(error?.message);
    }
  };

  const handleDeleteSample = () => {
    const updatedSamples = samples.filter((_: any, i: number) => i !== index);
    setSamples(updatedSamples);
    localStorage.setItem("samples", JSON.stringify(updatedSamples));
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
    setSubject("");
    setAl("");
    setDt("");
    setLink("");
    setImage("");
    setModal(false);
    setIsLoading(false);
    setTooltipIndex(null);
  };

  return (
    <div className="absolute top-3 right-3 x-2 py-1 px-3 rounded cursor-pointer bg-black">
      <p onClick={handleEditSample} className="text-center py-1">
        Edit
      </p>
      <p onClick={handleDeleteSample} className="text-center py-1">
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
        <DialogContent className="sm:max-w-[475px] h-[600px] overflow-y-scroll">
          <DialogHeader>
            <DialogTitle>
              {isEditing ? "Edit Sample" : "Add a New Sample"}
            </DialogTitle>
          </DialogHeader>

          <div className="  space-y-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter sample title"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter sample subject"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="nop">Number of Pages</Label>
              <Input
                id="nop"
                type="number"
                value={nop}
                onChange={(e) => setNop(e.target.value as any)}
                placeholder="Enter sample pages"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="al">Academic Level</Label>
              <Input
                id="al"
                value={al}
                onChange={(e) => setAl(e.target.value)}
                placeholder="Enter sample pages"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="dt">Document Type</Label>
              <Input
                id="dt"
                value={dt}
                onChange={(e) => setDt(e.target.value)}
                placeholder="Enter sample document type"
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
                type="url"
                onChange={(e) => setLink(e.target.value)}
                placeholder="Enter sample link"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              onClick={isEditing ? handleSaveEdit : handleAddSample}
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

export default CustomSampleToolTip;
