const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Website files
app.use(express.static(path.join(__dirname)));

// API
app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    service: "QuickFlix API",
    mode: "demo"
  });
});

app.get("/api/content", (req, res) => {
  res.json([
    { id: 1, title: "Premium Video", category: "Movies", price: 25 },
    { id: 2, title: "Series Pack",
  category: "Series", price: 49 },
    { id: 3, title: "Cartoon Pack", category: "Cartoons", price: 29 }
  ]);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`QuickFlix running on port ${PORT}`);
});
