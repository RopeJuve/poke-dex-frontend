import { useFetchPokemonData } from "../../hooks/usePokemonData";
import PokeCardSkeleton from "../Cards/PokeCardSkeleton";
import PokemonCard from "../Cards/PokemonCard";

export default function PokemonList() {
  const { pokData, loading } = useFetchPokemonData(
    "https://pokemon-fight-api.vercel.app/api/v1/pokemon",
    "https://pokeapi.co/api/v2/pokemon"
  );

  if (loading) {
    return <PokeCardSkeleton />;
  }

  return (
    <div className="h-[70vh] overflow-y-scroll scrollbar-webkit scrollbar-thin scrollbar-thumb p-4  grid grid-flow-row auto-rows-max gap-4 grid-cols-card mt-[2.5rem]">
      {pokData.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
