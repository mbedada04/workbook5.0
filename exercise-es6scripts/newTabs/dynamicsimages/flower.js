let imageFiles = [
  {
    path: "https://i5.walmartimages.com/asr/5f15c8bd-a189-4e52-9fe9-31dc3f3edd28_1.51841430a716b6a18678e70c6bcfba28.jpeg",
    name: "Orchid",
  },
  {
    path: "https://www.desicomments.com/wp-content/uploads/2017/01/Beautiful-Pink-Tulip-Flowers-Pic.jpg",
    name: "Tulip",
  },
  { path: "https://wallpapercave.com/wp/A8NzjYw.jpg", name: "Rose" },
];

const flowerList = document.getElementById("flowerList");

function loadFlowerList() {
  imageFiles.forEach((imageFile) => {
    let option = new Option(imageFile.name, imageFile.name);
    flowerList.appendChild(option);
  });
}

function addImage() {
  const selectedValue = flowerList.value;

  let imageFile = imageFiles.find((f) => f.name === selectedValue);
  let img = document.createElement("img");
  img.src = imageFile.path;
  img.alt = imageFile.name;

  imagesDiv.appendChild(img);
}

function clearImages() {
   let imagesDiv = document.querySelector("#imagesDiv");
   let images = document.querySelectorAll("#imagesDiv img");
   images.forEach((image) => imagesDiv.removeChild(image));
}

window.onload = () => {
  loadFlowerList();

  const addImageButton = document.getElementById("addImageButton");
  addImageButton.onclick = addImage;

  const clearImageButton = document.getElementById("clearImageButton");
  clearImageButton.onclick = clearImages;
};
