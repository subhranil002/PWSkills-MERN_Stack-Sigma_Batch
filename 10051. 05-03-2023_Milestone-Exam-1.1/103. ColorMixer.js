let color1 = "yellow";
let color2 = "red";

switch (color1) {
    case "red":
        switch (color2) {
            case "blue":
                console.log("purple");
                break;

            case "yellow":
                console.log("orange");
                break;

            default:
                console.log("Invalid color combination");
                break;
        }
        break;

    case "blue":
        switch (color2) {
            case "red":
                console.log("purple");
                break;

            case "yellow":
                console.log("green");
                break; 

            default:
                console.log("Invalid color combination");
                break;
        }

    case "yellow":
        switch (color2) {
            case "red":
                console.log("orange");
                break;

            case "blue":
                console.log("green");
                break; 

            default:
                console.log("Invalid color combination");
                break;
        }
    break;

    default:
        console.log("Invalid color combination");
        break;
}