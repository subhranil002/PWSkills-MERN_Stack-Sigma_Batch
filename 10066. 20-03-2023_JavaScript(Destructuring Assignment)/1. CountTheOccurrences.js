const input =
    "Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor";
let map = new Map();

let countGenerator = (input) => {
    const words = input.split(" ");
    words.forEach((word) => {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    });
};

countGenerator(input);
console.log(map);
