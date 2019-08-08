'use strict';

window.onload = function() {
	let objs;
	let dropDownList = document.getElementById("mtnSelect");
	$.getJSON("data/data.json", function(data) {
		objs = data;
		for (let i = 0; i <objs.mountains.length; i++)
		{
			let mountainOption = objs.mountains[i].name;
			let dropDownoptions = document.createElement("option");
			dropDownoptions.text = mountainOption;
			dropDownList.appendChild(dropDownoptions);
		}
	});


	dropDownList.onchange = function ()
    {
		let selection  = objs.mountains[mtnSelect.selectedIndex]
		let mtnName = selection.name;
		let mtnElev = selection.elevation;
		let mtnEffort = selection.effort;
		let mtnImg = selection.img;
		let mtnDesc = selection.desc;
		let mtnLat = selection.coords.lat;
		let mtnLong = selection.coords.lng;
		let displayTable = document.getElementById("mtnTblOutput")
		while (displayTable.childNodes.length) 
		{
        	displayTable.innerHTML = "";
		};
		//row1  - Name
		let row1 = displayTable.insertRow(displayTable.rows.length);
		let cell1_1 = row1.insertCell(0);
		cell1_1.innerHTML = "Name";
		let cell2_1 = row1.insertCell(1);
		cell2_1.innerHTML = mtnName;

		//row2  - Elevation
		let row2 = displayTable.insertRow(displayTable.rows.length);
		let cell1_2 = row2.insertCell(0);
		cell1_2.innerHTML = "Elevation";
		let cell2_2 = row2.insertCell(1);
		cell2_2.innerHTML = mtnElev + " ft";

		//row3 - Effort
		let row3 = displayTable.insertRow(displayTable.rows.length);
		let cell1_3 = row3.insertCell(0);
		cell1_3.innerHTML = "Effort";
		let cell2_3 = row3.insertCell(1);
		cell2_3.innerHTML = mtnEffort;

		//row4 - Photo
		let row4 = displayTable.insertRow(displayTable.rows.length);
		let cell1_4 = row4.insertCell(0);
		cell1_4.innerHTML = "Photo";
		let imgSrc = document.createElement("img");
		imgSrc.src = mtnImg;
		let cell2_4 = row4.insertCell(1);
		cell2_4.appendChild(imgSrc);

		//row5 - Description
		let row5 = displayTable.insertRow(displayTable.rows.length);
		let cell1_5 = row5.insertCell(0);
		cell1_5.innerHTML = "Description";
		let cell2_5 = row5.insertCell(1);
		cell2_5.innerHTML = mtnDesc;
				
		//row6 - Coordinates
		let row6 = displayTable.insertRow(displayTable.rows.length);
		let cell1_6 = row6.insertCell(0);
		cell1_6.innerHTML = "Coordinates";
		let cell2_6 = row6.insertCell(1);
		cell2_6.innerHTML = "(" + mtnLat + " &#176;,  " + mtnLong + " &#176; )";

    }
    /*
    *This is the reset all images button click event handler
    */

};
