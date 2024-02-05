import React from "react";
import useDebounce from "../../hooks/useDebounce";

function Search({ updateSearchTerm }) {
    const debouncedCallback = useDebounce((e) => updateSearchTerm(e.target.value))

    return (
        <div className="">
            <input
                className="w-[600px] border-2 border-black p-2"
                type="text"
                placeholder="Pokemon name..."
                onChange={debouncedCallback}
            />
        </div>
    );
}

export default Search;
