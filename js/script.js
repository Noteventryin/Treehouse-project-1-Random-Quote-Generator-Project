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
const quotes = [
  {
     quote: "It is only with the heart that one can see rightly; what is essential is invisible to the eye." ,
     source: '— Antoine de Saint-Exupéry', 
     citation: 'The Little Prince', 
     year: 1943,
     tags: 'fantasy' 
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
 * The random number generated is then used to return the quote at the same index  within the quotes Array.
 * the function returns a random quote object using the random number variable above and bracket notation on the quotes array.
***/
getRandomQuote=()=>{
  const randomIndex = Math.floor(Math.random() * quotes.length)

  return quotes[randomIndex]
}
//use console.log to check my code 

/***S
 * `printQuote` function
***/
function printQuote(){
  const randomQuote = getRandomQuote()
  let html = ``
  html += `<p class="quote">${randomQuote.quote}</p>`
  html += `<p class="source">${randomQuote.source}`
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span> `
  }
  if (randomQuote.year) {
    html += `<span class="year"> ${randomQuote.year} </span>`
  }
  if (randomQuote.tags) {
    html += `<span class="tags"> ${randomQuote.tags}</span>`
  }

  html += `</p>`


  return document.getElementById('quote-box').innerHTML= html
  
  
}

//Code run and tested

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);