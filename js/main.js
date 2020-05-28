const menu = document.querySelector(".menu");
const header = document.querySelector(".header");
const wrapper = document.querySelector(".container");
const back = document.querySelector(".back");
const content = document.querySelectorAll(".nav-bar a");


menu.addEventListener('click', () => {
    header.classList.add('header-wrapper');
    wrapper.classList.add('container-wrapper');
});

back.addEventListener('click', () => {
    header.classList.remove('header-wrapper');
    wrapper.classList.remove('container-wrapper');
});

for (let i = 0; i < content.length; i++) {
    const element = content[i];
    element.addEventListener('click', () => {
        header.classList.remove('header-wrapper');
        wrapper.classList.remove('container-wrapper');
    })
}