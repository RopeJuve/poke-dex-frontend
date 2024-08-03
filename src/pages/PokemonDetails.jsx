import { useParams } from "react-router-dom";
import { useFetchPokemonData } from "../hooks/usePokemonData";
import { ProgressDemo as Progress } from "@/components/Progress/Progress";

export default function PokemonDetails() {
  const { id } = useParams();
  const { pokData, loading } = useFetchPokemonData(
    "https://pokemon-fight-api.vercel.app/api/v1/pokemon",
    "https://pokeapi.co/api/v2/pokemon",
    id
  );

  return (
    <div className="max-w-[1200px] mx-auto justify-between.5rem]">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2 className="text-3xl font-semibold tracking-widest text-center">
            {pokData?.name.english}
          </h2>
          <div className="flex gap-4 items-center justify-between mt-4">
            <div className="w-[50%]">
              <img
                className="object-cover"
                src={pokData.img}
                alt={pokData.name.english}
              />
            </div>
            <div className="w-[50%] p-6 bg-muted space-y-4 rounded-lg">
              <p>
                <span className="font-semibold">Type:</span>{" "}
                {pokData.type.join(", ")}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold ">HP:</span> {pokData.base.HP}
                </div>
                <Progress value={parseInt(pokData.base.HP)} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold">Attack:</span>{" "}
                  {pokData.base.Attack}
                </div>
                <Progress value={parseInt(pokData.base.Attack)} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold">Defense:</span>{" "}
                  {pokData.base.Defense}
                </div>
                <Progress value={parseInt(pokData.base.Defense)} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold">Sp. Attack:</span>{" "}
                  {pokData.base["Sp. Attack"]}
                </div>
                <Progress value={parseInt(pokData.base["Sp. Attack"])} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold">Sp. Defense:</span>{" "}
                  {pokData.base["Sp. Defense"]}
                </div>
                <Progress value={parseInt(pokData.base["Sp. Defense"])} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold">Speed:</span>{" "}
                  {pokData.base.Speed}
                </div>
                <Progress value={parseInt(pokData.base.Speed)} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
