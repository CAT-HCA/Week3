// Description: This script will calculate the cost of a car rental
//based on selected options on UI
//Author: Corinne Trudeau
"use strict";

/*
*This is the window.onload event handler
*/
window.onload = function ()
{
    let googleBtn = document.getElementById("googleBtn");
    let HigBtn = document.getElementById("HigBtn");
    let w3Btn = document.getElementById("w3Btn");
    let params = "height=600,width=400,left=30,top=30"
    /*
    *This is the button click event handler
    */
   googleBtn.onclick = function ()
    {
        window.open("https://www.google.com", "google", params);

    }
    HigBtn.onclick = function ()
    {
    window.open("https://www.thehartford.com/", "HIG", params);
    }
    w3Btn.onclick = function ()
    {
        window.open("https://www.w3schools.com", "W3", params);
    }

}