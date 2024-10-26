import { render } from '../../tests/render';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { RepositoryExplorer } from './RepositoryExplorer';
import * as hooks from '../../hooks/useRepositories';
import { screen } from '@testing-library/react';
import { Repository } from '@/types/github';

const useRepositoriesSpy = vi.spyOn(hooks, 'useRepositories');

// Mock Mantine components that might cause issues
vi.mock('@mantine/core', async (importOriginal) => {
  const actual = await importOriginal() as object;
  return {
    ...actual,
    Flex: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    Skeleton: () => <div role="status" data-testid="loading-skeleton" />,
    Title: ({ children }: { children: React.ReactNode }) => <h1>{children}</h1>,
    Pagination: () => <div data-testid="pagination" />,
  };
});

// Mock data
const mockRepositories: Repository[] = [
  {
    id: 1,
    name: 'react',
    description: 'A JavaScript library for building user interfaces',
    language: 'JavaScript',
    forks_count: 1000,
    stargazers_count: 5000,
    updated_at: '2024-03-20T10:00:00Z',
  },
  {
    id: 2,
    name: 'vue',
    description: 'Progressive JavaScript Framework',
    language: 'TypeScript',
    forks_count: 800,
    stargazers_count: 4000,
    updated_at: '2024-03-19T10:00:00Z',
  },
];

describe('RepositoryExplorer', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the title and search form', () => {
    useRepositoriesSpy.mockImplementation(() => ({
      data: undefined,
      isLoading: false,
      error: null,
      isIdle: true,
      isSuccess: false,
       //@ts-expect-error -- err
      status: 'idle',
      isFetching: false,
      isLoadingError: false,
      isRefetchError: false,
    }));

    render(<RepositoryExplorer />);
    
    expect(screen.getByText('Github Repository Search')).toBeInTheDocument();
  });



  it('displays error message when API call fails', () => {
    const errorMessage = 'API rate limit exceeded';
    //@ts-expect-error -- TODO fix query types
    useRepositoriesSpy.mockImplementation(() => ({
      data: null,
      isLoading: false,
      error: new Error(errorMessage),
      isIdle: false,
      isSuccess: false,
      status: 'error', 
      isFetching: false,
      isLoadingError: false,
      isRefetchError: false,
      isError: true, 
      dataUpdatedAt: Date.now(),
      errorUpdatedAt: Date.now(),
      isPreviousData: false,
      fetchStatus: 'idle',
    }));

    render(<RepositoryExplorer />);
    
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('displays repository data when API call succeeds', () => {
     //@ts-expect-error -- err
    useRepositoriesSpy.mockImplementation(() => ({
      data: {
        items: mockRepositories,
        total_count: 2,
      },
      isLoading: false,
      error: null,
      isIdle: false,
      isSuccess: true,
      status: 'success', // Correct status for success
      isFetching: false,
      isLoadingError: false,
      isRefetchError: false,
      isError: false,
      dataUpdatedAt: Date.now(),
      errorUpdatedAt: Date.now(),
      isPreviousData: false,
      fetchStatus: 'idle',
    }));

    render(<RepositoryExplorer />);

    expect(screen.getByText('react')).toBeInTheDocument();
    expect(screen.getByText('vue')).toBeInTheDocument();
  });
});
