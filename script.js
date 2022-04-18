let data = [{"name":"Mikky","type":"dog","age":3},{"name":"Neon","type":"cat","age":0.5},{"name":"Neon","type":"cat","age":0.5},{"name":"Neon","type":"cat","age":0.5}];

//Создаём таблицу
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const main = document.querySelector('main');
let index = 0;
let deleteTable;
let stroks;
let verifyBtn;
  
table.appendChild(thead);
table.appendChild(tbody);

const div = document.createElement("div");
div.className = "Container__button"
const buttonAdd = document.createElement("button");
buttonAdd.className = "buttons buttons_add";
buttonAdd.innerHTML = "Добавить";

div.appendChild(buttonAdd);

buttonAdd.addEventListener("click", function (){
	let alltr = document.querySelectorAll(".strok");
	if (alltr[alltr.length-1].classList != "blank strok") {

		let row_2 = document.createElement('tr');
		row_2.className = "blank strok";
		let row_2_data_1 = document.createElement('td');
		row_2_data_1.className = 'td name';
		let inputName = document.createElement("input");
		inputName.className = "input";
		let row_2_data_2 = document.createElement('td');
		row_2_data_2.className = 'td type';
		
		let inputType = document.createElement("input");
		inputType.className = "input";
		
		let row_2_data_3 = document.createElement('td');
		row_2_data_3.className = 'td age';
		
		let inputAge = document.createElement("input");
		inputAge.className = "input";
		
		let row_2_data_4 = document.createElement('td');
		row_2_data_4.innerHTML = 'х';
		row_2_data_4.className = 'delete';

		let verifyBtn = document.createElement('td');
		verifyBtn.innerHTML = 'ок';
		verifyBtn.className = 'finish-add';
		verifyBtn.style.color = "green";
		verifyBtn.style.cursor = "pointer";
		
		row_2_data_1.appendChild(inputName)
		row_2_data_2.appendChild(inputType)
		row_2_data_3.appendChild(inputAge)
		row_2.appendChild(row_2_data_1);
		row_2.appendChild(row_2_data_2);
		row_2.appendChild(row_2_data_3);
		row_2.appendChild(verifyBtn);
		row_2.appendChild(row_2_data_4);
		tbody.appendChild(row_2);

		verifyBtn.addEventListener("click", function (){
			data.push({});
			verify(this);	
			this.remove();
		});
	}
});


function verify(contekst){
	let inputs = contekst.parentElement.querySelectorAll(".input");
	inputs.forEach( function(input) {
			let inner = input.parentElement;
			let indexClass = String (inner.className.split(" ")[1]);

			if (indexClass == "name") {
				inner.innerHTML = data.length +  " " + input.value;
				data[data.length-1].name = input.value;
			} else if (indexClass == "type") {
					inner.innerHTML = input.value;
					data[data.length-1].type = input.value;
				} else if (indexClass == "age") {
					inner.innerHTML = input.value;
					data[data.length-1].age = input.value;
				}

			inner.parentElement.classList = "strok";
	});
	deleteTable = document.querySelectorAll(".delete");
	deleteTable[deleteTable.length-1].onclick = deleteX;
}







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

create();

for(i=0; i < stroks.length; i++){
	let tds = stroks[i].querySelectorAll(".td");
	tds.forEach( function(td) {
		td.addEventListener('click', function inter (){

			let input = document.createElement("input");
			let index = this.parentElement.querySelector(".name").innerHTML;

			input.value = this.innerHTML;
			this.innerHTML = "";
			this.appendChild(input);
			
			let inner = this;

			input.addEventListener("blur", function(){
				inner.innerHTML = this.value;
				let indexClass = String (inner.className.split(" ")[1]);

				if (indexClass == "name") {
					index = index.slice(0, 3);
					let n = index.slice(0, 1);
					data[n-1].name = this.value;
					inner.innerHTML = index + this.value;

				}else{


					let name = inner.parentElement.querySelector(".name").innerHTML;
					let char = parseInt(name.slice(0,1));
					
					if (indexClass == "type") {
						data[char-1].type = this.value;
					} else if(indexClass == "name"){
						data[char-1].name = this.value;
					}else if (indexClass == "age") {
						data[char-1].age = this.value;
					}

				}

				inner.addEventListener("click", inter);

			});

			this.removeEventListener('click', inter);
		});
	});
}


function create(){
data.forEach( function(item) {
	index++;
	let row_2 = document.createElement('tr');
	row_2.className = "strok";
	let row_2_data_1 = document.createElement('td');
	row_2_data_1.innerHTML = index + " :" + item.name;
	row_2_data_1.className = 'td name';
	let row_2_data_2 = document.createElement('td');
	row_2_data_2.innerHTML = item.type;
	row_2_data_2.className = 'td type';
	let row_2_data_3 = document.createElement('td');
	row_2_data_3.innerHTML = item.age;
	row_2_data_3.className = 'td age';
	let row_2_data_4 = document.createElement('td');
	row_2_data_4.innerHTML = 'х';
	row_2_data_4.className = 'delete';


	row_2.appendChild(row_2_data_1);
	row_2.appendChild(row_2_data_2);
	row_2.appendChild(row_2_data_3);
	row_2.appendChild(row_2_data_4);
	tbody.appendChild(row_2);

	stroks = document.querySelectorAll(".strok");

});
	deleteTable = document.querySelectorAll(".delete");
}


deleteTable.forEach( function(item) {
	item.onclick = deleteX;
});

function deleteX (){
		let name = this.parentElement.querySelector(".name").innerHTML;
		let char = parseInt(name.slice(0,1));
		delete data[char-1];
		this.parentElement.remove();
		deleteTable = document.querySelectorAll(".delete");
		stroks = document.querySelectorAll(".stroks");
}


