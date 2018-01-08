'use strict';

(function() {
	var speed = 600;
	var movingFrequency = 15; // Affects performance !
	var links = document.getElementsByTagName('a'); //Capta los elementos con ancla
	var href;
	for(var i=0; i<links.length; i++) { //Recorre todos los elementos con ancla
    href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
    if(href !== null && href.length > 1 && href.substr(0, 1) == '#') {
      links[i].onclick = function() { //
        var element;
        var href = this.attributes.href.nodeValue.toString();
        if(element = document.getElementById(href.substr(1))) {
          var hopCount = speed/movingFrequency;
          var getScrollTopDocumentAtBegin = getScrollTopDocument();
          var gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hopCount;
          for(var i = 1; i <= hopCount; i++) {
            (function() {
              var hopTopPosition = gap*i;
              setTimeout(function(){  window.scrollTo(0, hopTopPosition + getScrollTopDocumentAtBegin); }, movingFrequency*i);
            })();
          }
        }
            return false;
      };
    }
	}

	var getScrollTopElement =  function (e) {
    var top = 0; //Define la posición del scroll destino. Si se quiere posicionar un poco antes de que empiece la sección, se tendría que poner el número en negativo
    while (e.offsetParent != undefined && e.offsetParent != null) {
      top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
      e = e.offsetParent;
    }
    return top;
	};

	var getScrollTopDocument = function() {
    return document.documentElement.scrollTop + document.body.scrollTop;
	};
})();
