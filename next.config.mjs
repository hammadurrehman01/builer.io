import BuilderDevTools from "@builder.io/dev-tools/next";

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()({
  images: {
    domains: ["cdn.builder.io"], // Add the domain from which the image is served
  },
});

export default nextConfig;
