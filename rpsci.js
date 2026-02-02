function game() {
  // Array with the 3 possible choices
  const choices = ["rock", "paper", "scissors"];

  // Ask the player for their choice
  const player = prompt("rock, paper or scissors?");

  // Computer randomly picks 0,1,2 from the array
  const computer = choices[Math.floor(Math.random() * 3)];

  /* 
    The ternary operator is used here:

    condition ? resultIfTrue : resultIfFalse
    
    We use it twice:
    1. First check if it's a tie
    2. If not a tie, check if the player wins
  */
  let result =
    player === computer
      ? "Tie!"                                     // if same choice → tie
      : (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
      ? "You win!"                                 // winning conditions
      : "You lose!";                               // everything else → lose

  // Show the result to the user
  alert("You: " + player + "\nComputer: " + computer + "\n" + result);
}

// Run the game
game();