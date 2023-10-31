// ¡Buena suerte!
const button = document.querySelector("#get-advice-button");

const advice = document.querySelector("#advice");
const numAdvice = document.querySelector("#advice-id");

async function updateNewAadvice() {
    const response = await fetch("https://api.adviceslip.com/advice");

    const randomAdvice = await response.json();

    advice.textContent = randomAdvice.slip.advice;
    numAdvice.textContent = randomAdvice.slip.id;

    console.log("nuevo consejo", randomAdvice);

}
button.addEventListener("click", updateNewAadvice);







