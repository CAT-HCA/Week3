"use strict";

window.onload = function ()
{
    const largerBtn = document.getElementById("larger");
    const smallerBtn = document.getElementById("smaller");

    largerBtn.onclick = function ()
    {
        let percentChange = 1.2;
        changeParaSize(percentChange);
    }

    smallerBtn.onclick = function ()
    {
        let percentChange = .8;
        changeParaSize(percentChange);
    }


}

function changeParaSize (percentChange)
{
    const paras = document.querySelectorAll("main > p");
    let len = paras.length;
    for (let i = 0; i < len; i++)
    {
        let para = paras[i];
        if (para.style.fontSize == "")
        {
            para.style.fontSize = "1.0em";
        }
        let size = parseFloat(para.style.fontSize);
        size = size * percentChange;
        para.style.fontSize = size + "em";
    }
}