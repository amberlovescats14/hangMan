'use strict';
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let bookWords = 'JavaScript was introduced in 1995 as a way to add programs to web pages in the Netscape Navigator browser. The language has since been adopted by all other major graphical web browsers. It has made modern web applications possible— applications with which you can interact directly without doing a page reloadfor every action. JavaScript is also used in more traditional websites to provide various forms of interactivity and cleverness.'
let split = bookWords.split(' ')
// solution.push(bookWords)
// console.log(split)
const sorting = (array) =>{
  let reg = new RegExp(/[a-z]{4}/gi)
  let solutions = []

  for(let i=0; i < array.length; i++){
  if(reg.test(array[i]) === true){
    // console.log(reg.test(array[i]))
    solutions.push(array[i])
  }
}
 return solutions
}
 let final = sorting(split)

 // Jim starts driving here

 let generateSolution = (array) => {
  let answer = array[Math.floor(Math.random() * array.length)]
  let character = answer.split('')
  return character
 }

// Heather starts driving
let lives = 6 // to start our lives to increment down to game over

//check for match
let checkForMatch = (guess) => {
  let answer = generateSolution(final)
  console.log(answer)
  for(let i = 0; i < answer.length; i++){
    if(answer[i] === guess){
      //display guessed letter in terminal
      let correctGuesses = []
      correctGuesses.push(answer[i])
      console.log(correctGuesses)
      return true
    } else {
      let incorrectGuesses = []
      incorrectGuesses.push(guess)
      return false
    }
  }
}

if(checkForMatch === false){
  lives --
  console.log("incorrect guess, you lose a life.")
  console.log(`Your past incorrect guesses are ${incorrectGuesses}`)
}
console.log(lives)


function getPrompt() {
  rl.question('guess a letter: ', (guess) => {
    checkForMatch(guess)
    getPrompt()
  });
}
getPrompt()