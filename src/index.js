import './style.css';

const hamburgerBtn = document.querySelector(".hamburgerBtn");
hamburgerBtn.addEventListener('click', () => {
    const sideBar = document.querySelector(".sideBar");
    sideBar.classList.toggle("hidden");
})

const toggleLightMode = document.getElementById("darkmodeToggle");
if (toggleLightMode.checked === true) {
    document.body.classList.add("light");
}

else {
    document.body.classList.remove("light");
}

toggleLightMode.addEventListener("change", () => {
    document.body.classList.toggle("light");
});