# GitHub Repository Explorer

A modern React application that allows users to search and explore GitHub repositories by username or organization. Built with React, TypeScript, and modern web development tools.

## Features

- Search repositories by GitHub username or organization
- Sort repositories by various criteria (stars, forks, last updated)
- Pagination support
- Error handling and loading states
- Clean and modern UI with Mantine Component library

## Technical Stack

- React 18
- TypeScript 5
- TanStack Query (React Query) for data fetching and management
- Axios for API requests
- Mantine component library for Table, Skeletal Loading, Pagination and styling
- date-fns for date formatting

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rahulmaheshwari1111/ar-github-assignment.git
cd ar-github-assignment
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

Testing
This project includes automated tests to ensure the functionality of components and API interactions.

### Running Tests
To run the tests, use the following command:

```bash
npm test
```

What is Tested?
Repository Explorer Component: Ensures the search input and form submission work as expected.
RepositoryTable Component: Verifies that repository data is displayed correctly in the table.
Pagination Component: Tests navigation between pages of repository results.
API Service: Mocks API calls to ensure that the service functions correctly when interacting with the GitHub API.
Error Handling: Tests display of error messages when API calls fail.




## Project Structure

```
src/
├── components/              # React components
│   ├── RepositoryTable/
│   │   ├── RepositoryTable.tsx
│   │   └── RepositoryTable.test.tsx
│   ├── RepositoryExplorer/
│   │   ├── RepositoryExplorer.tsx
│   │   └── RepositoryExplorer.test.tsx
│   ├── SearchForm/
│   │   └── SearchForm.tsx
│   ├── Skeleton/
│   │   └── Skeleton.tsx
├── services/                # API services
│   └── github.ts
├── types/                   # TypeScript types
│   ├── github.ts
│   └── enums.ts             # Enum types
├── utils/                   # Utility functions
│   └── helpers.ts
├── hooks/                   # Custom hooks
│   └── useCustomHook.ts
├── providers/               # Context providers
│   └── AppProvider.tsx
├── tests/                   # Additional test files
│   └── setupTests.ts
├── App.tsx                  # Main application component
├── main.tsx                 # Entry point


```

## Future Improvements

Here are some ideas for future enhancements:

1. Advanced Filtering
   - Filter by repository visibility (public/private)

2. Enhanced Features
   - Repository statistics visualization
   - Repository Fork or Clone feature (if forking enabled)
   - User/Organization/Owner profile information (avatar,followers, etc.)
   - Commit history overview

3. Technical Improvements
   - Implement caching strategy
   - Add unit and integration tests
   - Add GitHub authentication
   - Implement rate limiting handling
   - Add error boundary components

4. UI Enhancements
   - Dark mode support
   - Customizable table columns
   - Repository cards view alternative
   - Mobile-optimized interface

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.