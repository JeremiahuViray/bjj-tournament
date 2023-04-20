const boutHTML = `
<div class="bout">
    <div class="wrap flex-col-center">
        <div class="competitor">player</div>
        <div class="competitor">player</div>
    </div>
</div>`;

const winnerHTML = `
<div class="bout">
    <div class="wrap flex-col-center">
        <div class="competitor">player</div>
    </div>
</div>`;

const container = document.querySelector(".bracket-container");
const round = document.querySelector(".round");

// Find number of rounds needed
const findRows = function (total) {
  let rounds = 0;
  while (total > 0) {
    total = Math.floor(total / 2);
    rounds++;
  }
  return rounds;
};

// Create initial bouts for first round
const init = function (num) {
  let bouts = num / 2;
  let rows = findRows(num);
  for (let i = 0; i < bouts; i++) {
    round.insertAdjacentHTML("afterbegin", boutHTML);
  }

  container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
  for (let i = 1; i < rows; i++) {
    const newRound = document.createElement("div");
    newRound.classList.add("round");
    newRound.classList.add("grid");
    newRound.classList.add(`round${i}`);
    document.bracket - container.appendChild(newRound);
    console.log(`.round${i}`);
    for (let j = 0; j < bouts / 2; j++) {
      const newBout = document.createElement("div");
      newBout.classList.add("bout");
      newBout.innerHTML = `
      <div class="wrap flex-col-center">
      <div class="competitor">player</div>
      <div class="competitor">player</div>
      </div>`;
      const winnerBout = document.createElement("div");
      winnerBout.classList.add("bout");
      winnerBout.innerHTML = `
      <div class="wrap flex-col-center">
      <div class="competitor">player</div>
      </div>`;
      let choice = i >= rows - 1 ? winnerBout : newBout;
      document.querySelector(`.round${i}`).appendChild(choice);
    }
    bouts = bouts / 2;
  }
};

init(Number(prompt("how many competitors?")));
