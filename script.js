const buttons = document.querySelectorAll(".div");

buttons.forEach(button=>button.addEventListener("click", (e) => {
    const content=document.getElementById(`div${e.target.id}`);
    content.classList.toggle("hidden");
}));