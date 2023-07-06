function createPromise() {
    return new Promise(function executerCallback(resolve, reject) {
        setTimeout(function f() {
            console.log("timer done");
            if (flag == 1) {
                flag--;
                resolve("done");
            }
            reject("failed"); // If you want to trigger a error
        }, 3000);
    });
}

async function consume() {
    try {
        console.log("inside function");
        let response = await createPromise();
        console.log("response is", response);
        response = await createPromise();
        console.log("response is", response);
    } catch (error) {
        console.log("oh no", error);
    }
}

let flag = 1;

console.log("start");
consume();
console.log("end");

// start
// inside function
// end
// timer done
// response is done
