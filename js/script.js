// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// when user clicks anywhere on the button, the "bg" function is called, and background is changed

document.getElementById('loadQuote').addEventListener("click", bg, false);

//refresh the quote and background every 5 seconds

setInterval(function() {
  printQuote();
  bg();
}, 5000);


var quotes = [
  {
    quote: "Goals are the fuel in the furnace of achievement.",
    source: "- Brian Tracy"
  },
  {
    quote: "The true sign of intelligence is not knowledge but imagination.",
    source: "- Albert Einstein"
  },
  {
    quote: "People think that computer scienceis the art of geniuses but the actual reality\
            is the opposite, just many people doing things that build on each other, like a\
            wall of mini stones.",
    source: "- Donald Knuth"
  },
  {
    quote: "Those who dare to fail miserably can achieve greatly",
    source: "- John F. Kennedy"
  },
  {
    quote: "The hardest challenge is to be yourself in a world where everyone is trying to make\
            you be somebody else.",
    source: "- E E. Cummings"
  }
];
var message;
var usedQuote = []; //put the displayed quote into array "usedQuote"
var countQuote = 0; //Track the displayed quote times

//Randomly display the quote from quotes

function getRandomQuote() {
  var len = quotes.length;
  var randomNumber = Math.floor( Math.random() * len );
  var quote = quotes[randomNumber];
  if(usedQuote.indexOf(quote) === -1) {
    usedQuote.push(quote);
    countQuote++;
    if(countQuote === quotes.length) {
      usedQuote = [];
      countQuote = 0;
    }
    return quote;
  } else {
    return getRandomQuote();
  }
}

//Print the random quote

function printQuote() {
  var randomQuote = getRandomQuote();
  var html = "<p class='quote'>" + randomQuote.quote + "</p>";
  html += "<p class='source'>" + randomQuote.source + "</p>";
  document.getElementById("quote-box").innerHTML = html;
}

// set random color for background

function randomColor() {
  var red = Math.floor(Math.random() * 256 );
  var green = Math.floor(Math.random() * 256 );
  var blue = Math.floor(Math.random() * 256 );
  var color = "rgb(" + red + "," + green + "," + blue + ")";
  return color;
}

//display random color

function bg() {
  document.body.style.backgroundColor = randomColor();
}
