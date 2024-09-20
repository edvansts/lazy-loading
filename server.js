import express from "express";
import path from "path";

const PORT = process.env.PORT || 3000;

const app = express();

app.use("/assets", express.static("build/client/assets"));

app.get("*.png", (req, res) => {
  res.sendFile(path.join(process.cwd(), "build/client", req.url));
});

app.get("*", (req, res, next) =>
  res.sendFile(path.join(process.cwd(), "build/client/index.html"), next)
);

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
