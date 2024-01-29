import React, { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";

function PokemonList() {
    const [pokeapiUrl, setPokeapiUrl] = useState(
        "https://pokeapi.co/api/v2/pokemon"
    );
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [previousUrl, setPreviousUrl] = useState("");
    const [nextUrl, setNextUrl] = useState("");

    async function downloadPokemons() {
        try {
            const response = await axios.get(pokeapiUrl);
            setPreviousUrl(response.data.previous);
            setNextUrl(response.data.next);
            const pokemonResults = response.data.results;
            const pokemonData = await Promise.all(
                pokemonResults.map(async (pokemon) => {
                    const response = await axios.get(pokemon.url);
                    return response.data;
                })
            );
            const result = pokemonData.map((pokemon) => ({
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                types: pokemon.types,
            }));
            setPokemonList(result);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        downloadPokemons();
    }, [pokeapiUrl]);

    return (
        <div className="flex flex-col items-center justify-center gap-12 w-full">
            <div className="flex flex-wrap gap-32 items-center justify-between w-[90%] mt-10">
                {isLoading
                    ? "Loading..."
                    : pokemonList.map((p) => (
                          <Pokemon
                              name={p.name}
                              image={p.image}
                              key={p.id}
                              id={p.id}
                          />
                      ))}
            </div>
            {isLoading ? null : (
                <div className="flex gap-3">
                    <button
                        disabled={previousUrl == null}
                        onClick={() => setPokeapiUrl(previousUrl)}
                        className="p-2 bg-green-600 rounded-lg text-white font-bold"
                    >
                        Prev
                    </button>
                    <button
                        disabled={nextUrl == null}
                        onClick={() => setPokeapiUrl(nextUrl)}
                        className="p-2 bg-orange-600 rounded-lg text-white font-bold"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default PokemonList;
