const images = ["0.jpeg","1.png","2.jpeg","3.webp","4.png","5.jpeg","6.jpg",];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);