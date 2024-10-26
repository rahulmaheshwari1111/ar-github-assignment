// components/TableSkeleton.tsx
import React from 'react';
import { Group, Table, Skeleton } from '@mantine/core';

interface TableSkeletonProps {
  rows?: number;
  columns?: number;
}

export const TableSkeleton: React.FC<TableSkeletonProps> = ({ rows = 10, columns = 6 }) => {
  return (
    <Group m="xl">
      <Table
        withTableBorder
        withColumnBorders
        verticalSpacing={20}
        bg="white"
        miw={"80vw"}
      >
        <Table.Thead>
          <Table.Tr>
            {Array.from({ length: columns }).map((_, index) => (
              <Table.Th key={index}>
                <Skeleton height={20} radius="sm" width="100%" />
              </Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <Table.Tr key={rowIndex}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <Table.Td key={colIndex}>
                  <Skeleton height={20} radius="sm" width={`${50 + Math.random() * 40}%`} />
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Group>
  );
};
