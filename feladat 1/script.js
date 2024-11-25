console.log("it just works");

let divek = document.querySelectorAll("div");

document.querySelectorAll("div").forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('active');
    });
});

const menuButton = document.getElementById('nav-button');
        const menu = document.getElementById('menu');

        menuButton.addEventListener('click', () => {
            menu.classList.toggle('active');
});