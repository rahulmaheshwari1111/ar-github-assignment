import { screen, fireEvent } from '@testing-library/react';
import { render } from '@/tests'; // Adjust the import path as needed for your render function
import { SearchForm } from './SearchForm';
import { vi } from 'vitest';

describe('SearchForm', () => {
  const mockOnSubmit = vi.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  it('renders the input and button correctly', () => {
    render(<SearchForm onSubmit={mockOnSubmit} isLoading={false} />);

    // Check if the input is rendered
    const input = screen.getByPlaceholderText('Enter GitHub username or organization');
    expect(input).toBeInTheDocument();

    // Check if the button is rendered
    const button = screen.getByRole('button', { name: /search/i });
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  it('shows validation error when submitting empty input', async () => {
    render(<SearchForm onSubmit={mockOnSubmit} isLoading={false} />);

    // Click the submit button without entering any input
    const button = screen.getByRole('button', { name: /search/i });
    fireEvent.click(button);

    // Check for validation error
    expect(screen.getByText('Username is required')).toBeInTheDocument();
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it('submits the form with a valid username', async () => {
    render(<SearchForm onSubmit={mockOnSubmit} isLoading={false} />);

    // Enter a valid username
    const input = screen.getByPlaceholderText('Enter GitHub username or organization');
    fireEvent.change(input, { target: { value: 'testuser' } });

    // Click the submit button
    const button = screen.getByRole('button', { name: /search/i });
    fireEvent.click(button);

    // Check if the mockOnSubmit was called with the correct username
    expect(mockOnSubmit).toHaveBeenCalledWith('testuser');
  });

  it('disables the input and button when isLoading is true', () => {
    render(<SearchForm onSubmit={mockOnSubmit} isLoading={true} />);

    // Check if the input and button are disabled
    const input = screen.getByPlaceholderText('Enter GitHub username or organization');
    const button = screen.getByRole('button', { name: /search/i });
    expect(input).toBeDisabled();
    expect(button).toBeDisabled();
  });
});
