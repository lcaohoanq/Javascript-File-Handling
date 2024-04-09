document.getElementById("uploadButton").addEventListener("click", async () => {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select a file.");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("http://localhost:4000/file", {
      method: "POST",
      body: formData,
    });

    const data = await response.text();
    alert(data);
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while uploading the file.");
  }
});
