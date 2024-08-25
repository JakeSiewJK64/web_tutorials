import { Button } from "antd";
import { useGetInfiniteCharacters } from "../hooks/queries";

export const CharacterInfiniteScroll = () => {
  const {
    data: characters,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useGetInfiniteCharacters({
    characterStatus: "unknown",
  });

  return (
    <>
      {characters?.map((character) => {
        return <div key={character.id}>{character.name}</div>;
      })}
      {hasNextPage && (
        <Button
          loading={isFetching}
          onClick={() => {
            fetchNextPage();
          }}
        >
          Load More
        </Button>
      )}
    </>
  );
};
