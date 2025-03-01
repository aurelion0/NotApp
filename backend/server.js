const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let notes = [];

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.post("/api/notes", (req, res) => {
  const { note } = req.body;
  if (note) {
    notes.push(note);
    res.status(201).json({ message: "Note added successfully!" });
  } else {
    res.status(400).json({ message: "Invalid note!" });
  }
});

app.delete("/api/notes/:index", (req, res) => {
  const { index } = req.params;
  if (index >= 0 && index < notes.length) {
    notes.splice(index, 1);
    res.status(200).json({ message: "Note deleted successfully!" });
  } else {
    res.status(404).json({ message: "Note not found!" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
