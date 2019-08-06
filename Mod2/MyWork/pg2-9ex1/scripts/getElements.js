"use strict";

window.onload = function ()
{
    const allParas = document.getElementsByClassName("imageGroup");

    let len = allParas.length;
    for (let i = 0; i < len; i++)
    {
        allParas[i].style.border = "10px solid red";
    }
}