let items = ["milk", "lunch", "fruits"];

let data = document.getElementById("data");

function todo() {
	data.innerHTML = "";
	items.map((item, index) => {
		data.innerHTML += `
          <div >
                <li >${item}</li>
                <button class="delete-button" onclick="deleteItem(${index})">Delete</button>
            </div>
        `;
	});
}
todo();

function addItem() {
	let inputItem = document.getElementById("inputItem");
	let item = inputItem.value;
	// console.log(item);
	// items.push(item);
	items = [...items, item];
	todo();
	inputItem.value = "";
}
function deleteItem(index) {
	items.splice(index, 1);
	todo();
}
