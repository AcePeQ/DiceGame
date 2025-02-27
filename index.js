function rollNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function checkWinner(player1, player2) {
  var message = "";

  if (player1 > player2) message = "Player 1 Won";
  if (player1 < player2) message = "Player 2 Won";
  if (player1 === player2) message = "Tie";

  return message;
}

function diceGame() {
  const h1Element = document.querySelector("h1");
  const player1Image = document.querySelector(".img1");
  const player2Image = document.querySelector(".img2");

  const randomNumer1 = rollNumber();
  const randomNumer2 = rollNumber();

  player1Image.setAttribute("src", `/images/dice${randomNumer1}.png`);
  player2Image.setAttribute("src", `/images/dice${randomNumer2}.png`);

  h1Element.textContent = checkWinner(randomNumer1, randomNumer2);
}

diceGame();
