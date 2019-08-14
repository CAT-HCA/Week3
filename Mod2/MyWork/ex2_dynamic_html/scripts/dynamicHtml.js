'use strict';
window.onload = function() {
	let tours = [
		{ category: 'Museum Tours', title: 'A Touch Tour at the Smithsonian Air And Space Museum', price: 45.0 },
		{ category: 'Museum Tours', title: 'A Tour of TV Sets at the American History Museum', price: 15.0 },
		{ category: 'Museum Tours', title: 'Dinosaurs are Alive at the Natural History Museum', price: 65.0 },
		{ category: 'Food Tours', title: 'Squeezing Things at the Farmers Market', price: 12.0 },
		{ category: 'Food Tours', title: 'Murder Mystery at the Vineyard', price: 32.0 },
		{ category: 'Food Tours', title: '101 Ways to Server Brussel Sprouts', price: 8.0 },
		{ category: 'Adventure Tours', title: 'Ziplining the Poconos', price: 115.0 },
		{ category: 'Adventure Tours', title: 'Water Skiing the Amazon', price: 4015.0 },
		{ category: 'Adventure Tours', title: 'Parasailing Iceland', price: 3215.0 },
		{ category: 'Adventure Tours', title: 'Kayaking to Antarctica', price: 3910.0 },
		{ category: 'Adventure Tours', title: 'National Zoo: How to Grab a Skunk by the Neck', price: 80.0 },
		{ category: 'Domestic Animals', title: 'Doggos Barking Tour', price: 29.0 },
	];
	let showBtn = document.getElementById('showBtn');
	let resetBtn = document.getElementById('resetBtn');
	let tourSelect = document.getElementById('tourSelect');
	let tableBody = document.getElementById('tableBody');
	let categoryField = document.getElementById('sortByCat');
	let priceField = document.getElementById('sortByPrice');
	let priceSortDiv = document.getElementById('priceSortDiv');
	let catSortDiv = document.getElementById('catSortDiv');
	let minPriceField = document.getElementById('inputMinPrice');
	let maxPriceField = document.getElementById('inputMaxPrice');

	let len = tours.length;

	categoryField.onclick = function() {
		priceSortDiv.style.display = 'none';
		catSortDiv.style.display = 'block';
	};
	priceField.onclick = function() {
		catSortDiv.style.display = 'none';
		priceSortDiv.style.display = 'block';
	};

	showBtn.onclick = function() {
		while (tableBody.childNodes.length) {
			tableBody.removeChild(tableBody.childNodes[0]);
		}
		if (categoryField.checked) {
			for (let i = 0; i < len; i++) {
				if (tourSelect.value == tours[i].category) {
					insertRowInTable(tableBody, tours[i].category, tours[i].title, tours[i].price);
				}
			}
		} else if (priceField.checked) {
			for (let i = 0; i < len; i++) {
				if (
					parseFloat(minPriceField.value) <= tours[i].price &&
					tours[i].price <= parseFloat(maxPriceField.value)
				) {
					insertRowInTable(tableBody, tours[i].category, tours[i].title, tours[i].price);
				}
			}
		}
	};

	resetBtn.onclick = function() {
		while (tableBody.childNodes.length) {
			tableBody.removeChild(tableBody.childNodes[0]);
			minPriceField.value = '';
			maxPriceField.value = '';
		}
	};
};

function insertRowInTable(tableBody, category, title, price) {
	let row = tableBody.insertRow(tableBody.rows.length);
	let cell1 = row.insertCell(0);
	cell1.innerHTML = category;
	let cell2 = row.insertCell(1);
	cell2.innerHTML = title;
	let cell3 = row.insertCell(2);
	cell3.innerHTML = '$' + price + '.00';
}
