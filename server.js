import express from "express";
import path from "path";

const app = express();

app.use("/assets", express.static("build/client/assets"));

app.get("*.png", (req, res) => {
  res.sendFile(path.join(process.cwd(), "build/client", req.url));
});

app.get("*", (req, res, next) =>
  res.sendFile(path.join(process.cwd(), "build/client/index.html"), next)
);

app.listen(3000, () => {
  console.log("App listening on http://localhost:3000");
});
