console.log("it just works");

let divek = document.querySelectorAll("div");

divek.forEach(div => {
    div.addEventListener('click', () => {
        divek.forEach(b => b.classList.remove('active'));
        div.classList.add('active');
    });
});