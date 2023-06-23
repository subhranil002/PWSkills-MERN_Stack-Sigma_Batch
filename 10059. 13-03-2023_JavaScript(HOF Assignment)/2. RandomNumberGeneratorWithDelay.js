let delay = 3;

let randomNumber = () => {
    return Math.round(Math.random() * 100);
};

let delayMeter = ((delay) => {
    temp = delay;
    setInterval(() => {
        console.log(delay);
        delay--;
        if (delay == 0) {
            console.log(`The Random Number is : ${randomNumber()}`);
            delay = temp;
        }
    }, 1000);
})(delay);
