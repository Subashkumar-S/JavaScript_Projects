console.log("Script connected.")
const computerChoiceDisplay = document.getElementById("Computer_choice");
const userChoiceDisplay = document.getElementById("User_choice");
const resultDisplay = document.getElementById("Result")
const possibleChoices = document.querySelectorAll("button");
let userChoice, computerChoice, result
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id 
    console.log(userChoice)
    userChoiceDisplay.innerHTML = userChoice; 
    generateComputerChoice()
    getResult()

}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    // console.log(randomNumber);
    switch (randomNumber){
        case 0:
            computerChoice = "rock"
            break;
        case 1:
            computerChoice = "scissors"
            break;
        case 2:
            computerChoice = "paper"
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice ;
}
const getResult = () => {
    switch (userChoice + computerChoice) {
      case 'scissorspaper':
      case 'rockscissors':
      case 'paperrock':
        resultDisplay.innerHTML = "YOU WIN!"
        break;
      case 'paperscissors':
      case 'scissorsrock':
      case 'rockpaper':
        resultDisplay.innerHTML = "YOU LOSE!"
        break;
      case 'paperpaper':
      case 'scissorsscissors':
      case 'rockrock':
        resultDisplay.innerHTML = "ITS A DRAW!"
        break;
    }
  }