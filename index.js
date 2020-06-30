var addTextInput = document.getElementById("addTextInput");
var addTaskBtn = document.getElementById("addTaskBtn");
var toDoList = document.getElementById("toDoList");
var completedList = document.getElementById("completedList");

//press enter to add new task
addTextInput.onkeyup = function(g) {
    if (g.keyCode == 13 && addTextInput.value != "") {
        addTaskBtn.onclick();
    }
};

addTaskBtn.onclick = function() {
	var li = document.createElement("li");

	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.onclick = function() {	
		li.remove();
		if (checkbox.checked === true) {
			completedList.appendChild(li);
		} else {
			toDoList.appendChild(li);
		}	
	}
	li.appendChild(checkbox);

	var inputText = document.createElement("input");
	inputText.type = "text";
	inputText.disabled = true; 
	inputText.value = addTextInput.value;
	li.appendChild(inputText);

	//create Delete button
	var deleteBtn = document.createElement("input");
	deleteBtn.type = "button";
	deleteBtn.value = "Delete";
	deleteBtn.classList.add("left-mrg");
	deleteBtn.onclick = function() {
		li.remove();
	}
	li.appendChild(deleteBtn);

	//create Edit button
	var editBtn = document.createElement("input");
	editBtn.type = "button";
	editBtn.value = "Edit";
	editBtn.classList.add("left-mrg");
		editBtn.onclick = function() {
		if(editBtn.value === "Edit") {
			inputText.disabled = false;
			editBtn.value = "Save";
		} else {
			inputText.disabled = true;
			editBtn.value = "Edit";
		}
	}
	li.appendChild(editBtn);

	toDoList.appendChild(li);
	addTextInput.value = "";
};
