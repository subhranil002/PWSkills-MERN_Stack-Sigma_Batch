function decrement() {
    let x = document.querySelector("#value");
    let y = parseInt(x.innerHTML);
    y--;
    x.innerHTML = y;
}

function increment() {
    let x = document.querySelector("#value");
    let y = parseInt(x.innerHTML);
    y++;
    x.innerHTML = y;
}

function reset() {
    let x = document.querySelector("#value");
    let y = parseInt(x.innerHTML);
    x.innerHTML = 0;
}