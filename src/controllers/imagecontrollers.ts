import { Request, Response, NextFunction, json } from "express";
import CatchAysnc from "../utilities/catchaysnc";
import multer from "multer";
import path from "path";
import { readFile, appendFile } from "node:fs/promises";

const SaveImage = CatchAysnc(
  async (req: Request, res: Response, next: NextFunction) => {
    let dataf = {};
    // fs.readFile(
    //   `${path.join(path.dirname(__dirname), "data.json")}`,
    //   (err: any, data: any) => {
    //     if (err) {
    //       throw console.log(err);
    //     }
    //     dataf = JSON.parse(data);
    //     console.log(dataf);
    //     console.log(data);
    //     // file written successfully
    //   }
    // );
    const curentdata = await readFile(
      `${path.join(path.dirname(__dirname), "data.json")}`,
      { encoding: "utf8" }
    );
    console.log(JSON.parse(curentdata));

    // const appenddata = await appendFile(
    //   `${path.join(path.dirname(__dirname), "data.json")}`,
    //   JSON.stringify({ name: "ali" }),
    //   "utf8"
    // );

    res.status(201).json({
      message: "uploaded successfuly",
      status: "success",
    });
  }
);
export { SaveImage };
