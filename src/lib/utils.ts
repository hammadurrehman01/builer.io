import { builder } from "@builder.io/sdk";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://techdept.mmecloud.tech/"
    : "http://localhost:3000/";

// export const fetchHomeData = async () => {
//   try {
//     const response = await fetch(`${API_URL}api/get-homedata`, {
//       method: "GET",
//       cache: "reload",
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.error || "Failed to fetch home data");
//     }

//     const jsonResponse = await response.json();

//     return jsonResponse?.data; // No need for an extra `await` here
//   } catch (error: any) {
//     console.error("Error fetching home data:", error.message);
//     return null; // Ensure null is returned on failure
//   }
// };

export const fetchAllPages = async () => {
  const response = await fetch("/api/get-all-pages", { cache: "reload" });
  return await response.json();
};
