const jokeText = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const generateJoke = async() => {
    const config = {
        headers: {
            Accept: "application/json",
        }
    };
    const res = await fetch("https://icanhazdadjoke.com", config);
    const data = await res.json();
    jokeText.innerText = data?.joke;
}
jokeBtn.addEventListener("click", generateJoke);