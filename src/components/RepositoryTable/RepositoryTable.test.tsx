import { screen, fireEvent } from "@testing-library/react";
import { Repository } from "../../types/github";
import { SortOptions } from "@/types/enums/enums";
import { vi } from 'vitest';
import { render } from "@/tests";
import { RepositoryTable } from "./RepositoryTable";

// Sample data for repositories
const mockRepositories: Repository[] = [
  {
    id: 1,
    name: "Repo 1",
    description: "This is a test repository",
    language: "JavaScript",
    forks_count: 10,
    stargazers_count: 50,
    updated_at: "2023-01-01T00:00:00Z",
  },
  {
    id: 2,
    name: "Repo 2",
    description: "This is another test repository",
    language: "TypeScript",
    forks_count: 5,
    stargazers_count: 20,
    updated_at: "2023-01-02T00:00:00Z",
  },
];

// Mock sort function
const mockSort = vi.fn();

describe("RepositoryTable", () => {
  beforeEach(() => {
    render(
      <RepositoryTable
        repositories={mockRepositories}
        onSort={mockSort}
        sortField={SortOptions.Stars}
        sortOrder="asc"
      />
    );
  });

  it("renders the table with the correct headers", () => {
    expect(screen.getByText("Repository")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Forks")).toBeInTheDocument();
   
  });

  it("renders the repository rows with correct data", () => {
    expect(screen.getByText("Repo 1")).toBeInTheDocument();
    expect(screen.getByText("This is a test repository")).toBeInTheDocument();
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();
    expect(screen.getByText("Jan 1, 2023")).toBeInTheDocument();

    expect(screen.getByText("Repo 2")).toBeInTheDocument();
    expect(screen.getByText("This is another test repository")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("20")).toBeInTheDocument();
    expect(screen.getByText("Jan 2, 2023")).toBeInTheDocument();
  });

  it("calls onSort when a header is clicked", () => {
    const forksHeader = screen.getByText("Forks");
    fireEvent.click(forksHeader);
    expect(mockSort).toHaveBeenCalledWith(SortOptions.Forks);
  });

  it("displays the correct sort icon for the active sort field", () => {
    const starsHeader = screen.getByText(/Stars/);
    expect(starsHeader).toHaveTextContent("Stars ↑");
  });
});