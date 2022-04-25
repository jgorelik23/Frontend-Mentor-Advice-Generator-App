const adviceAPI = "https://api.adviceslip.com/advice";

const quoteEl = document.getElementById("quote-el");
const adviceNumEl = document.getElementById("advice-num-el");

const diceBtn = document.getElementById("dice-btn");

function getAdvice() {
    fetch(adviceAPI)
        .then(response => response.json())
        .then(data => {
            quoteEl.textContent = `"${data.slip.advice}"`;
            adviceNumEl.textContent = data.slip.id;
        })
        .catch(console.error);
}

getAdvice();

diceBtn.addEventListener("click", getAdvice);