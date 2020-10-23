(function() {
  const speed = 600;
  const movingFrequency = 15; // Affects performance !
  const links = document.getElementsByTagName('a'); //Capta los elementos con ancla
  let href;

  const getScrollTopDocument = function() {
    return document.documentElement.scrollTop + document.body.scrollTop;
  };

  const getScrollTopElement =  function (e) {
    let top = 0; //Define la posición del scroll destino. Si se quiere posicionar un poco antes de que empiece la sección, se tendría que poner el número en negativo
    while (e.offsetParent !== undefined && e.offsetParent !== null) {
      top += e.offsetTop + (e.clientTop !== null ? e.clientTop : 0);
      e = e.offsetParent;
    }
    return top;
  };
  for(let i=0; i<links.length; i++) { //Recorre todos los elementos con ancla
    href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
    if(href !== null && href.length > 1 && href.substr(0, 1) === '#') {
      links[i].onclick = function() { //
        const href = this.attributes.href.nodeValue.toString();
        const element = document.getElementById(href.substr(1));
        if(element) {
          const hopCount = speed/movingFrequency;
          const getScrollTopDocumentAtBegin = getScrollTopDocument();
          const gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hopCount;
          for(let i = 1; i <= hopCount; i++) {
            (function() {
              const hopTopPosition = gap*i;
              setTimeout(function(){  window.scrollTo(0, hopTopPosition + getScrollTopDocumentAtBegin); }, movingFrequency*i);
            })();
          }
        }
        return false;
      };
    }
  }

})();
