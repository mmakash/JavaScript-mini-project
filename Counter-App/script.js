const count = document.querySelector(".count");
const button = document.querySelector(".buttons");
button.addEventListener("click", calc);

function calc(e){
    if(e.target.classList.contains("add")){
        count.textContent++;
    }
    if(e.target.classList.contains("subtract")){
        count.textContent--;
    }
    if(e.target.classList.contains("reset")){
        count.textContent = 0;
    }
};