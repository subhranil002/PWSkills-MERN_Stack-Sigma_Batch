const setA = new Set();
const setB = new Set();

setA.add(1);
setA.add(2);
setA.add(3);
setA.add(4);

setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

function setDifference(setA, setB) {
    return new Set([...setA].filter((el) => !setB.has(el)));
}

console.log(setDifference(setA, setB)); // Set(2) { 1, 2 }

console.log(setDifference(setB, setA)); // Set(2) { 5, 6 }
