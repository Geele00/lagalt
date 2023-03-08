export interface IProject {
  projectId: number;
  title: string;
  description: string;
}

export interface INewProject {
  // can remove ownerId when we can retrieve owner from uid in db
  ownerId: number;
  title: string;
  description: string;
}

interface Sort {
  sorted: string | boolean;
  unsorted: string | boolean;
  empty: string | boolean;
}

export interface IProjectsPage {
  content: IProject[];
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
