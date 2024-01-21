import { useState } from "react";

function ToDoCard() {
    const [status, setStatus] = useState(true);

    function updateStatus() {
        
    }

    return (
        <div className="bg-[#24273d] w-[20%] text-white">
            <div>
                <h1>Go to gym</h1>
            </div>
            <h3>
                Status: <span>Pending</span>
            </h3>
            <div>
                <button>Update Status</button>
                <div>
                    <button><i class="fa-solid fa-check"></i></button>
                    <button><i class="fa-solid fa-xmark"></i></button>
                </div>
                <button>Remove</button>
            </div>
        </div>
    );
}

export default ToDoCard;