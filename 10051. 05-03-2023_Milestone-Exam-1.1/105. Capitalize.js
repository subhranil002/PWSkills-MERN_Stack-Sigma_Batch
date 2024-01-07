function toUpperCase(names) {
    return (names.charCodeAt(0) >= 97)
    ? names = String.fromCharCode(names.charCodeAt(0)-32) + names.slice(1)
    : names;
}

let names = "subhranil";
names = toUpperCase(names);
console.log(names);