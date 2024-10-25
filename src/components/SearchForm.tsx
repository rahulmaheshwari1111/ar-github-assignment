import React from 'react';
import { TextInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

interface SearchFormProps {
  onSubmit: (username: string) => void;
  isLoading: boolean;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSubmit, isLoading }) => {
  const form = useForm({
    initialValues: {
      username: '',
    },
    validate: {
      username: (value) => !value ? 'Username is required' : null,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => onSubmit(values.username))}>
      <Group align="flex-start">
        <TextInput
          {...form.getInputProps('username')}
          placeholder="Enter GitHub username or organization"
          style={{ flex: 1 }}
          disabled={isLoading}
        />
        <Button
          type="submit"
          disabled={isLoading}
        >
          Search
        </Button>
      </Group>
    </form>
  );
};