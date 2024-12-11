import { Toaster } from "@/components/ui/toaster";

export function CustomToaster() {
  return (
    <div className="fixed bottom-5 left-5 z-50">
      <Toaster />
    </div>
  );
}
