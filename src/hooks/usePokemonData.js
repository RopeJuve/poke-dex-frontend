import { useState, useEffect } from "react";
import { fetchData } from "../services/fetchData";

export const useFetchPokemonData = (url, pokUrl, id) => {
  const [pokData, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokData = async () => {
      if (!id) {
        try {
          const { data } = await fetchData(url);
          const pokemonData = await Promise.all(
            data.slice(0, 20).map(async (pokemon) => {
              let name = pokemon.name.english;
              const pokemonResponse = await fetchData(
                `${pokUrl}/${name.toLowerCase()}`
              );
              return pokemonResponse?.data.sprites.other["official-artwork"]
                .front_default
                ? {
                    ...pokemon,
                    img: pokemonResponse?.data.sprites.other["official-artwork"]
                      .front_default,
                  }
                : pokemon;
            })
          );
          setData(pokemonData);
          setLoading(false);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      } else {
        try {
          const { data } = await fetchData(`${url}/${id}`);
          const pokemonData = await fetchData(
            `${pokUrl}/${data.name.english.toLowerCase()}`
          );
          setData({
            ...data,
            img: pokemonData?.data.sprites.other["official-artwork"]
              .front_default,
          });
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      }
    };

    fetchPokData();
  }, [url, pokUrl]);

  return { pokData, loading, error };
};
