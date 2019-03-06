


var css = document.querySelector("h3");
var colorOne = document.querySelector(".colorOne");
var colorTwo = document.querySelector(".colorTwo");
var body = document.getElementById("gradient")


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
		+ colorOne.value 
		+ ", " 
		+ colorTwo.value 
		+")";

		
		css.textContent = body.style.background + ";";
}

colorOne.addEventListener("input",  setGradient);
colorTwo.addEventListener("input",  setGradient);




// colorOne.addEventListener("input", function(){
// 	body.style.background = "linear-gradient(to right, " 
// 		+ colorOne.value 
// 		+ ", " 
// 		+ colorTwo.value 
// 		+")";
// })

// colorTwo.addEventListener("input", function(){
// 	body.style.background = "linear-gradient(to right, " 
// 		+ colorOne.value 
// 		+ ", " 
// 		+ colorTwo.value 
// 		+")";
// })
















// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");
// var listItems = document.getElementsByTagName("li"); 



// // var removeBtn = document.createElement("button");
// // removeBtn.innerHTML = "remove";

// // function removeBtn() {
// // 	var removeBtn = document.createElement("button");
// // removeBtn.innerHTML = "remove";

// // }



// function inputLength() {
// 	return input.value.length;
// }

// function createListElement() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li); 
// 	input.value = "";

// 		var btn = document.createElement("button");
//      	btn.appendChild(document.createTextNode("Delete!"));
//  		li.appendChild(btn);
//  		btn.onclick = removeParent;

// }




// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 		createListElement();
		
// 	}
// }

// function addListAfterEvent(event) {
	
// 	if (inputLength() > 0 && event.keyCode === 13){ 
// 	createListElement(); 
// }
// }



// button.addEventListener("click", addListAfterClick)

// input.addEventListener("keypress", addListAfterEvent)


// ul.onclick=function(event){
// 	var target=event.target;
// 	target.classList.toggle("done");
// }

// function listLength(){
// 	return listItems.length;
// }

//  function deleteButton(){
// 	var btn=document.createElement("button");
// btn.appendChild(document.createTextNode("Delete!"));
// listItems[i].appendChild(btn);
// btn.onclick=removeParent;
// }

//  for( i=0;i<listLength();i++){

//  deleteButton();
// }

//  function removeParent(evt){
// 	evt.target.parentNode.remove();
// } 





















// // var database = [ 
// // 	{
// // 		username : "jon",
// // 		password : "123"
// // 	},
// // 	{
// // 		username : "sally",
// // 		password : "123"
// // 	},
// // 	{
// // 		username : "In",
// // 		password : "123"
// // 	},

// // ];


// // var newsFeed = [ 
// // 	{
// // 		username : "Bob",
// // 		timeline : "hahahahahahahahahahha"
// // 	},
// // 	{
// // 		username : "AHAHA",
// // 		timeline : "hahahahahahahahahahha"
// // 	}
// // ];

// // function isUserValid(username, password) {
// // 	for (var i=0; i < database.length; i++) {
// // 		if(database[i].username === username &&
// // 			database[i].password === password) {
// // 			return true;
// // 		} 

// // }
// // 	return false;
// // }


// // function signIn(username, password) {
// // 	if(isUserValid(username, password)) {
// // 		console.log(newsFeed);
// // 	} else {
// // 	alert("Sorry, wrong username and password!")
// // }
// // }



// // 	if(user === database[0].username && 
// // 		pass === database[0].password ) {
// // 		console.log(newsFeed);
// // 	} else {
// // 		alert("Sorry, wrong username and password!")
// // 	}
// // }


// // var userNameprompt = prompt("Whats your username?");
// // var passwordprompt = prompt("Whats your password");


// // signIn(userNameprompt, passwordprompt);


















// // var toDo = [
// // 	"clean room",
// // 	"brush teeth",
// // 	"excercise",
// // 	"study js",
// // 	"eat healthy",

// // ];



// // var toDoImportant = [
// // 	"clean room!",
// // 	"brush teeth!",
// // 	"excercise!",
// // 	"study js!",
// // 	"eat healthy!",

// // ];



// // function logtoDos(todo, i){
// // 		console.log(todo, i);
// // 	}

// // toDo.forEach(logtoDos);
// // toDoImportant.forEach(logtoDos);






// // for (var i=0; i < toDo.length; i++) {
// // 	console.log(toDo[i], i);
// // }



// // var counterOne = 10;
// // while (counterOne > 0) {
// // 	console.log(counterOne);
// // 	counterOne--
// // }



// // var counterTwo = 10
// // do {
// // 	console.log(counterTwo);
// // 	counterTwo--;
// // } while (counterTwo > 0)










// // var userOne = {
// // 	name: "John",
// // 	age: 34,
// // 	hobby: "Soccer",
// // 	isMarried: false,
// // 	spells : ["ooo", "aaa","sss"]
// // };

// // var list =[
// // {
// // 	username: "andy",
// // 	password: "secre"
// // },
// // {
// // 	username: "jess",
// // 	password: "123"
// // }

// // ];









// // var list = ["tiger", "cat", "bear", "bird" ];

// // console.log(list[0][2]);





// // function multiply(a, b) {
// // 	if (a > 10 || b > 10) {
// // 		return "thats too hard";
// // 	} else {
// // 		return a*b;
// // 	}
	
// // }

// // alert (multiply(5,10));


// // var age = prompt("Whats your age?")

// // var checkDriverAge = function checkDriverAge(age) {
// // 	if (Number(age < 18)) {
// // 		return "Sorry, you are too young to drive this car. Powering off";
// // 	} else if (Number(age > 18)) {
// // 		return "Powering On. Enjoy the ride!";
// // 	} else if (Number(age === 18)) {
// // 		return "Congratulations on your first year of driving. Enjoy the ride!";
// // }

// // checkDriverAge();


// // Make an keyless car EVEN BETTER!
// // We are improving our car from previous exercise now. 


// // var age = prompt("What is your age?");

// // if (Number(age) < 18) {
// // 	alert("Sorry, you are too yound to drive this car. Powering off");
// // } else if (Number(age) > 18) {
// // 	alert("Powering On. Enjoy the ride!");
// // } else if (Number(age) === 18) {
// // 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// // }

// // //1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// // function checkDriverAge() {
// // 	var age = prompt("What is your age?");
// // 	if (Number(age) < 18) {
// // 		alert("Sorry, you are too yound to drive this car. Powering off");
// // 	} else if (Number(age) > 18) {
// // 		alert("Powering On. Enjoy the ride!");
// // 	} else if (Number(age) === 18) {
// // 		alert("Congratulations on your first year of driving. Enjoy the ride!");
// // 	}
// // }
// // // Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?


// // //2. Create another function that does the same thing, assign it to checkDriverAge2 variable using Function Expression.
// // var checkDriverAge2 = function() {
// // 	var age = prompt("What is your age?");
// // 	if (Number(age) < 18) {
// // 		alert("Sorry, you are too yound to drive this car. Powering off");
// // 	} else if (Number(age) > 18) {
// // 		alert("Powering On. Enjoy the ride!");
// // 	} else if (Number(age) === 18) {
// // 		alert("Congratulations on your first year of driving. Enjoy the ride!");
// // 	}
// // }

// // //BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// // // checkDriverAge(92);
// // // it returns "Powering On. Enjoy the ride!" 
// // function checkDriverAge(age) {
// // 	if (Number(age) < 18) {
// // 		return "Sorry, you are too yound to drive this car. Powering off";
// // 	} else if (Number(age) > 18) {
// // 		return "Powering On. Enjoy the ride!";
// // 	} else if (Number(age) === 18) {
// // 		return "Congratulations on your first year of driving. Enjoy the ride!";
// // 	}
// // }
