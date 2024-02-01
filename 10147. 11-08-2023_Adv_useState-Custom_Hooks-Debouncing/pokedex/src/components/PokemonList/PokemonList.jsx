import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";

function PokemonList() {
    const { pokemonListState, setPokemonListState } = usePokemonList(
        "https://pokeapi.co/api/v2/pokemon"
    );

    return (
        <div className="flex flex-col items-center justify-center gap-12 w-full">
            {pokemonListState.isLoading ? (
                "Loading..."
            ) : (
                <>
                    <div className="flex flex-wrap gap-32 items-center justify-between w-[90%] mt-10">
                        {pokemonListState.pokemonList.map((p) => (
                            <Pokemon
                                name={p.name}
                                image={p.image}
                                key={p.id}
                                id={p.id}
                            />
                        ))}
                    </div>

                    <div className="flex gap-3">
                        <button
                            disabled={pokemonListState.previousUrl == null}
                            onClick={() =>
                                setPokemonListState((prev) => ({
                                    ...prev,
                                    pokeapiUrl: prev.previousUrl,
                                }))
                            }
                            className="p-2 bg-green-600 rounded-lg text-white font-bold"
                        >
                            Prev
                        </button>
                        <button
                            disabled={pokemonListState.nextUrl == null}
                            onClick={() =>
                                setPokemonListState((prev) => ({
                                    ...prev,
                                    pokeapiUrl: prev.nextUrl,
                                }))
                            }
                            className="p-2 bg-orange-600 rounded-lg text-white font-bold"
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default PokemonList;
