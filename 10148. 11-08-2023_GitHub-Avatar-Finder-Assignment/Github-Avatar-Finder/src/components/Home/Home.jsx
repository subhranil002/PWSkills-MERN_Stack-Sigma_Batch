import React, { useState } from "react";
import InputBox from "../InputBox/InputBox";
import GithubCardsContainer from "../GithubCardsContainer/GithubCardsContainer";

function Home() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="flex flex-col items-center justify-between">
            <InputBox updateSearchTerm={setSearchTerm} />
            {searchTerm ? <GithubCardsContainer search={searchTerm} /> : ""}
        </div>
    );
}

export default Home;
