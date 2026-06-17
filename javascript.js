console.log("lookie here!");

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    button.textContent = `You clicked me!`;
});