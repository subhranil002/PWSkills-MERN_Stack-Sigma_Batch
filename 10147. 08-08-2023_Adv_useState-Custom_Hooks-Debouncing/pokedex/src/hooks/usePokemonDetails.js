import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonDetails(id, pokemonName) {
    const [pokemon, setPokemon] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    async function downloadPokemon() {
        try {
            let response;

            if (pokemonName) {
                response = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
                );
            } else {
                response = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${id}`
                );
            }
            const pokemonOfSameTypes = await axios.get(
                `https://pokeapi.co/api/v2/type/${response.data.types[0].type.name}`
            );

            setPokemon({
                name: response.data.name,
                image: response.data.sprites.other.dream_world.front_default,
                weight: response.data.weight,
                height: response.data.height,
                types: response.data.types.map((t) => t.type.name),
                similarPokemons: pokemonOfSameTypes.data.pokemon.slice(0, 5),
            });

            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        downloadPokemon();
    }, []);

    return { pokemon, isLoading };
}

export default usePokemonDetails;
