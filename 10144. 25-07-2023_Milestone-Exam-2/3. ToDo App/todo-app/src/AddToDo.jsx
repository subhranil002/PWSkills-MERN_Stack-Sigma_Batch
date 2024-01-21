function AddToDo() {
    return (
        <div className="flex items-center justify-center w-[100%] h-[20vh]">
            <input
                className="w-[500px] py-3 pl-5 rounded-lg h-[100px] pr-[150px] relative z-10 text-2xl placeholder:text-xl outline-none"
                type="text"
                placeholder="Write Here ..."
            />
            <button className="text-white bg-[#4f1862] relative z-20 right-32 py-2 w-[100px] rounded-lg">
                Add
            </button>
        </div>
    );
}

export default AddToDo;
