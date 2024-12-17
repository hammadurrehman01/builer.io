import multer from "multer";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const uploadFolder = path.join(process.cwd(), "public");
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder);
}

const storage = multer.diskStorage({
  destination: (_req: any, _file: any, cb: any) => {
    cb(null, uploadFolder);
  },
  filename: (_req: any, file: any, cb: any) => {
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}${ext}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

export async function POST(req: any, res: any) {
  upload.single("image")(req, res, (err: any) => {
    if (err) {
      return NextResponse.json(
        { error: `Failed to upload image` },
        { status: 500 }
      );
    }

    const filename = req.file?.filename;

    if (!filename) {
      return NextResponse.json({ error: `No file uploaded` }, { status: 400 });
    }

    const imageUrl = `/public/${filename}`;
    return NextResponse.json({ imageUrl }, { status: 201 });
  });
}
