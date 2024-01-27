import React from "react";
import Search from "../Search/Search";
import PokemonList from "../PokemonList/PokemonList";

function Pokedex() {
    return (
        <div className="flex flex-col p-12 justify-center items-center gap-8">
            <h1 className="text-4xl font-bold font-serif tracking-[10px]">
                Pokedex
            </h1>
            <Search />
            <PokemonList />
        </div>
    );
}

export default Pokedex;
