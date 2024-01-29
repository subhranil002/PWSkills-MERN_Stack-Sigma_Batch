import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
                <div className="flex flex-col gap-5">
                    <img
                        className="h-[400px] w-[400px]"
                        src={pokemon.image}
                        alt="DP"
                    />
                    <div className="flex flex-col gap-2">
                        <div className="text-2xl font-bold font-mono tracking-widest">
                            Name: {pokemon.name}
                        </div>
                        <div className="text-2xl font-bold font-mono tracking-widest">
                            Weight: {pokemon.weight}
                        </div>
                        <div className="text-2xl font-bold font-mono tracking-widest">
                            Height: {pokemon.height}
                        </div>
                        <div className="text-xl flex gap-5">
                            {pokemon.types.map((t) => (
                                <div
                                    className="bg-gray-200 pt-2 pb-3 px-4 rounded-lg font-semibold"
                                    key={t}
                                >
                                    {t}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PokemonDetails;
