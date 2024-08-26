export type PaginationQueryParams = {
  page: number;
  size: number;
};

export type ResponseWithMetadata<T = Record<string, any>> = {
  code: number;
  message?: string;
  data?: T;
};

export type ResponsePagingWithMetadata<T = Record<string, any>> = {
  code: number;
  message?: string;
  pagination: {
    total_count: number;
    total_pages: number;
    prev_page: number;
    current_page: number;
    next_page: number;
  };
  data: T[];
};
