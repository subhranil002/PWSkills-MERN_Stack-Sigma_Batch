let map = new Map();

console.log(map.size); // 0

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

console.log(map); 

// Map(3) {
    //  'a' => 1, 
    //  'b' => 2, 
    //  'c' => 3 
// }

let arr = [
    [1, "Mithun"],
    [2, "Alka"],
    [3, "Prabir"],
    [4, "Shivam"],
    [5, "Vinay"],
];

const newMap1 = new Map(arr);

console.log(newMap1);

// Map(5) {
//     1 => 'Mithun',
//     2 => 'Alka',
//     3 => 'Prabir',
//     4 => 'Shivam',
//     5 => 'Vinay'
// }