import { useQuery } from '@tanstack/react-query';

import { SearchParams } from '../types/github';
import { searchRepositories } from '@/services/githubService';


export const useRepositories = (params: SearchParams) => {
  const queryString = [
    params.q && `user:${params.q}`,
    params.language && `language:${params.language}`,
    params.visibility && `is:${params.visibility}`,
    params.type && `type:${params.type}`,
    ...(params.topics || []).map(topic => `topic:${topic}`),
  ]
    .filter(Boolean)
    .join(' ');

  return useQuery({
    queryKey: ['repositories', { ...params, q: queryString }],
    queryFn: () => searchRepositories({ ...params, q: queryString }),
    enabled: !!params.q,
  });
};