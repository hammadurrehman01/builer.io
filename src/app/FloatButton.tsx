"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// /edit-panel
const FloatButton = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/login" &&
        pathname !== "/admin-panel" &&
        pathname !== "/reset-password" && (
          <Link href="/login">
            <button
              className={`fixed bottom-5 left-32 p-3 rounded-full bg-violet-600 text-white shadow-lg transition-opacity duration-300 opacity-100 z-[999]`}
            >
              <span className=" flex items-center">Edit Content</span>
            </button>
          </Link>
        )}
    </>
  );
};

export default FloatButton;
