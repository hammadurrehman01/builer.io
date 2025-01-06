import { NextResponse } from "next/server";
import { builder } from "@builder.io/sdk";

export async function POST(req: any) {
  try {
    const { title, newSlug } = await req.json();

    const existingSlug = "/";

    // Fetch the existing page content by its slug
    const existingPage = await builder
      .get("homepage", {
        url: "/",
        apiKey: "3021e7c2623e453297ba70ab561879f3",
      })
      .promise();

    if (!existingPage) {
      return NextResponse.json(
        { error: `Page with slug '${existingSlug}' not found.` },
        { status: 404 }
      );
    }

    const existingPages = await builder.getAll("homepage", {
      url: newSlug,
      apiKey: "3021e7c2623e453297ba70ab561879f3",
    });

    if (existingPages.length !== 0) {
      return NextResponse.json(
        { message: `Page ${newSlug} with this url already exists'.` },
        { status: 400 }
      );
    }

    // Use Builder.io REST API to create the new page
    const response = await fetch("https://builder.io/api/v1/write/homepage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer bpk-466e6997da2f4cfba9336728f2358fe6`,
      },
      body: JSON.stringify({
        name: title,
        published: "published",
        query: [
          {
            "@type": "@builder.io/core:Query",
            property: "urlPath",
            operator: "is",
            value: newSlug,
          },
        ],
        data: {
          blocks: existingPage.data.blocks,
        },
      }),
    });

    const data = await response.json();
    console.log("data ===>", data);

    if (response.ok) {
      return NextResponse.json(
        { message: `Page duplicated successfully to '${newSlug}'.` },
        { status: 201 }
      );
    } else {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || "Failed to create page." },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("Error duplicating page:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
