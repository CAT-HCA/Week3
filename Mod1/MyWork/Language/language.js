// Description: This script will calculate the cost of a car rental
//based on selected options on UI
//Author: Corinne Trudeau
"use strict";

/*
*This is the window.onload event handler
*/
window.onload = function ()
{
    let helloBtn = document.getElementById("helloBtn");
    let params = "height=600,width=400";
    let language = navigator.language;
    let outputDiv = document.getElementById("messageDiv");
    console.log(language);



    /*
    *This is the button click event handler
    */
   helloBtn.onclick = function ()
   {
        if (language == "en-US")
        {
            let message = "Hello World";
            alert(message);
        }
        else if (language == "es")
        {
            let message = "Hola Mundo";
            alert(message);
        }
        else if (language == "de")
        {
            let message = "Hallo Welt";
            alert(message);
        }

    }
}