import { useState } from "react";
import { useQuery } from "react-query";
import Character from "./Character";

export default function Resistance() {
  const [page, setPage] = useState(1);
  const fetchCharacters = async ({ queryKey }) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };
  const { data, status, isPreviousData } = useQuery(
    ["characters", page],
    fetchCharacters,
    {
      keepPreviousData: true,
    }
  );

  if (status === "loading") {
    return <div>loading...</div>;
  }

  if (status === "error") {
    return <div>error</div>;
  }
  return (
    <div className="characters">
      {data.results.map((x) => {
        return <Character character={x} />;
      })}
      <button
        disabled={page === 1}
        onClick={() => setPage((x) => Math.max(x - 1, 1))}
      >
        Previous
      </button>
      <button
        disabled={data.info.pages === page}
        onClick={() => setPage((old) => old + 1)}
      >
        Next
      </button>
    </div>
  );
}
