const buttons=document.querySelectorAll("button");

buttons.forEach(button=>{button.addEventListener("click",(e)=>{
    let div=document.getElementById(`div${e.target.id}`);
    div.classList.toggle("hidden");
})});