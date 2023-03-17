export interface IPage<T> {
  content: T[];
  hasNextPage: string | boolean;
  pageNumber: string | number;
}
