"use strict";

window.onload = function()
{
    let displayBtn = document.getElementById("displayBtn");
    let inputFields = document.querySelectorAll("input");

    displayBtn.onclick = function()
    {
        for (let i = 0; i < inputFields.length; i++)
        {
            let str = "";
            str = str + inputFields[i].value + "\n";
            alert(str);
        }
    }
}