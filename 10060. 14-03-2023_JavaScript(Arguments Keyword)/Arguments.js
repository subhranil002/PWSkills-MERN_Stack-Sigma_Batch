function testOne() {
    console.log(arguments);
}

testOne(1, 2, 3, 4); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }

function manyArguments() {
    let args = Array.from(arguments);
    console.log(args);
}

manyArguments(1, 2, 3); // [ 1, 2, 3 ]
