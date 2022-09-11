const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg",
"8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const body = document.body;

const url = "C:/workspace/VisualStudio_Workspace/NomadCoders/MakingChromeApp/img" + `/${chosenImage}`;

body.style.backgroundImage = `url(${url})`; //test