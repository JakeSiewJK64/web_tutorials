import { Button, Select, Space, Tag } from "antd";
import { useGetInfiniteCharacters } from "../hooks/queries";
import { useState } from "react";

const options = [
  { label: "Alive", value: "alive" },
  { label: "Dead", value: "dead" },
  { label: "Unknown", value: "unknown" },
];

const tagMapping: Record<string, string> = {
  dead: "error",
  alive: "success",
  unknown: "processing",
};

export const CharacterInfiniteScroll = () => {
  const [status, setStatus] = useState("alive");
  const {
    data: characters,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useGetInfiniteCharacters({
    characterStatus: status,
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Space>
        <p>Status:</p>
        <Select
          style={{ width: "20rem" }}
          options={options}
          value={status}
          onChange={setStatus}
        />
      </Space>
      <div style={{ width: "75%", maxWidth: "80rem" }}>
        {characters?.map((character) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
                justifyContent: "space-between",
                border: "solid lightgray 1px",
                marginTop: "10px",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "5px",
              }}
              key={character.id}
            >
              <p>{character.name}</p>
              <Tag color={tagMapping[character.status.toLowerCase()]}>
                {character.status}
              </Tag>
            </div>
          );
        })}
      </div>
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
    </div>
  );
};
