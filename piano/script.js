const keys = document.querySelectorAll(".key");
const note = document.querySelector(".key-pressed");
window.addEventListener("keypress", playNote);
function playNote(e){
    console.log(e);
}
