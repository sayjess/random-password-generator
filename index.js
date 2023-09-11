let characters = [];
let randomPass = ''

const capital = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const small = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let capitalLettersEl = document.getElementById("capital-letters")
let smallLettersEl = document.getElementById("small-letters")
let numbersEl = document.getElementById("numbers")
let symbolsEl = document.getElementById("symbol")
let generatedPasswordEl = document.getElementById("generated-password")

// let passwordLengthEl = document.getElementById("password-length").value
let passwordLength = 0




function generatePassword() {
    //set character array to empty if button is clicked
    characters = []
    randomPass = ''
    //check if atleast one checkbox is checked
    if(!capitalLettersEl.checked && !smallLettersEl.checked && !numbersEl.checked && !symbolsEl.checked){
        generatedPasswordEl.textContent = randomPass
        alert("Please choose atleast one character used.")
        return
    } else {
        pushCharacterArray()
    }
}

function pushCharacterArray() {
    // if checked store in an array called characters
    if (capitalLettersEl.checked){
        characters = characters.concat(capital)
    }

    if (smallLettersEl.checked) {
        characters = characters.concat(small)
    }

    if (numbersEl.checked) {
        characters =  characters.concat(numbers)
    }

    if (symbolsEl.checked) {
        characters = characters.concat(symbols)
    }

    generateRandomPassword()
}


function generateRandomPassword() {
    // passwordLengthEl = document.getElementById("password-length")
    let passwordLengthEl = document.getElementById("password-length").value
    passwordLength = Number(passwordLengthEl)
    for(let i=0; i < passwordLength; i++){
        randomPass += characters[Math.floor (Math.random() * characters.length)] 
    }
    generatedPasswordEl.textContent = randomPass
}

function copyText(){
    navigator.clipboard.writeText(randomPass);
    //dagdag existing class and add a new class with the checked animation, should only play for 2 secs i guess
    alert("Text has been copied to clipboard!");
    
}