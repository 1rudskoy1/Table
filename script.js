let data = [{"name":"Mikky","type":"dog","age":3},{"name":"Neon","type":"cat","age":0.5}];
//Создаём таблицу
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const main = document.querySelector('main');
let deleteTable;
  
table.appendChild(thead);
table.appendChild(tbody);

const div = document.createElement("div");
div.className = "Container__button"
const buttonAdd = document.createElement("button");
buttonAdd.className = "buttons buttons_add";
buttonAdd.innerHTML = "Добавить";

div.appendChild(buttonAdd);

// Добавляем таблицу на страницу
main.appendChild(table);
main.appendChild(div);
const row_1 = document.createElement('tr');
const heading_1 = document.createElement('th');
heading_1.innerHTML = "name";
const heading_2 = document.createElement('th');
heading_2.innerHTML = "type";
const heading_3 = document.createElement('th');
heading_3.innerHTML = "age";


row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);

function create(){
data.forEach( function(item) {
	let row_2 = document.createElement('tr');
	let row_2_data_1 = document.createElement('td');
	row_2_data_1.innerHTML = item.name;
	let row_2_data_2 = document.createElement('td');
	row_2_data_2.innerHTML = item.type;
	let row_2_data_3 = document.createElement('td');
	row_2_data_3.innerHTML = item.age;
	let row_2_data_4 = document.createElement('td');
	row_2_data_4.innerHTML = 'х';
	row_2_data_4.className = 'delete';


	row_2.appendChild(row_2_data_1);
	row_2.appendChild(row_2_data_2);
	row_2.appendChild(row_2_data_3);
	row_2.appendChild(row_2_data_4);
	tbody.appendChild(row_2);

});
	deleteTable = document.querySelectorAll(".delete");
}

create();
console.log(deleteTable);
deleteTable.forEach( function(item) {
	item.onclick = function (){
		console.log(data);
		this.parentElement.remove();
	}
});


