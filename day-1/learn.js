// Import
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

const favouriteFood = "Pizza"
var country = "Germany"

// Calculation
var calc = 1 + 5 * 3 % 2

console.log(calc)

// Input from Commandline
readline.question("What's your Name?", name => {
    console.log('Hi ${name}!')
    readline.close
})

/* longer
 * comment
 */

// Functions

function infoAboutMe() {
    console.log("I live in " + country)
    console.log("and my favourite Food is " + favouriteFood)
}

// Arrays

let fishTypes = ['Salmon', 'Clownfish', 'Cod']

console.log(fishTypes[0], fishTypes[2])

// Boolean

var isCoolDude = true

// If-Statements

function weebCheck() {
    const lovesAnime = true

    if (lovesAnime == true) {
        console.log("UwU")
    }
    else {
        console.log("No UwU for you.")
    }
}


