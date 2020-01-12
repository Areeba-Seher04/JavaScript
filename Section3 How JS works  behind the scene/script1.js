/* SECTION2
/* ******************************** Lecture 6 **********************************
 ******************************** HOISTING ********************************** */

//Function declaration

calcAge(1998);  //when we execute the calcAge is already available in VO, so we dont need to declare it first and then use it.

function calcAge(year) {
	console.log(2019 - year);  //in the creation phase of execution context in this case global executation context
	//function declaration is stored in variable objects even before the code is executed
};

//Function expression

//retirement(1998) //error because retirement is not a function declaration but function expression, Hoistinh is only works for func declaration
var retirement = function(year) {
	console.log(65 - (2019 - year));
};


//Hoisting in variables
console.log(age); //result: undefined ,code is scanned for variable declaration and then variables are set to undefined.
var age = 23;  //defined in global execution context
console.log(age);
//console.log(newVariable); //result: error , newVariable is not defined


function foo() {  //foo function has its own execution context
	console.log(age); //undefined
	var age = 65;  //defined in execution context of foo function
	console.log(age);
}
foo()
console.log(age)  //23 , stored in global execution context


/* ******************************** Lecture 7 **********************************
 ******************************** SCOPING AND THE SCOPE CHAIN ********************************** */

//First Scoping example

 var a = 'Hello';
 first();

 function first() {
 	var b = 'Hi';
 	second();

 	function second() {
 		var c = 'Hey';
 		console.log(a + b + c);
 	}
 }



//Example to show the difference between Execution Stack and Scope Chaining:
//Execution Stack is the order in which function is called. 
/*Scope Chaining is the order in which functions are written lexically , also decides which function can access the 
variables of another function. */

var a = 'Hello';
firstt();

function firstt() {
	var b = 'Hi';
	secondd();

	function secondd() {
		var c = 'hey';
		thirdd();
	}
}

function thirdd() {
	var d = 'John';
	//console.log(c)
}

/* execution stack = first func is called then second then third , when second is called c is defined in this func
then third func is called but error occurs that c is not defined because execution context doesn't deal 
access of variable. */

// execution in stack: third executed first , second , third (see copy)

/* scope chain deals with which function can access which variable of another function. third func is not in the stack 
of first or second func so third func can only use their own variable d and global var a */

/* scope chain of first(): a, b
second(): a, b, c (child can access their parent) 
third(): a, d */




/* ******************************** Lecture 9 **********************************
 ******************************** 'THIS' Keyword ********************************** */

console.log(this) //result: window, window object is default object

calculateAge(2005)
function calculateAge(year) {
	console.log(2018 - year);
	console.log(this);  //result: window because it is regular function call (see copy)
}

var John = {
	name: 'John',
	this: this,  //window
	yearOfBirth: 1990,
	calculateAge: function() {
		console.log(this) //result: John objects because for methods when function is called this keyword points to the obj
		console.log(2018 - this.yearOfBirth);

		function innerfunction() {
			console.log(this) //result: window because innerfunction is a regular function not a method call, calulateAge is a method call
		}
		innerfunction();
	}
}

John.calculateAge() //this keyword points to the object when object calls the method

var mike = {
	name: 'mike',
	yearOfBirth: 1995
}

/*To calculate the mike age we can paste the John calculateAge method to mike but without pasting it in mike object
we can use a something called "METHOD BORROWING", to borrow the john method to use in mike */
mike.calculateAge = John.calculateAge
mike.calculateAge() //this refers to mike object here













































