import { builder } from "@builder.io/sdk";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://gogrades-testing.eduresearchers.com/"
    : "http://localhost:3000/";

export const fetchHomeData = async () => {
  // console.log("Fetching home data from:", API_URL);
  // try {
  //   const response = await fetch(`/api/get-homedata`, {
  //     method: "GET",
  //   });

  //   console.log("response ==>", response);

  //   if (!response.ok) {
  //     const errorData = await response.json();
  //     throw new Error(errorData.error || "Failed to fetch home data");
  //   }

  //   const jsonResponse = await response.json();
  //   console.log("Fetched home data successfully:", jsonResponse);
  //   return jsonResponse?.data; // No need for an extra `await` here
  // } catch (error: any) {
  //   console.error("Error fetching home data:", error.message);
  //   return null; // Ensure null is returned on failure
  // }
   try {
      const content = await builder
        .get("homepage", {
          userAttributes: {
            urlPath: "/",
          },
          apiKey: "3021e7c2623e453297ba70ab561879f3"
        })
  
        .toPromise();
  
      // if (!content) {
      //   return NextResponse.json({ error: `content not found` }, { status: 404 });
      // }
  
      return content
    } catch (error: any) {
      console.error(error.message);
      // return NextResponse.json({ error: error.message }, { status: 500 });
    }
};

export const fetchAllPages = async () => {
  const response = await fetch("/api/get-all-pages");
  return await response.json();
};
