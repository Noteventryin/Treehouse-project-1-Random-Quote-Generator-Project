/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//Quotes found from https://www.bookbub.com/blog/famous-book-quotes
const quotes = [
  {
     quote: "It is only with the heart that one can see rightly; what is essential is invisible to the eye." ,
     source: '— Antoine de Saint-Exupéry', 
     citation: 'The Little Prince', 
     year: 1943, 
  },
  { quote: "There is some good in this world, and it’s worth fighting for.",
    source: '— J.R.R. Tolkien',
    citation: 'The Two Towers'
  },
  { quote: "I am no bird; and no net ensnares me: I am a free human being with an independent will, which I now exert to leave you." ,
    source: '— Charlotte Brontë',
    citation: 'Jane Eyre'

  },
  { quote: "Beware; for I am fearless, and therefore powerful.",
    source: '— Mary Shelley',
    citation: 'Frankenstein'

  },
  { quote: "The only way out of the labyrinth of suffering is to forgive." ,
    source: '― John Green',
    citation: 'Looking for Alaska'

  },
];


/***
 * `getRandomQuote` function
 * This function will randomly create a random number from 0 to the max based on the length of the quotes Array.
 * The random number generated is used to return the quote at the same index  within the quotes Array.
***/
function getRandomQuote() {
  const RandomNum = Math.floor(Math.random() * quotes.length)
  return quotes[RandomNum]
}
//use console.log to check my code.
//used arrow function to randomly select quotes.

/***
 * `printQuote` function
 * The returned quote object build a string of html and quote properties.
 * Create a variable to store a random quote object from the getRandomQuote() function.
 * Create another variable to store the HTML string. 
***/
function printQuote(){
  const randomQuote = getRandomQuote()
  let htmlstring = ` <p class="quote">${randomQuote.quote}</p> 
                     <p class="source">${randomQuote.source}`
   
  if (randomQuote.citation) {
    htmlstring += `<span class="citation">${randomQuote.citation}</span> `
  }
  if (randomQuote.year) {
    htmlstring += `<span class="year"> ${randomQuote.year} </span>`
  }
  htmlstring += `</p>`
  return document.getElementById('quote-box').innerHTML= htmlstring
}
//Code tested and quotes are printed to the screen each time click the 'Show another quote' button or refresh the browzer. 

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);