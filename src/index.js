import './style.css';

const hamburgerBtn = document.querySelector(".hamburgerBtn");
hamburgerBtn.addEventListener('click', () => {
    const sideBar = document.querySelector(".sideBar");
    sideBar.classList.toggle("hidden");
})