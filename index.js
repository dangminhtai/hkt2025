import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// serve static build của React
app.use(express.static(path.join(__dirname, "web", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "web", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Server đang chạy tại http://localhost:${PORT}`));
