var checkList= document.getElementById("checklist");
//console.log(checkList);
var listItems= checkList.querySelectorAll("li");
//console.log(listItems);
var inputItems= checklist.querySelectorAll("input");
//console.log(inputItems);

for(var i=0; i<listItems.length; i++)
{
	//console.log(listItems[i]);
	listItems[i].addEventListener("click", editItem);
	inputItems[i].addEventListener("blur", updateItem);
	inputItems[i].addEventListener("keypress", updateItemKeypress);

}

function editItem()
{
	//console.log(this);
	this.className="edit";
	var input= this.querySelector("input");
	//console.log(input);
	//console.log(input.value);
	input.focus();//focusses on the clicked input 
	input.setSelectionRange(0, input.value.length);//selects the "value" attribute of this.input

}

function updateItem()
{
	this.previousElementSibling.innerHTML=this.value;// previousElementSibling refers to the "span", right before the "input" tag in the index.html file. They both have the same parent <li> tag
	this.parentElement.className="";
}

function updateItemKeypress(event)
{
	//console.log(event);//keypress functions take in an argument called event, which contains all the data about the key pressed
	//console.log(event.which);//The "which" field in the "event" gives the ascii value of the keypressed
	if (event.which==13)
	{
		updateItem.call(this);// we call the updateItem function, but in it, "this" will not be explicitly defined, so functionName.call(this) explicitly provides "this" as the "this" inside my current function
	}
}






















