import express from "express";
import path from "path";
import imageroutes from "./routes/imageroutes";
import bodyParser from "body-parser";
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;
app.use("/api/vi/images", imageroutes);
app.use(express.static("./dis/public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(path.resolve(process.cwd()), "/dis", "home.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use("/api/v1/images", imageroutes);
