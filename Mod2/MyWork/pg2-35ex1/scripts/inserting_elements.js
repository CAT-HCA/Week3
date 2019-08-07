// Description: This script will calculate the cost of a room rental
//based on selected options on UI
//Author: Corinne Trudeau
"use strict";

let allImages = 
[
    {file: "images/cat1.jpg", description: "Sleepy kitty"},
    {file: "images/cats.jpg", description: "Cuddling kitties"},
    {file: "images/dog1.jpg", description: "Doggo with ball"},
    {file: "images/dog2.jpg", description: "Cute doggo"},
    {file: "images/dog3.jpg", description: "Halloween doggo"},
    {file: "images/dog4.jpg", description: "Sleepy doggo"},
    {file: "images/dog5.jpg", description: "Merica doggo"},
    {file: "images/dogandcat.jpg", description: "Best Friends Fur-ever"}
]

/*
*This is the window.onload event handler
*/
window.onload = function ()
{
    let addImgBtn = document.getElementById("addImgBtn");
    let len = allImages.length;
    let parentDiv;
    let imageDiv = document.getElementById("imageDiv");

    for (let i = 0; i < len; i++)
    {
        let dropdownDesc = document.createElement("option");
        dropdownDesc.innerHTML = allImages[i].description;
        parentDiv = document.getElementById("imageSelect");
        parentDiv.appendChild(dropdownDesc);
    }

    /*
    *This is the add image button click event handler
    */
   addImgBtn.onclick = function ()
    {
        for (let i = 0; i < len; i++)
        {
            var selectedImg = parentDiv.selectedIndex;
        }
        let displayedImg = document.createElement("img");
        displayedImg.src = allImages[selectedImg].file;
        displayedImg.alt = allImages[selectedImg].description;
        imageDiv.appendChild(displayedImg);
    }
    /*
    *This is the reset all images button click event handler
    */
    resetBtn.onclick = function ()
    {
        imageDiv.innerHTML = "";
    }
}

