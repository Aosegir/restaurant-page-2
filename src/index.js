import "./style.css";
let main = document.querySelector('main');

console.log("Hello Odin");
console.log(main);

main.addEventListener('wheel', (event) => {
    if(event.deltaY < 0) {
        console.log("scroll up");
    } else if(event.deltaY > 0) {
        console.log("scroll down");
    };
});