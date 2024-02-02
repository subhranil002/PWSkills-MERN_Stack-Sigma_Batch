import React from "react";
import { useParams } from "react-router-dom";
import usePokemonDetails from "../../hooks/usePokemondetails";

function PokemonDetails({ pokemonName }) {
    const { id } = useParams();
    const { pokemon, isLoading } = usePokemonDetails(id, pokemonName);

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

                    {pokemon.types && pokemon.similarPokemons && (
                        <div>
                            <p>More {pokemon.types[0]} Type Pokemons</p>
                            <ul>
                                {pokemon.similarPokemons.map((p) => (
                                    <li key={p.pokemon.url}>
                                        {p.pokemon.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default PokemonDetails;
