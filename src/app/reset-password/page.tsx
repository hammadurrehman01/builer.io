"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Loader2, MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import AuthenticatedRoute from "../AuthenticatedRoute ";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleResetPassword = () => {
    if (oldPassword === "" && newPassword === "") {
      toast.error("Please enter the inputs");
      return;
    }
    setLoading(true);

    const user: any = localStorage.getItem("user");
    const parsedUser = JSON.parse(user);

    if (oldPassword === parsedUser.password) {
      const newCredentials = {
        email: "admin@gmail.com",
        password: newPassword,
      };
      localStorage.setItem("user", JSON.stringify(newCredentials));
      toast.success("Password reset successfully!");
      setLoading(false);
      setOldPassword("");
      setNewPassword("");
    } else {
      toast.error("Please enter the correct password");
      setLoading(false);
      setOldPassword("");
      setNewPassword("");
    }
  };

  return (
    // <AuthenticatedRoute>
    <div className=" w-full py-8">
      <div className="w-[40%] m-auto p-8 border-[0.5px] border-[#27272a] rounded-lg">
        <Link href="/login">
          <MoveLeft className="cursor-pointer" />
        </Link>
        <div>
          <Input
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
            value={oldPassword}
            className="mt-2"
            type="password"
            placeholder="Enter Old Password"
          />
          <Input
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
            value={newPassword}
            className="mt-2"
            type="password"
            placeholder="Enter New Password"
          />
        </div>
        <Link href="/reset-password"></Link>
        <Button className="mt-6 w-full" onClick={handleResetPassword}>
          {loading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="animate-spin" />
              {/* Reset Password */}
            </div>
          ) : (
            "Reset Password"
          )}
        </Button>
      </div>
    </div>
    // </AuthenticatedRoute>
  );
};

export default Page;
