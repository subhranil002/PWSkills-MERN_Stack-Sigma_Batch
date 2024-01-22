import { useState } from "react";

function ToDoCard({index, message}) {
    const [status, setStatus] = useState("Pending");

    function updateStatus() {
        if (status === "Pending") {
            setStatus("Completed");
        } else {
            setStatus("Pending");
        }
    }

    return (
        <div className="bg-[#24273d] text-white p-6 w-[250px] rounded-xl flex flex-col gap-3">
            <div>
                <h1 className="w-full h-[50px] font-bold text-lg">{index}. {message}</h1>
            </div>
            <h3>Status: {status}</h3>
            <div className="flex flex-col justify-center items-center w-full gap-2">
                <button className="bg-[#3425ac] w-full py-2 rounded-lg " onClick={updateStatus}>Update Status</button>
                <button className="bg-[#3425ac] w-full py-2 rounded-lg ">Remove</button>
            </div>
        </div>
    );
}

export default ToDoCard;
