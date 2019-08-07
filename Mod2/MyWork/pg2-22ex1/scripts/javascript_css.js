"use strict";

window.onload = function ()
{
    let imageFiles = ["images/cat1.jpeg", "images/cat2.jpg", "images/cat3.jpg" ];
    let imageDescriptions = ["First Cat", "Second Cat", "Third Cat"];
    let allImgs = document.querySelectorAll("img");
    let len = allImgs.length;
    for (let i = 0; i < len; i++)
    {
        allImgs[i].src = imageFiles[i];
        allImgs[i].alt = imageDescriptions[i];
        allImgs[i].className = "roundedImg";
    }
}

