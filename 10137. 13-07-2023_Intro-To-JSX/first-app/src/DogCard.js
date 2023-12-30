import { Image } from "./Image.js";
import { Name } from "./Name.js";

let title = "This is a Dog Card";

function DogCard(props) {
    return (
        <>
            <h2 style={{ fontSize: "10px", color: "red" }}>{title}</h2>
            <Name>
                <h3>{props.name}</h3>
            </Name>
            <Image src={props.image} />
        </>
    );
}

export default DogCard;
