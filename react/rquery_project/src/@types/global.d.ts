export type APIResponse<T> = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: T[];
};
