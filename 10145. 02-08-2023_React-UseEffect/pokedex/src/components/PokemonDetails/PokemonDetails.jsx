import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonDetails() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    async function downloadPokemon() {
        try {
            const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${id}`
            );

            setPokemon({
                name: response.data.name,
                image: response.data.sprites.other.dream_world.front_default,
                weight: response.data.weight,
                height: response.data.height,
                types: response.data.types.map((t) => t.type.name),
            });

            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        downloadPokemon();
    }, []);

    return (
        <div>
            {isLoading ? (
                "Loading..."
            ) : (
                <>
                    <div>Name: {pokemon.name}</div>
                    <img src={pokemon.image} alt="DP" />
                    <div>Weight: {pokemon.weight}</div>
                    <div>Height: {pokemon.height}</div>
                    <div>
                        {pokemon.types.map((t) => <div key={t}>{t}</div>)
                        }
                    </div>
                </>
            )}
        </div>
    );
}

export default PokemonDetails;
