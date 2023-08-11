import { SaveImage } from "../controllers/imagecontrollers";
import express, { Request, Router, Express } from "express";
import { v4 as uuidv4 } from "uuid";
import multer from "multer";
import path from "path";
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb) => {
    cb(null, "dis/public/images");
  },

  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    const name = file.originalname.split(".")[0];

    cb(null, `${name}-${uuidv4()}.${ext}`);
  },
});

const upload = multer({ storage });

router.post("/", SaveImage);

export default router;
