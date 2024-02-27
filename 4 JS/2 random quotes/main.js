var quote = document.getElementById("quote"); 
var author = document.getElementById("author");

var quotes = [
["Be yourself; everyone else is already taken." , "Oscar Wilde"],
["You only live once, but if you do it right, once is enough.", "Marilyn Monroe"],
["Be the change that you wish to see in the world.", "Frank Zappa"],
["In three words I can sum up everything I've learned about life: it goes on.", "Albert Einstein"],
["If you tell the truth, you don't have to remember anything.", "Marcus Tullius Cicero"],
["A friend is someone who knows all about you and still loves you.", "Bernard M. Baruch"],
["To live is the rarest thing in the world. Most people exist, that is all.", "William W. Purkey"],
["Always forgive your enemies; nothing annoys them so much.", "Bernard M. Baruch"],
["We accept the love we think we deserve.", "Mahatma Gandhi"],
["So many books, so little time.", "Nelson Mandela"]
];

var lastRandomNum = -1;

function getQuote(){
    var randomNum;
    do {
        randomNum = Math.trunc(Math.random() * quotes.length); // get random num from 0 to 9 
    } while (randomNum === lastRandomNum);
    
    lastRandomNum = randomNum;
    quote.innerHTML = '" '+ quotes[randomNum][0] + ' "';
    author.innerHTML = "-- " +quotes[randomNum][1]
}