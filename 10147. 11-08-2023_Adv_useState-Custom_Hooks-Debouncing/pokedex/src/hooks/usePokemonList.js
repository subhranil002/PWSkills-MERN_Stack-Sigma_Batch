import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonList(url, type) {
    const [pokemonListState, setPokemonListState] = useState({
        pokeapiUrl: url,
        pokemonList: [],
        isLoading: true,
        previousUrl: "",
        nextUrl: "",
    });

    async function downloadPokemons() {
        try {
            const response = await axios.get(pokemonListState.pokeapiUrl);
            if (type) {
                setPokemonListState((state) => ({
                    ...state,
                    pokemonList: response.data.pokemon.slice(0, 5),
                }));
            } else {
                setPokemonListState((state) => ({
                    ...state,
                    previousUrl: response.data.previous,
                    nextUrl: response.data.next,
                }));
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
                setPokemonListState((state) => ({
                    ...state,
                    pokemonList: result,
                    isLoading: false,
                }));
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setPokemonListState((state) => ({
            ...state,
            isLoading: true,
        }));
        downloadPokemons();
    }, [pokemonListState.pokeapiUrl]);

    return { pokemonListState, setPokemonListState };
}

export default usePokemonList;
