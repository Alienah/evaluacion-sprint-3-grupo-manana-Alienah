function getMoreReasons(){

  fetch('http://localhost:3000/api/reasons')
    .then((response) => response.json())
    .then((json) => {
      const reasons = json.reasons;
      let listHTML = '';
      for (let i = 0; i < reasons.length; i++) {
        listHTML += '<li class="block-text reasons-item"><h3 class="list-title">' + reasons[i].title + '</h3><p>' + reasons[i].description + '</p></li>';
      }
      const ul = document.querySelector('.reasons-list');
      ul.innerHTML += listHTML;
    });
}

const moreButton = document.querySelector('.more-button');
moreButton.addEventListener('click', getMoreReasons);
