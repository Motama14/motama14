
const toggle = document.getElementById("toggle");

const elements = document.querySelectorAll("p, a, i, h1, button, body");

toggle.addEventListener("click", () => {
    if(toggle.classList.contains("fa-regular")) {
        toggle.classList.remove("fa-regular");
        toggle.classList.add("fa-solid");

        elements.forEach(e => {
            e.classList.remove("light");
        });

    } else {
        toggle.classList.add("fa-regular");
        toggle.classList.remove("fa-solid");

        elements.forEach(e => {
            e.classList.add("light");
        });
    }
});