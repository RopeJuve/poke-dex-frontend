import { useState } from "react";
import { useFetchPokemonData } from "../../hooks/usePokemonData";
import PokeCardSkeleton from "../Cards/PokeCardSkeleton";
import PokemonCard from "../Cards/PokemonCard";
import { Input } from "@/components/ui/input";
import { PaginationDemo as Pagination } from "../Pagination/Pagination";

export default function PokemonList() {
  const [search, setSearch] = useState("");
  const { pokData, loading } = useFetchPokemonData(
    "https://pokemon-fight-api.vercel.app/api/v1/pokemon",
    "https://pokeapi.co/api/v2/pokemon"
  );

  if (loading) {
    return <PokeCardSkeleton />;
  }

  return (
    <>
      <Input
        onChange={(e) => setSearch(e.target.value)}
        className="ml-4 mt-[1.5rem] w-[28rem]"
        placeholder="Search Pokemon"
        value={search}
      />
      <div className="h-[70vh] overflow-y-scroll scrollbar-webkit scrollbar-thin scrollbar-thumb p-4  grid grid-flow-row auto-rows-max gap-4 grid-cols-card mt-[1rem]">
        {pokData.filter(pokemon => pokemon.name.english.includes(search)).map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Pagination />
    </>
  );
}
