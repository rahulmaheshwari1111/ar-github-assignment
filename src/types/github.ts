export interface Repository {
    id: number;
    name: string;
    full_name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    updated_at: string;
    visibility: string;
  }

  export interface SearchParams {
    q: string;
    sort?: 'stars' | 'forks' | 'updated' | 'help-wanted-issues';
    order?: 'asc' | 'desc';
    per_page?: number;
    page?: number;
  }

  