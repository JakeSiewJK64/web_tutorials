import { Select, Table } from "antd";
import { useGetCharacters } from "../hooks/queries";
import { useState } from "react";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Location",
    key: "status",
    render: (e: { location: { name: string } }) => {
      return e.location.name;
    },
  },
];

const statusData = [
  {
    label: "Alive",
    value: "alive",
  },
  {
    label: "Dead",
    value: "dead",
  },
  {
    label: "Unknown",
    value: "unknown",
  },
];

export const CharacterTable = () => {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(statusData[0].value);
  const { data: characters, status: charactersStatus } = useGetCharacters({
    page,
    status,
  });

  return (
    <>
      <Select
        style={{ width: "10rem" }}
        options={statusData}
        onChange={(e) => {
          setStatus(e);
        }}
        value={status}
      />
      <Table
        rowKey="id"
        pagination={{
          current: page,
          onChange: setPage,
          pageSize: 20,
          total: characters?.info.count ?? 0,
          position: ["topRight"],
        }}
        dataSource={characters?.results ?? []}
        loading={charactersStatus === "loading"}
        columns={columns}
      />
    </>
  );
};
