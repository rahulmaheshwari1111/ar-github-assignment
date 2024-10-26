// test-utils.tsx
import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { vi } from 'vitest';

// Mock Mantine components while preserving MantineProvider
vi.mock('@mantine/core', async () => {
  const actual = await vi.importActual('@mantine/core');
  return {
    ...(actual as object),
    Table: Object.assign(
      ({ children, ...props }: { children: React.ReactNode }) => <table {...props}>{children}</table>,
      {
        Tr: ({ children, ...props }: { children: React.ReactNode }) => <tr {...props}>{children}</tr>,
        Td: ({ children, ...props }: { children: React.ReactNode }) => <td {...props}>{children}</td>,
        Th: ({ children, ...props }: { children: React.ReactNode }) => <th {...props}>{children}</th>,
        Thead: ({ children, ...props }: { children: React.ReactNode }) => <thead {...props}>{children}</thead>,
        Tbody: ({ children, ...props }: { children: React.ReactNode }) => <tbody {...props}>{children}</tbody>,
      }
    ),
    Group: ({ children, ...props }: { children: React.ReactNode }) => <div {...props}>{children}</div>,
  };
});

// Keep the original render function unchanged
export function render(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider>{children}</MantineProvider>
    ),
  });
}