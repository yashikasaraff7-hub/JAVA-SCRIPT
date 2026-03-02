let btn = document.getElementById("themeBtm");
let body = document.body;

body.classList.add("Light");
btn.addEventListener("click", ()=> {
    body.classList.toggle("dark");
    body.classList.toggle("Light");

if (body.classList.contains("dark")) {
    btn.innertext = "🤓Light Mode";
}else {
    btn.innertext = "😎Dark Mode";
}
})
