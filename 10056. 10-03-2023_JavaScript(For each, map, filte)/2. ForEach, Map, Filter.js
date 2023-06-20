// For Each

let arr = [2, 3, 4];
const heros = ["naagraj", "doga", "dhruva", "maniraj"];
const myNums = [2, 3, 4, 5];

const sumArray = (arr) => {
    let total = 0;
    arr.forEach(function (element) {
        total += element;
    });
    return total;
};

console.log(sumArray(myNums)); // 14


arr.forEach(function (element, index, arr) {
    console.log(index, element, arr);
});

// 0 2 [ 2, 3, 4 ]
// 1 3 [ 2, 3, 4 ]
// 2 4 [ 2, 3, 4 ]

arr.forEach((element, index, arr) => {
    console.log(index, element, arr);
});

// 0 2 [ 2, 3, 4 ]
// 1 3 [ 2, 3, 4 ]
// 2 4 [ 2, 3, 4 ]

heros.forEach((e) => {
    console.log(e.toUpperCase());
});

// NAAGRAJ
// DOGA
// DHRUVA
// MANIRAJ


// Map


arr.map((element, index, arr) => {
    console.log(index, element, arr);
});

// 0 2 [ 2, 3, 4 ]
// 1 3 [ 2, 3, 4 ]
// 2 4 [ 2, 3, 4 ]

heros.map((h) => console.log(h.toUpperCase()));

// NAAGRAJ
// DOGA
// DHRUVA
// MANIRAJ


// Filter


const herosWithRaj = heros.filter((h) => {
    return h.endsWith("raj");
});

console.log(herosWithRaj); // [ 'naagraj', 'maniraj' ]