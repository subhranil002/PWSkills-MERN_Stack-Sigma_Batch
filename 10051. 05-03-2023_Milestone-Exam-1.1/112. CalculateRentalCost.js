function costOfRent(numberofdays, typeofcar) {
    switch(typeofcar) {
        case "economy":
            return (4000 * numberofdays);

        case "midsize":
            return (10000 * numberofdays);

        case "luxury":
            return (20000 * numberofdays);

        default: console.log("Invalid Car Type");
    }
}

let numberofdays = 5;
let typeofcar = "midsize";

let rent = costOfRent(numberofdays, typeofcar);
console.log(rent);