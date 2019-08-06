"use strict";

window.onload = function()
{
    let displayBtn = document.getElementById("displayBtn");
    let inputFields = document.querySelectorAll("input");

    displayBtn.onclick = function()
    {
        let str = "";
        for (let i = 0; i < inputFields.length; i++)
        {
            str = str + inputFields[i].value + "\n";
            alert(str);
        }
    }
}