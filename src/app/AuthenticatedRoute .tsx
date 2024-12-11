import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthenticatedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
    } else {
      router.push("/admin-panel");
    }
  }, [router]);

  return <>{children}</>;
};

export default AuthenticatedRoute;
