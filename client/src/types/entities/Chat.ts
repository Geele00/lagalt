export interface IChatMessage {
  messageId: number;
  content: string;
  authorUsername: string;
  recipientUsername: string;
  createdAt: string;
}

interface Sort {
  sorted: string | boolean;
  unsorted: string | boolean;
  empty: string | boolean;
}

export interface IChatMessagePage {
  content: IChatMessage[];
  empty: string | boolean;
  first: string | boolean;
  last: string | boolean;
  number: string | number;
  numberOfElements: string | boolean;
  pageable: {
    offset: string | number;
    pageNumber: string | number;
    pageSize: string | number;
    paged: string | boolean;
    unpaged: string | boolean;
    sort: Sort;
    size: string | number;
  };
  sort: Sort;
  totalElements: string | number;
  totalPages: string | number;
}
