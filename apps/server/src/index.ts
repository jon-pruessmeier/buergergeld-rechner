import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Routen
app.get("/", (req, res) => {
  res.send("Hello from Express Server!");
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
