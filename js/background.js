const images = ["0.JPG", "1.jpg", "2.png", "3.jpeg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

// JS에서 html 요소 추가!
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImages}`;

//만든 요소를 body안에 넣기!!!
document.body.appendChild(bgImage);
