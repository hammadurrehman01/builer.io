"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import AuthenticatedRoute from "../AuthenticatedRoute ";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "" && password === "") {
      toast.error("Please enter the inputs");
      return;
    }
    setLoading(true);
    const user: any = localStorage.getItem("user");
    const parsedUser = JSON.parse(user);
    if (email === "admin@gmail.com" && password === parsedUser.password) {
      toast.success("You are logged in!");
      localStorage.setItem(
        "user",
        JSON.stringify({ email, password, isLoggedIn: true })
      );
      router.push("/admin-panel");
      setLoading(false);
      setEmail("");
      setPassword("");
    } else {
      toast.error("Credentials Incorrect");
      setLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <AuthenticatedRoute>
      <div className=" w-full py-12">
        <div className="w-[40%] m-auto p-12 border-[0.5px] border-[#27272a] rounded-lg">
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            placeholder="Enter Email"
          />
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className="mt-2 border-0"
            type="password"
            placeholder="Enter Password"
          />
          {/* <Link href="/reset-password">
            <span className="mt-6 text-sm cursor-pointer ">Reset Password</span>
          </Link> */}
          <Button className="mt-6 w-full" onClick={handleLogin}>
            {loading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="animate-spin" />
                Logging In
              </div>
            ) : (
              "Login"
            )}
          </Button>
        </div>
      </div>
    </AuthenticatedRoute>
  );
};

export default Page;
