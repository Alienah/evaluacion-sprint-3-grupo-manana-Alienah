'use strict';
function getMoreReasons(){
	var request;
	request = new XMLHttpRequest();
	request.open('GET', 'https://three-random-reasons-izwfjpgbqm.now.sh/');

	request.addEventListener('load', showReasons);

	function showReasons(){
	  var response = request.responseText;
	  var reasons = JSON.parse(response).reasons;
	  var listHTML = '';
	  for (var i = 0; i < reasons.length; i++) {
	    listHTML += '<li class="block-text reasons-item"><h3 class="list-title">' + reasons[i].title + '</h3><p>' + reasons[i].description + '</p></li>';
	  }
	  var ul = document.querySelector('.reasons-list');
	  ul.innerHTML += listHTML;
	}

	request.send();
}
var moreButton = document.querySelector('.more-button');
moreButton.addEventListener('click', getMoreReasons);
