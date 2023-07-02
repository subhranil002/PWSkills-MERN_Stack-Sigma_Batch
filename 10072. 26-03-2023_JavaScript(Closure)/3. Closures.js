let score0 = 0;

function one() {
    let score1 = 1;
    console.log(score0); // 0
    function two() {
        let score2 = 2;
        console.log(score0, score1, score2); // 0 1 2
    }
    two();
}

one();

// console.log(score2); // ReferenceError: score2 is not defined
