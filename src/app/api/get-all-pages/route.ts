import { NextResponse } from "next/server";
import { builder } from "@builder.io/sdk";

export async function GET() {
  try {
    const existingPages = await builder.getAll("homepage", {
      apiKey: "3021e7c2623e453297ba70ab561879f3",
      options: { noTargeting: true, limit: 100 },
      cachebust: true,
      cacheSeconds: 12,
      // query: {
      //   published: "published",
      // },
    });

    console.log("existingPage", existingPages);

    if (!existingPages) {
      return NextResponse.json({ error: `Pages not found` }, { status: 404 });
    }

    return NextResponse.json({ data: existingPages }, { status: 200 });
  } catch (error: any) {
    console.error("Error duplicating page:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
