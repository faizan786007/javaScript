// { name: "milk", date: "19-12-2023" },
// 	{ name: "fruits", date: "1-1-2023" },
let items = [];

let data = document.getElementById("data");

function todo() {
	data.innerHTML = "";
	items.map((item, index) => {
		data.innerHTML += `
          <div >
                <li >${item.name}<span class="item-date">${item.date}</span></li>
                <button class="delete-button" onclick="deleteItem(${index})">Delete</button>
            </div>
        `;
	});
}
todo();

function addItem() {
	let inputItem = document.getElementById("inputItem");
	let inputDate = document.getElementById("inputDate");
	let item = inputItem.value;
	let date = inputDate.value;
	// console.log(item);
	// items.push(item);
	items = [...items, { name: item, date: date }];
	todo();
	inputItem.value = "";
	inputDate.value = "";
}
function deleteItem(index) {
	items.splice(index, 1);
	todo();
}
