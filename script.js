console.log('Hello World!!');
/* if/else : line 143
functions : line 323 */


/* ************************************* LECTURE1 *********************************
************************************ VARIABLE AND DATA TYPE ********************** */

/* *******Permitive JS dataType********
1.Number: floating point nos , for decimal amd integer (considering 5 as 5.0)
2.String: sequence of characters,used for text
3.Boolean: logical data type (true/false)
4.Undefined: data type of variabel that doesn't have a  value yet
5.Null: also mean non existent*/

var firstName = 'Areeba';
console.log(firstName);

var lastName = 'Seher';
var age = 20;

//Boolean DataType
var fullAge = true;
console.log(fullAge);

//Undefined
var job;
console.log(job);

job = "kasai";
console.log(job);

/* ************RULES ***********
1.variable can't start with numbers
2.variable cant start with symbols
3.can't use builtin functions as variable name
4.we can use _ and $ before variables to break first 3 rules 
5.we cant use symbols between variables name
6.best practise is to use camel case notation*/


var _3jobareeba = 'kasai';
var $delete = "areeba"

/* ********************************LECTURE 2 *********************************************
***********************VARIABLE MUTATION AND  TYPE COERCION **************************** */ 

//TYPE COERCION: converrsion of one data type into another automatically
var firstName = "Areeba"
var age = 20
console.log(firstName + ' '+ age) //convert numeric age into string automatically ,now age is string while printing


var job, isMarried, isNotMarried;   //definig multiple variables
job = 'teacher';
isMarried = false
console.log(firstName + ' is a ' + age + ' years old ' + job + ' is she married? ' + isMarried);
console.log(firstName + ' is a ' + age + ' years old ' + job + ' is she married? ' + isNotMarried);


//VARIABLE MUTATION: change the value of variable (if already defined as var then no need to define it again as var)
age = "twenty eight";
job = "driver";
//alert(firstName + ' is a ' + age + ' years old ' + job + ' is he married? ' + isMarried);

//lastName = prompt("What is your last name?")  //shows a prompt window for user input
console.log(firstName + ' ' + lastName)



/* ********************************LECTURE 3 *********************************************
*********************** BASIC OPERTAORS **************************** */ 

//Maths operators
var now, yearAreeba, yearYusra;
now = 2019;
var ageAreeba = 21;
var ageYusra = 15;
yearAreeba = now - ageAreeba
yearYusra = now - ageYusra
console.log('Areeba bithdate ' + yearAreeba + ' and Yusra birthdate ' + yearYusra);
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

//Logical operators
var YusraOlder = ageAreeba < ageYusra;
console.log(YusraOlder);

//Typeof operator
console.log(typeof YusraOlder);
console.log(typeof now);
console.log(typeof 'Hello');
var x;
console.log(typeof x);



/* ********************************LECTURE 4 *********************************************
*********************** OPERTAOR PRECEDENCE **************************** check Mozilla firefox JS precedence table */

//Multiple Operators
var fullAge = 18;
var isFullAge = now - yearAreeba >= fullAge; // -,>=
console.log(isFullAge);

//Grouping
var x = (2 + 2) / 2
console.log(x)

//Multiple Assignments
var p,q;
p = q = (2 + 3) * 4 -1; //(),*,- ,19   
/* precedence of = is low and associativity is from right to left 
so first 19 is assigned to q and then p */
console.log(p, q);

//More Operators
x *= 2     //x = x * 2
console.log(x)
x++     // x = x + 1
console.log(x)


//********************************CODING CHALLENGE ********************************************* 

var JohnMass, JohnHeight, MarkMass, MarkHeight, BMIJohn, BMIMark;
JohnMass = 30;
JohnHeight = 7;

MarkMass = 40;
MarkHeight = 8;

BMIJohn = JohnMass / (JohnHeight * JohnHeight);
BMIMark = MarkMass / (MarkHeight * MarkHeight);
console.log("Mark's BM1:",BMIMark,"and John's BMI:",BMIJohn);

var IsMarkHasHigherBMI = BMIMark > BMIJohn;
//console.log('Is Mark\'s BMI is higher than John\'s?',IsMarkHasHigherBMI);
console.log("Is Mark's BMI is higher than John's?",IsMarkHasHigherBMI);



/* ********************************LECTURE 5 *********************************************
*********************** IF / ELSE STATEMENTS **************************** */
// AND (&&), OR (||), NOT (!)

var firstName = 'Areeba';
var civilStatus = 'Single';

if (civilStatus === 'married') {
	console.log(firstName + ' is married');
} else {
	console.log(firstName + ' will hopefully marry soon');
}


var IsMarried = false;
if (IsMarried) {
	console.log("He is Married");
} else {
	console.log("He is not married");
}


if ( BMIMark > BMIJohn) {
	console.log('BMI of Mark is higher than John');
} else {
	console.log('BMI of John is greater tha Mark');
}


/* ********************************LECTURE 6 *********************************************
*********************** BOOLEAN LOGIC **************************** */
var firstName = 'Areeba';
var age = 13;

 if (age < 13) {
 	console.log(firstName + ' is a boy');
 } else if (age >= 13 && age < 20) {
 	console.log(firstName + ' is a teenager');
 } else if (age >= 20 && age < 30) {
 	console.log(firstName + ' is a young man');
 } else {
 	console.log(firstName + ' is a man');
 }




/* ********************************LECTURE 7 *********************************************
*********************** THE TERNARY OPERATOR AND SWITCH STATEMENTS **************************** */
//TERNARY OPERATOR: allow if and else statement in 1 line (syntax: condition ? body of if : body of else)

//Ternary operator
var firstName = 'Areeba'
var age = 21

age >= 18 ? console.log(firstName + 'Drinks Beer') : console.log(firstName + 'Drinks Juice');

var drink = age >= 18 ? 'Beer' : 'Juice';
console.log(drink);

/*if (age >= 18) {
	var drink = 'Beer';
} else {
	var drink = 'Juice'
} */

//Switch statement(if break is not present then after initiating with 1st true statement it will run all below statement chahy true hon ya false)

var job = 'designer';

switch (job) {
	case 'teacher':   //if job == 'teacher'
	case 'instructor':
		console.log(firstName + ' teaches kids how to code.');
		break;
	case 'driver':  //else if job == 'driver' 
		console.log(firstName + ' drives a taxi in Pakistan');
		break;
	case 'designer':
		console.log(firstName + ' designs beautiful websites.');
		break;
	default:   //else
		console.log(firstName + ' does something else.');
}



/*var firstName = 'Areeba';
var age = 13;

 if (age < 13) {
 	console.log(firstName + ' is a boy');
 } else if (age >= 13 && age < 20) {
 	console.log(firstName + ' is a teenager');
 } else if (age >= 20 && age < 30) {
 	console.log(firstName + ' is a young man');
 } else {
 	console.log(firstName + ' is a man');
 } */


 //switch statements in case of LOGICAL Operators (convert above commented code into switch statement)
var firstName = 'Hammad';
var age = 12;

switch (true) {
	case age < 13:    //if logical condition == true
		console.log(firstName + ' is a boy');
		break;
	case age >= 13 && age < 20:
		console.log(firstName + ' is a teenager');
		break;
	case age >= 20 && age < 30:
		console.log(firstName + ' is a young man');
		break;
	default:
		console.log(firstName + ' is a man');
}


/* ********************************LECTURE 8 *********************************************
*********************** TRUTHY AND FALSY VALUES AND EQUALITY OPERATORS**************************** */

//Falsy Value: A value that is considered false evaluated in if and else statements (undefined , null , 0, NaN, '')
//Truthy Value: Not falsy values

var height;
//var height = 0
//var height = ''

if (height) {    //height = undefined = false
	console.log("Variable is defined");
} else {
	console.log("Variable is not defined");
}

var weight;
weight = 0

if (weight || weight === 0) {    //weight = undefined = false , false or true = true
	console.log("Variable is defined");
} else {
	console.log("Variable is not defined");
}

//Equality Operator
//stict equality(===): does not do type coercion , 23 === '23' results false
//non stict equality(==): does type coercion , 23 == '23' results true
//Best practise (use === )
var height = '23';

if (height === 23) {
	console.log('The === operator does not do type coercion ')
} else if (height == '23') {
	console.log('The == operator does type coercion ')
}

// ******************************** CODING CHALLENGE 2 *********************************************

var JohnTeamScores, MikeTeamScores, MaryTeamScores;

MaryTeamScores = (89+120+103) / 3;
JohnTeamScores = (116+94+123) / 3;
//MaryTeamScores = (97+134+105) /3;
MikeTeamScores = (89+120+103) / 3;


if (JohnTeamScores > MikeTeamScores && JohnTeamScores > MaryTeamScores) {
	console.log("John Team is the winner with scores " + JohnTeamScores)
} else if (MikeTeamScores > JohnTeamScores && MikeTeamScores > MaryTeamScores) {
	console.log("Mike Team is the winner with scores " + MikeTeamScores)
} else if (MaryTeamScores > JohnTeamScores && MaryTeamScores > MikeTeamScores) {
	console.log("Mary Team is the winner with scores " + MaryTeamScores)
} else {
	console.log("Draw")
}
console.log(JohnTeamScores, MikeTeamScores, MaryTeamScores)


/* ********************************LECTURE 9 *********************************************
********************************** FUNCTIONS ******************************************* */

function calculateAge(birthYear) {
	return 2019 - birthYear;
}    //return when function have to be reused in another function

var ageAreeba = calculateAge(1998);  //if func return something then save it into another var while calling
var ageYusra = calculateAge(2004);
console.log(ageAreeba, ageYusra);


function yearsUntilRetirment(years, firstName) {
	var age = calculateAge(years);
	var retirement = 60 - age;
	if (retirement > 0) {
		console.log(firstName + ' will retired after ' + retirement + ' years.');
	} else {
	console.log(firstName + ' is already retired');
	}
}

yearsUntilRetirment(1998,'Areeba');
yearsUntilRetirment(1912,'unknown');


/* ********************************LECTURE 10 *********************************************
********************************** FUNCTION STATEMENT AND EXPRESSION ******************************************* */

//Function declaration
//function whatDoYouDo(job,firstName) { }

//Function Expression
var whatDoYouDo = function(job, firstName) {
	switch (job) {
		case 'teacher':
			return (firstName + ' teaches students how to code'); //return in switch finishes the function alse so equivalent of break
		case 'driver':
			return (firstName + ' drives uber in Pakistan');
		case 'designer':
			return (firstName + ' designs websites');
		default:
			return (firstName + ' does something else')
	}
}

console.log(whatDoYouDo('teacher','Areeba'))


/* when JS expects some value then means expression (expression returns some results 2+3=5, x<y = true) */
/* Statements doesnt return results ,return undefined */


/* ********************************LECTURE 10 *********************************************
********************************** ARRAYS ******************************************* */
//arrays: can have different data type

//Initialize new array
var names = ['Areeba','Sara','Yusra'];
var years = new Array(1998,2004,2011); //another way to define an array
console.log(years)

console.log(names[0]) //Areeba
console.log(names.length) //prints length of an array

//Mutate array data
names[1] = 'AreebaSeher'
names[names.length] = 'Pappa'  //add pappa on the last index in array
names[5] = 'none'
console.log(names)

//Different Data Type
var Areeba = ['Areeba','Seher',1998,'Student', false]
Areeba.push('Like fruits') //adds element in last in array
Areeba.unshift('Mrs.') //adds element at the begining in array
Areeba.pop() //removes element from the end in array
Areeba.shift() //removes 1st element from the array
console.log(Areeba)
console.log(Areeba.indexOf(1998)) //returns the indexof given element
console.log(Areeba.indexOf(13)) //return -1 if element is not present in array

var isDesigner = Areeba.indexOf('designer') === -1 ?
'Areeba is not a designer' : 'Areeba is designer';
console.log(isDesigner)


// ******************************** CODING CHALLENGE 3 *********************************************

/* function Tip(bill) {
	if (bill < 50) {
		return  (20/100) * bill
	} else if (bill >= 50 && bill < 200 ) {
		return (15/100) * bill
	} else {
		return (10/100) * bill
	}
} */


function Tip(bill) {
	var percentage;
	if (bill < 50) {
		percentage = .2
	} else if (bill >= 50 && bill < 200 ) {
		percentage = .15
	} else {
		percentage = .1
	}
	return percentage * bill
}

var bills = [124,48,268]
var tips = [Tip(bills[0]), Tip(bills[1]), Tip(bills[2])]

var finalValues = [tips[0]+bills[0], tips[1]+bills[1], tips[2]+bills[2]]
console.log(tips, finalValues)


/* ********************************LECTURE 11 *********************************************
********************************** Objects and Properties ******************************************* */

//Objects: Key/Value pair (grouping of different variables , order doesnt matter) name = { key: value } ,key is the property of name
//arrays: order matter

//objects literal
var John = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1976,
	family: ['Mike','Mary','Jasmine'],
	job: 'teacher',
	isMarried: true
};
console.log(John);
console.log(John.firstName);  //prints John
console.log(John['firstName']);  //prints John
var x = 'birthYear';
console.log(John[x]); //prints 1976

//mutate
John.firstName = 'Areeba'
John['lastName'] = 'Seher'
John['family'][0] = 'Yusra'
console.log(John)


//new object
var Jane = new Object();
Jane.firstName = 'Jane';
Jane.lastName = 'Abrahim';
Jane['birthYear'] = 1989;
Jane['family'] = ['Mike','John'];
Jane['relation'] = 'Single'
console.log(Jane)


/* ********************************LECTURE 12 *********************************************
********************************** Objects and Methods ******************************************* */

//objects attached to functions are called Methods
//arrays are also objects because arrays also have methods .push() , .indexOf()
var Johnn = {
	firstName: 'Johnn',
	lastName: 'Smith',
	birthYear: 1976,
	family: ['Mike','Mary','Jasmine'],
	job: 'teacher',
	isMarried: true,
	calcAge: function(birthYear) {  //function expression
		return 2019 - birthYear;
	}
};

console.log(Johnn.calcAge(1976))

var Johnn = {
	firstName: 'Johnn',
	lastName: 'Smith',
	birthYear: 1976,
	family: ['Mike','Mary','Jasmine'],
	job: 'teacher',
	isMarried: true,
	calcAge: function() {  
		this.age = 2019 - this.birthYear;   //this.birthYear means birthYear of Johnn object ,this.age also add age in object
	}      //this = Johnn
};

Johnn.calcAge()
console.log(Johnn)


// ******************************** CODING CHALLENGE 4 *********************************************

var John = {
	fullName: 'John Smith',
	mass: 91,
	height: 7.5,
	calcBMI: function() {
		this.BMI = this.mass/(this.height * this.height)
		return this.BMI
	}
};

var Mike = {
	fullName: 'Mike Elane',
	mass: 45,
	height: 6.1,
	calcBMI: function() {
		this.BMI = this.mass/(this.height * this.height)
		return this.BMI
	}
};

console.log("John:",John.calcBMI())
console.log("Mike:",Mike.calcBMI())

if(John.calcBMI() > Mike.calcBMI()) {
	console.log(John.fullName + " has highest BMI " + John.calcBMI());
} else if (Mike.calcBMI() > John.calcBMI()) {
	console.log(Mike.fullName + " has highest BMI " + Mike.calcBMI());
} else {
	console.log('Both have same BMIs');
}


/* ********************************LECTURE 13 *********************************************
********************************** LOOPS AND ITERATION ******************************************* */

for (var i = 0; i < 10; i++) {   //for( initiate var; condition; iteration)
	console.log(i)
}

//Debug
// i = 0 , 0 < 10 true, log i to console, i++
// i = 1 , 1 < 10 true, log i to console, i++
//.......
// i = 9 , 9 < 10 true, log i to console, i++
// i = 10 , 10 < 10 false, exit

for (var i = 0; i < 10; i +=2 ) {   //for( initiate var; condition; iteration)
	console.log(i)
}

var Moiz = ['Moiz','December',1997,'Electronic Engineer']
for (var i = 0; i < Moiz.length; i++) {
	console.log(Moiz[i]);
}


//While loop

var i = 0;
while (i < Moiz.length) {
	console.log(Moiz[i]);
	i++
}


//Continue and Break statement

for (var i = 0; i < Moiz.length; i++) {
	if (typeof Moiz[i] !== 'string') continue;    //continue means ,restart the loop   if(){continue} console.lo
	console.log("Continue",Moiz[i]);
}

for (var i = 0; i < Moiz.length; i++) {
	if (typeof Moiz[i] !== 'string') break;    //break means break the whole loop
	console.log("Break",Moiz[i]);
}


//Looping backward
for (var i = Moiz.length-1; i >=0 ; i--) {
	console.log(Moiz[i]);
}



// ******************************** CODING CHALLENGE 5 *********************************************

//John Family
var JohnBills = {
	bills: [124, 48, 268, 180, 42],
	tips: [],
	finalPaid: [],
	tip: function(){
		for(var i=0; i < this.bills.length; i++) {
			console.log('length',this.bills.length)
			var percentage;
			var bill = this.bills[i];
			if (bill < 50) {
				percentage = 0.2;
			} else if (bill >=50 && bill <=200 ) {
				percentage = 0.15;
			} else {
				percentage = 0.1
			}
			this.tips[i] = bill * percentage
			this.finalPaid[i] = bill + this.tips[i]
		}
		return this.tips 
	}
};


//Mike Family
var MarkBills = {
	bills: [77,534, 110, 45],
	tips: [],
	finalPaid: [],
	tip: function(){
		for(var i=0; i < this.bills.length; i++) {
			console.log('length',this.bills.length)
			var percentage;
			var bill = this.bills[i];
			if (bill < 100) {
				percentage = 0.2;
			} else if (bill >=100 && bill <=300 ) {
				percentage = 0.1;
			} else {
				percentage = 0.25;
			}
			this.tips[i] = bill * percentage
			this.finalPaid[i] = bill + this.tips[i]
		}
		return this.tips 
	}
};



//Average tip of both families
function Average(tips) {
	var sum = 0;
	for (var i = 0; i < tips.length; i++) {
		sum += tips[i]
	}
	return sum/(tips.length)
}

JohnBills.average = Average(JohnBills.tip())
MarkBills.average = Average(MarkBills.tip())
console.log("John",JohnBills)
console.log("Mark",MarkBills)

//Which family paid highest tip
Average(MarkBills.tips) > Average(JohnBills.tips) ? console.log('Marks family paid highest tips',MarkBills.average) :
console.log('Johns family paid highest tips',JohnBills.average)

//Yayyyyyyyyyyyyyyyyyyyy I have solved it......... :)
//1996: JS changed from LIVESCRIPT to JAVASCRIPT
//1997: ES1:(ECMAScript1) , 1st version
































