import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface Props {
  navModal: any;
  setNavModal: (value: boolean) => void;
}
export function NavModal({ navModal, setNavModal }: Props) {
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDuplicatePage = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/duplicate-page", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(slug),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Page created at ${slug}!`);
        setNavModal(false);
      } else {
        alert(data.error || "Failed to create the page.");
      }
    } catch (error: any) {
      console.error("Error duplicating page:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={navModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new Page</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slug" className="text-right">
            Slug
          </Label>
          <Input
            id="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="col-span-3"
            placeholder="/about-us"
          />
        </div>
        <DialogFooter>
          <Button onClick={handleDuplicatePage}>
            {" "}
            {loading ? "Creating..." : "Create Page"}
          </Button>
          <Button onClick={() => setNavModal(false)}>Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
