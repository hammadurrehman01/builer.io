"use client";

import { NavModal } from "@/components/common/NavModal";
import { ServiceModal } from "@/components/common/ServiceModal";
import { House } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AuthenticatedRoute from "../AuthenticatedRoute ";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Page = () => {
  const [navModal, setNavModal] = useState<boolean>(false);
  const [services, setServices] = useState([]);
  const [serviceModal, setServiceModal] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const servicesFromLS = localStorage.getItem("services");
    if (servicesFromLS) {
      setServices(JSON.parse(servicesFromLS));
    }
    console.log("services");
  }, []);

  const handleSignout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  return (
    <AuthenticatedRoute>
      {navModal && <NavModal navModal={navModal} setNavModal={setNavModal} />}
      {/* <button onClick={() => setNavModal(true)}>Add new page</button> */}
      {/* <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select> */}
      <div className="grid w-full m-auto">
        {serviceModal && (
          <ServiceModal
            serviceModal={serviceModal}
            setServiceModal={setServiceModal}
            services={services}
            setServices={setServices}
          />
        )}
        <div className="flex items-center py-6 justify-center gap-2">
          <div
            onClick={handleSignout}
            className="flex items-center gap-2 bg-white text-violet-800 p-3 rounded-md cursor-pointer"
          >
            Logout
          </div>
          <div className="flex items-center gap-2">
            <button
              className=" bg-violet-800 p-3 rounded-md"
              onClick={() => setServiceModal(true)}
            >
              Add new page
            </button>
            <button
              className=" bg-violet-800 p-3 rounded-md"
              onClick={() => setServiceModal(true)}
            >
              <a href="https://builder.io/content"> Edit With Builder Studio</a>
            </button>
          </div>
        </div>
        {/* {services.map((service: any, index: number) => (
          <Link className="text-center " href={service.href} key={index}>
            <button className="m-1">{service.title}</button>
          </Link>
        ))} */}
      </div>
    </AuthenticatedRoute>
  );
};

export default Page;
