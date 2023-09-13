const button = document.querySelector(".generate");
const number = document.querySelector(".number");
const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    number.textContent = randomNumber;
}
button.addEventListener("click", generateRandomNumber);