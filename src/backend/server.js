const express = require("express");
const multer = require("multer");
const File = require("./file");

const app = express();
const port = 4000;

// Set up Multer for file uploading
const upload = multer({ dest: "uploads/" });

// Define a route to handle file upload
app.post("/file", upload.single("file"), (req, res) => {
  // Print the data of the uploaded file
  // console.log(req.file);

  const fileData = new File(req.file);
  console.log("Name: " + fileData.nameOfFile);
  console.log("Size: " + fileData.sizeOfFIle);

  res.send("File uploaded successfully!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
