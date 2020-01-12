/* ************************************ DOM ACCESS AND MANIPULATION ************************************ */
var scores, roundScores, activePlayer, dice;

scores = [0,0]; //[1st player, 2nd player]
roundScores = 0; //one round score at a time
activePlayer = 0; //0 means 1st player and 1 means 2nd player

//Math.random() , gives value from 0 to 0.999999999
//Math.random()*6 , from 0 to 5.9999999999
//Math.floor(2.4) , gives 2 
//we want 1 to 6
//dice = Math.floor(Math.random()*6) + 1;
//console.log(dice);

//object that give access to DOM is document object
//there are many methods that can be used to select ELEMENTS from the webpage , most useful is querySelector

//TO CHANGE VALUE OF ELEMENTS IN WEBPAGE (SETTER)
//document.querySelector('#current-0') will select element
//to change the text in element .textContent method is needed
/*document.querySelector('#current-' + activePlayer).textContent = dice;  //also in css to select id we use 

//ALSO PUT SOME HTML
document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//READ CONTENT FROM ELEMENT (GETTER)
var x = document.querySelector('#score-0').textContent; */

//USE QUERYSELECTOR TO CHANGE CSS OF SOME ELEMENT   ('.class') from html
document.querySelector('.dice').style.display = 'none'       //style.property = 'value'


/* *********************************** EVENTS AND EVENT HANDLING ************************************
****************************************** ROLLING THE DICE *************************************** */


/* EVENTS: notifications that are sent to notify the code that something happend on the webpage.
Events are triggered by clicking a buuton, resizing a window, scrolling down or pressing a key

Event listener is a function that sits and wait for specific event to happened.(e.g window popup, animation)
A function that performs an action based on a certain event. It waits for a specific event to happened */

/*function btn() {
	//do something here
} */

//select the element in which the event is happend  
//document.querySelector('.btn-roll').addEventListener('click',btn)  //addEventListner('type of event',func that will call when event happen) for more types of events check this https://developer.mozilla.org/en-US/docs/Web/Events

//call back function(btn): a function that is passed in another function as an argument and call by that function
//select elements by their ids .getElementById() , fastest than querySelector
document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'

/*ANONYMOUS FUNCTION: if we dont want an external function(btn) called by another func (addEventListener) then we can write
our func directly athe place of btn this isn called anonymous function,doesnt have a name so cant be reuse */

document.querySelector('.btn-roll').addEventListener('click',function () {
	//1. Random Number
	dice = Math.floor(Math.random()*6) + 1;

	//2. DISPLAY THE RESULT
	//dice img block is none so make it visible
	DiceDOM = document.querySelector('.dice')
	DiceDOM.style.display = 'block'  //visible the dice img
	//display random images
	DiceDOM.src = 'dice-' + dice + '.png';  //.src to change the image from html src

	//3.UPDATE THE SCORE IF THE DICE IS NOT ONE
	if (dice !== 1) {
		roundScores += dice
		document.querySelector('#current-' + activePlayer).textContent = roundScores
	} else {
		nextPlayer()
	}

}) 

document.querySelector('.btn-hold').addEventListener('click',function(){
	//Add current score to GLOBAL score
	scores[activePlayer] += roundScores;

	//update the UI
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

	//check if player won the game
	if (scores[activePlayer] >= 20) {
		document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
		document.querySelector('.dice').style.display = 'none'
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')  
		//again and again changing css using .style is not so good make a class with changes and apply that class
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')  //winner is a class here in css not in html
		

	}

	//Next player
	nextPlayer()
})


function nextPlayer() {  //DRY principle , no parameters and not return anything
	//Next Player turn
		activePlayer === 0? activePlayer = 1 : activePlayer = 0
		roundScores = 0;
		document.getElementById('current-0').textContent = '0'
		document.getElementById('current-1').textContent = '0'

		//code to remove class
		// document.querySelector('.player-0-panel').classList.remove('active') //.remove('class')
		// document.querySelector('.player-1-panel').classList.add('active')
		document.querySelector('.player-0-panel').classList.toggle('active')  
		document.querySelector('.player-1-panel').classList.toggle('active')  

}

//toggle : if class is there then remove it and if not there than add it
//add just add the class
//remove just remove the class































