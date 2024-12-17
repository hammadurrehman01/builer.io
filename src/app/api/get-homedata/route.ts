import { NextResponse } from "next/server";
import { builder } from "@builder.io/sdk";

export async function GET() {
  try {
    const content = await builder.get("homepage", {
      userAttributes: {
        urlPath: "/",
      },
      apiKey: "3021e7c2623e453297ba70ab561879f3",
    });

    if (!content) {
      return NextResponse.json({ error: `content not found` }, { status: 404 });
    }

    return NextResponse.json({ data: content }, { status: 200 });
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
