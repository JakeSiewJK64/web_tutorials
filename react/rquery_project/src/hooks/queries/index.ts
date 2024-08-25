import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import useAxios from "../useAxios";
import { Character } from "../../@types/characters";
import { APIResponse } from "../../@types/global";

type GetCharacterArgs = {
  page?: number;
  status?: string;
};

export const useGetInfiniteCharacters = ({
  characterStatus,
}: {
  characterStatus?: string;
}) => {
  const axios = useAxios();
  const getCharacters = async ({ pageParam = 1 }: { pageParam?: number }) => {
    const res = await axios.get("/character", {
      params: {
        page: pageParam,
        status: characterStatus,
      },
    });
    const nextPage = res.data.info.next;

    return {
      data: res.data.results,
      nextPage: nextPage ? pageParam + 1 : null,
    };
  };
  const { data, status, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteQuery<{
      data: Character[];
      nextPage: number | null;
    }>({
      queryKey: ["characters-infinite", { characterStatus }],
      queryFn: getCharacters,
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.nextPage;

        if (nextPage) {
          return nextPage;
        }

        return null;
      },
    });
  const results = data?.pages.reduce((acc: Character[], curr) => {
    return [...acc, ...curr.data];
  }, []);

  return {
    isFetching,
    hasNextPage,
    data: results,
    status,
    fetchNextPage,
  };
};

export const useGetCharacters = ({ page = 1, status }: GetCharacterArgs) => {
  const axios = useAxios();
  const getCharacters = async () => {
    const res = await axios.get("/character", {
      params: {
        page,
        status,
      },
    });
    return res.data;
  };

  return useQuery<APIResponse<Character>>({
    queryKey: ["characters", { page, status }],
    queryFn: getCharacters,
  });
};
