import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import PokemonList from "../PokemonList/PokemonList";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function Pokedex() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="flex flex-col p-12 justify-center items-center gap-8">
            <Search updateSearchTerm={setSearchTerm} />
            {!searchTerm ? (
                <PokemonList />
            ) : (
                <PokemonDetails key={searchTerm} pokemonName={searchTerm} />
            )}
        </div>
    );
}

export default Pokedex;
