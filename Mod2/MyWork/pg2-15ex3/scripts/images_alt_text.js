"use strict";

window.onload = function ()
{
    let allImgs = document.querySelectorAll("img");

        for (let i = 0; i < allImgs.length; i++)
        {
            if (allImgs[i].alt == "")
            {
                allImgs[i].alt = "graffiti image"
            }
            else
            {
                allImgs[i].alt = allImgs[i].alt
            }
        }
        for (let i = 0; i < allImgs.length; i++)
        {
            let string = "para" + (allImgs[i].id).substr((allImgs[i].id).length-1);
            document.getElementById(string).innerHTML = allImgs[i].alt;
        }
}
