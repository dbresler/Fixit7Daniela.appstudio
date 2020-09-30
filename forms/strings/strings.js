let quoteString = ("Failure is simply the opportunity to begin again this time more intelligently.")

let upperCaseString = quoteString.toUpperCase()
alert(`Upper Case String is ${upperCaseString}`)

let authorString = ("- Henry Ford")
alert(authorString)

let completeString = quoteString + authorString
alert(completeString)

let found = completeString.includes(authorString)

if (found == true)
    alert("Henry is in the string")
  else 
    alert("Henry is not in the string")

let secondQuote = ("Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King")
let lowerCaseString = secondQuote.toLowerCase()
console.log(lowerCaseString)

let userNumber = Number(prompt('Enter a number'))
alert(`The number ${userNumber} + 10 is: ${userNumber + 10}`)
