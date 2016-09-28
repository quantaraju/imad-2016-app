/*console.log('Loaded!');

//Change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = "New Text";

// Move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
	marginLeft = marginLeft + 1;
	img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
	var interval = setInterval(moveRight, 50);
};*/

var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
	//Create a request object
	var request = new XMLHttpRequest();

	// capture the response and store it in a variable
	request.onreadystatechange = function () {
		console.log("One");
		if (request.readyState === XMLHttpRequest.DONE) {
			console.log("two");
			// Take some action
			if (request.status === 200) {
				var counter = request.responseText;
				var span = document.getElementById('count');
				span.innerHTML = counter.toString();			
			}
		}
		console.log("three");
	};
	// Make the request
	request.open('GET', 'http://quantaraju.imad.hasura-app.io/counter', true);
	//request.open('GET', 'http://localhost:8080/counter', true);
}