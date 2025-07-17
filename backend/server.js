const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from React build
app.use(express.static(path.join(__dirname, "../dist")));

// Read items from db.json
const getItems = () => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "../db.json"), "utf8");
    return JSON.parse(data).items;
  } catch (error) {
    console.error("Error reading db.json:", error);
    return [];
  }
};

// Write items to db.json
const saveItems = (items) => {
  try {
    fs.writeFileSync(
      path.join(__dirname, "../db.json"),
      JSON.stringify({ items }, null, 2)
    );
  } catch (error) {
    console.error("Error writing to db.json:", error);
  }
};

// API routes
app.get("/items", (req, res) => {
  const items = getItems();
  res.json(items);
});

app.post("/items", (req, res) => {
  const items = getItems();
  const newItem = {
    ...req.body,
    _id: Date.now().toString(), // Simple ID generation
  };
  items.push(newItem);
  saveItems(items);
  res.json(newItem);
});

app.delete("/items/:id", (req, res) => {
  const items = getItems();
  const id = req.params.id;
  const filteredItems = items.filter((item) => item._id !== id);
  saveItems(filteredItems);
  res.json({ message: "Item deleted successfully" });
});

// Serve React app for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
