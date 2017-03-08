var button = document.getElementById('button');
button.addEventListener('click', function (){
	
	var myFoodList = ['pasta alfredo', 'meatloaf', 'pizza', 'minestrone soup', 'pad thai', 'chicken curry', 'Swedish meatballs', 'lasagna', 'hamburger and fries', 'ceasar salad', 'omelete', 'pancakes', 'tomato soup', 'beef stew - stifado'];
	var eatForDinner = myFoodList[Math.floor(Math.random() * myFoodList.length)];

	var phrases = ['Have you considered ', 'Maybe ', 'How about ', 'How do you feel about some ', 'Tried ', 'Some delicious '];
	var useThisPhrase = phrases[Math.floor(Math.random() * phrases.length)];

	// var h2List = document.querySelectorAll('h2');

	// h2List.forEach(function(item) {
	// 	item.remove();
	// });

	// var eatThis = document.createElement('h2');
	// eatThis.textContent = useThisPhrase + eatForDinner + '?';

	// var parent = button.parentNode;
	// parent.appendChild(eatThis);

	var h2 = document.querySelector('h2');
	document.querySelector('h2').textContent = useThisPhrase + eatForDinner + '?';


	var textSuggestions = ['No thanks.', 'Another!', 'Not my taste.', '"Allergic"', 'Next.', 'Nope.']
	var buttonText = textSuggestions[Math.floor(Math.random() * textSuggestions.length)];

	button.textContent = buttonText;


});