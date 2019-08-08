"use strict";


window.onload = function()
{
    let menus = [
        {
            Meal:"Breakfast",
            Menu: [
                {item:"Blueberry Pancakes", price: 5.25},
                {item:"Banana Pancakes", price: 5.25},
                {item:"Chocolate Chip Pancakes", price: 5.25},
                {item:"French toast", price: 5.00}
            ]
        },
        {
            Meal:"Lunch",
            Menu: [
                {item:"Filet Salmon", price: 8.25},
                {item:"Meatloaf", price: 7.95},
                {item:"Chicken Scampi", price: 9.25},
                {item:"Breaded Chicken Parmigiana", price: 7.25}
            ]
        },
        {
            Meal:"Dinner",
            Menu: [
                {item:"Gyro Wrap", price: 6.99},
                {item:"Fish & Chips Wrap", price: 7.15},
                {item:"Chicken Florentine ", price: 7.15},
                {item:"Chef's Salad", price: 7.25}
            ]
        },
        {
            Meal:"Dessert",
            Menu: [
                {item:"Cheese Cake", price: 3.25},
                {item:"Ice Cream", price: 1.55},
                {item:"Jello", price: 2.25},
                {item:"Pudding", price: 2.35}
            ]
        }
    ];

    let menuSelect = document.getElementById("menuSelect");
    let tableBody = document.getElementById("tableBody");
    let len = menus.length;

    menuSelect.onchange = function()
    {
        while (tableBody.childNodes.length) 
        {
            tableBody.removeChild(tableBody.childNodes[0]);
        }  

        for(let i = 0; i < len; i++) 
        {
            if(menuSelect.value == menus[i].Meal)
            {
                let mealLen = menus[i].Menu.length;
                for (let j = 0; j < mealLen; j++)
                {
                    let row = tableBody.insertRow(tableBody.rows.length);
                    let cell1 = row.insertCell(0);
                    cell1.innerHTML = menus[i].Menu[j].item;
                    let cell2 = row.insertCell(1);
                    cell2.innerHTML = menus[i].Menu[j].price;
                }
            }
        }
    }
}