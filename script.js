function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

import colors from "./data/colors.json" assert { type: 'json' }
import quotes from "./data/quotes.json" assert { type: 'json' }
		
var currentQuote = "";
var currentAuthor = "";
var randomquote = "";
var randomcolor = "";

function getQuote() {
	randomquote = Math.floor(Math.random() * quotes.length);
	randomcolor = Math.floor(Math.random() * colors.length);
    currentQuote = quotes[randomquote][0];
    currentAuthor = quotes[randomquote][1];

	$(document).ready(function () {
	    $('html body').animate({
	        backgroundColor: colors[randomcolor],
	        color: colors[randomcolor]
	    }, 500);
			$('blockquote footer').animate({ color: colors[randomcolor] }, 500);	
	    $('blockquote').animate({ borderLeftColor: colors[randomcolor] }, 500);
	    $('#quotetext').animate({ opacity: 0 }, 500, function () {
	        $(this).animate({ opacity: 1 }, 500);
	        $(this).text(currentQuote);
	    });
	    $('#quotesource').animate({ opacity: 0 }, 500, function () {
	        $(this).animate({ opacity: 1 }, 500);
	        $(this).text(currentAuthor);
	    });
    });    
}

function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

getQuote();

$(document).ready(function () {
    $('#newquote').on('click', getQuote);
});
