// Create 4 variables and assign them to their respective elements: setupDiv,
// punchlineDiv, punchlineBtn, newJokeBtn

const setupDiv = document.getElementById('setup');
const punchlineDiv = document.getElementById('punchline');
const punchlineBtn = document.getElementById('punchlineBtn');
const newJokeBtn = document.getElementById('newJokeBtn');
let punchline;

// Setup an async function called getJoke Create a variable called jokePromise
// that fetches a joke from
// https://official-joke-api.appspot.com/jokes/programming/random create a
// variable called joke that consumes the json data

const getJoke = async() => {
    const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
    const joke = await jokePromise.json();

    //console.log(joke);

   // Get the setup from the joke and insert it into the setupDiv element
    setupDiv.innerHTML = joke[0].setup; 

    // Create a global variable called punchline which will store the current punchline and will be updated with each new joke
    // Assign the current jokes punchline to the punchline variable.
    punchline = joke[0].punchline;

}
getJoke();



