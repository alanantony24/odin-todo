import './style.css';

//to toggle the sidebar.
const hamburgerBtn = document.querySelector(".hamburgerBtn");
hamburgerBtn.addEventListener('click', () => {
    const sideBar = document.querySelector(".sideBar");
    sideBar.classList.toggle("hidden");
})

//check what's the theme at the start of the app.
const toggleLightMode = document.getElementById("darkmodeToggle");
if (toggleLightMode.checked === true) {
    document.body.classList.add("dark");
}

else {
    document.body.classList.remove("dark");
}

//when the switch is checked, toggle between light and dark modes.
toggleLightMode.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});