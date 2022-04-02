document.getElementById("roll").addEventListener("click", () => {
    const randInt = Math.floor(Math.random() * 20) + 1
document.getElementById("cube").setAttribute("class",`show-${randInt}`)
});