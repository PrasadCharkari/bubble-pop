let randomBubblesVal;
let scoreCount = 0;
let cpuNumber = 0;
let bubbleCollection = document.querySelector("#gameboard__bottom");
let randomNumberHolder = document.querySelector("#number");
let timerCount = document.querySelector("#timer");
let totalScore = document.querySelector("#score");

function generateBubble() {
  let randomBubbles = "";
  for (var i = 1; i <= 200; i++) {
    randomBubblesVal = Math.floor(Math.random() * 10 + 1);
    randomBubbles += `<div id="bubble">${randomBubblesVal}</div>`;
  }

  bubbleCollection.innerHTML = randomBubbles;
}

function generateCpuNumber() {
  cpuNumber = Math.floor(Math.random() * 10 + 1);
  randomNumberHolder.textContent = cpuNumber;
}

function timerCounter() {
  let maxTime = 60;
  var timeInterval = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      timerCount.textContent = maxTime;
    } else {
      clearInterval(timeInterval);
      bubbleCollection.innerHTML = `
      <h1>
      Game Over
      <br>
      Your Score was ${scoreCount}
      </h1>
      `;
    }
  }, 1000);
}

function increaseScore() {
  scoreCount += 10;
  totalScore.innerHTML = scoreCount;
}

function scoreChecker() {
  bubbleCollection.addEventListener("click", function (e) {
    var clickedBubble = Number(e.target.textContent);
    if (clickedBubble === cpuNumber) {
      increaseScore();
      generateBubble();
      generateCpuNumber();
    }
  });
}

generateBubble();
generateCpuNumber();
timerCounter();
scoreChecker();
