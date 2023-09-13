const btn = document.querySelector(".btn"),result = document.querySelector(".result"),reset = document.querySelector(".reset");
btn.addEventListener("click",function(e){
    e.preventDefault();
    let height = document.querySelector(".height").value;
    let weight = document.querySelector(".weight").value;

    if(height === "" || isNaN(height)){
        console.log("Please enter valid height");   
    }
    else if(weight === "" || isNaN(weight)){
        console.log("Please enter valid weight");   
    }
    else{
        height = height / 100;
        let bmi = (weight / Math.pow(height, 2)).toFixed(2);
        if(bmi < 18.5){
            showResult(`Underweight: ${bmi}`,"red");
        }
        else if(bmi >= 18.5 && bmi <= 24.9){
            showResult(`Normal: ${bmi}`,"green");
        }
        else if(bmi >= 25 && bmi <= 29.9){
            showResult(`Overweight: ${bmi}`,"orange");
        }
        else{
            showResult(`Obese: ${bmi}`,"red");
        }
    }
    reset.style.display = "block";
})
function showResult(val,color){
    result.style.backgroundColor = color;
    return(result.textContent = val);
}
reset.addEventListener("click",()=>{
    document.querySelector("form").reset();
    reset.style.display = "none";
    result.style.display = "none";
});