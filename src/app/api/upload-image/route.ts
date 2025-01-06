import { NextResponse } from "next/server";
import fs from "fs";
import { pipeline } from "stream";
import { promisify } from "util";
const pump = promisify(pipeline);

export async function POST(req: any) {
  try {
    const formData = await req.formData();

    const file = formData.getAll("files")[0];

    const filePath = `./public/uploads/${file.name}`;

    await pump(file.stream(), fs.createWriteStream(filePath));
    return NextResponse.json({ status: "success", data: filePath });
  } catch (error: any) {
    return NextResponse.json({ status: "failed", imageUrl: error.message });
  }
}
