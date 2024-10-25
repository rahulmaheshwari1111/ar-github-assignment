import React, { useState } from "react";
import { SearchForm } from "./SearchForm";
import { RepositoryTable } from "./ReposioryTable/RepositoryTable";

import { useRepositories } from "../hooks/useRepositories";
import { Flex, Loader, Pagination, Title } from "@mantine/core";
import { SearchParams } from "../types/github";

const ITEMS_PER_PAGE = 10;

export const RepositoryExplorer: React.FC = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    q: "",
    sort: "updated" as const,
    order: "desc" as const,
    per_page: ITEMS_PER_PAGE,
    page: 1,
  });

  const { data, isLoading, error } = useRepositories(searchParams);

  const handleSearch = (username: string) => {
    setSearchParams((prev) => ({
      ...prev,
      q: username,
      page: 1,
    }));
  };

  const handleSort = (field: SearchParams["sort"]) => {
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

  const totalPages = data ? Math.ceil(data.total_count / ITEMS_PER_PAGE) : 0;

  return (
    <Flex align="center" mt="md" direction={"column"} gap={20}>
      <Flex mt="md" direction={"column"} gap={20}>
        <Title title="Github Repository Search" variant="h2" mb="md">
          Github Repository Search
        </Title>

        <SearchForm onSubmit={handleSearch} isLoading={isLoading} />
      </Flex>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {(error as Error).message}
        </div>
      )}
      {isLoading && <Loader />}
      {data?.items && (
        <>
          <Flex align="center" direction="column">
            <RepositoryTable
              repositories={data.items}
              onSort={handleSort}
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
        </>
      )}
    </Flex>
  );
};
