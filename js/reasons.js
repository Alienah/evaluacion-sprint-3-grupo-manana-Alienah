function getMoreReasons(){

fetch('https://three-random-reasons-izwfjpgbqm.now.sh/')
.then(function(response){
  return response.json();
  })
.then(function(json){
  console.log(json);
  var reasons = json.reasons;
  var listHTML = '';
	for (var i = 0; i < reasons.length; i++) {
	  listHTML += '<li class="block-text reasons-item"><h3 class="list-title">' + reasons[i].title + '</h3><p>' + reasons[i].description + '</p></li>';
  	}
	var ul = document.querySelector('.reasons-list');
	ul.innerHTML += listHTML;
	});
}

var moreButton = document.querySelector('.more-button');
moreButton.addEventListener('click', getMoreReasons);
