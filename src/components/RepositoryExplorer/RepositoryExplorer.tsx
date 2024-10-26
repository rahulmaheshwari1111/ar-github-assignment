import React, { useState } from "react";
import { SearchForm } from "../SearchForm";
import { RepositoryTable } from "../RepositoryTable/RepositoryTable";
import { useRepositories } from "../../hooks/useRepositories";
import { Center, Flex, Pagination, Title } from "@mantine/core";
import { SearchParams } from "../../types/github";
import { TableSkeleton } from "../TableSkeleton/TableSkeleton";

const ITEMS_PER_PAGE = 10;

export const RepositoryExplorer: React.FC = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    q: "",
    sort: "updated" as const,
    order: "desc" as const,
    per_page: ITEMS_PER_PAGE,
    page: 1,
  });

  const { data, isLoading, error, status } = useRepositories(searchParams);
  const totalPages = data ? Math.ceil(data.total_count / ITEMS_PER_PAGE) : 0;

  const handleSearch = (username: string) => {
    setSearchParams((prev) => ({
      ...prev,
      q: username,
      page: 1,
    }));
  };

  const handleSorting = (field: SearchParams["sort"]) => {
    setSearchParams((prev) => ({
      ...prev,
      sort: field,
      order: prev.sort === field && prev.order === "desc" ? "asc" : "desc",
    }));
  };

  const handlePageChange = (page: number) => {
    setSearchParams((prev) => ({
      ...prev,
      page,
    }));
  };



  return (
    <Flex align="center" mt="md" direction="column" gap={20}>
      <Flex mt="md" direction="column" gap={20}>
        <Title variant="h2" mb="md">Github Repository Search</Title>
        <SearchForm onSubmit={handleSearch} isLoading={isLoading} />
      </Flex>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {(error as Error).message}
        </div>
      )}
   {isLoading && (
        <Center my="md">
          <TableSkeleton rows={ITEMS_PER_PAGE} columns={6} />
        </Center>
      )}
      {status === 'success' && (
        <Flex align="center" direction="column" p="md">
          <RepositoryTable
            repositories={data.items}
            onSort={handleSorting}
            sortField={searchParams.sort}
            sortOrder={searchParams.order}
          />
          <Pagination
            autoContrast
            color="blue"
            value={searchParams.page}
            total={totalPages}
            onChange={handlePageChange}
          />
        </Flex>
      )}
    </Flex>
  );
};
