import React from 'react';
import { Repository, SearchParams } from '../../types/github';
import { format } from 'date-fns';
import { Group, Table } from '@mantine/core';
import { truncateString } from '../../utils/helpers';

interface RepositoryTableProps {
  repositories: Repository[];
  onSort: (field: SearchParams['sort']) => void;
  sortField?: string;
  sortOrder?: 'asc' | 'desc';
}

export const RepositoryTable: React.FC<RepositoryTableProps> = ({
  repositories,
  onSort,
  sortField,
  sortOrder,
}) => {
  const renderSortIcon = (field: string) => {
    if (sortField !== field) return null;
    return sortOrder === 'asc' ? '↑' : '↓';
  };
  const TableRows = repositories?.map((repo) => (
    <Table.Tr key={repo.name}>
      <Table.Td fw ='bold'>{repo.name}</Table.Td>
      <Table.Td>{truncateString(repo.description || '',90)}</Table.Td>
      <Table.Td>{repo.language || "-"}</Table.Td>
      <Table.Td key ='fork'>{repo.forks_count}</Table.Td>
      <Table.Td>{repo.stargazers_count}</Table.Td>
      <Table.Td>{format(new Date(repo.updated_at), "MMM d, yyyy")}</Table.Td>
    </Table.Tr>
  ));

  const TableHeaders = (
    <Table.Thead __size='lg'>
      <Table.Tr>
        <Table.Th c={'blue'}>Repository Name</Table.Th>
        <Table.Th>Description</Table.Th>
        <Table.Th c={'blue'}>Languages</Table.Th>
        <Table.Th onClick={() => onSort('forks')}>Forks {renderSortIcon('forks')}</Table.Th>
        <Table.Th c={'blue'} onClick={() => onSort('stars')}>Stars{renderSortIcon('stars')}</Table.Th>
        <Table.Th onClick={() => onSort('updated')}>Last Updated {renderSortIcon('updated')}</Table.Th>
      </Table.Tr>
    </Table.Thead>
  );
  return (
    <Group m="xl">
      <Table
        stickyHeader
        highlightOnHover
        withTableBorder
        withColumnBorders
        stickyHeaderOffset={60}
        horizontalSpacing="md"
        verticalSpacing={20}
        c={"cyan"}
      >
        {TableHeaders}
        <Table.Tbody>{TableRows}</Table.Tbody>
      </Table>
    </Group>
  );
};
