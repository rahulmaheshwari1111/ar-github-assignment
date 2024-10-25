# GitHub Repository Explorer

A modern React application that allows users to search and explore GitHub repositories by username or organization. Built with React, TypeScript, and modern web development tools.

## Features

- Search repositories by GitHub username or organization
- Sort repositories by various criteria (stars, forks, last updated)
- Pagination support
- Responsive table layout
- Error handling and loading states
- Clean and modern UI with Mantine Component library

## Technical Stack

- React 18
- TypeScript 5
- TanStack Query (React Query) for data fetching and management
- Axios for API requests
- Mantine component library for Table, Pagination and styling
- date-fns for date formatting

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/github-explorer.git
cd github-explorer
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your GitHub token (optional):
```
VITE_GITHUB_TOKEN=your_token_here
```

4. Start the development server:
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

bash
Copy code
npm test
# or
yarn test
What is Tested?
SearchForm Component: Ensures the search input and form submission work as expected.
RepositoryTable Component: Verifies that repository data is displayed correctly in the table.
Pagination Component: Tests navigation between pages of repository results.
API Service: Mocks API calls to ensure that the service functions correctly when interacting with the GitHub API.
Error Handling: Tests display of error messages when API calls fail.
Test Coverage
To generate a coverage report:

bash
Copy code
npm test -- --coverage
# or
yarn test --coverage
This will provide a detailed report of which parts of the codebase are covered by tests, helping you identify any gaps in test coverage.

## Project Structure

```
src/
├── components/          # React components
│   ├── SearchForm.tsx
│   ├── RepositoryTable.tsx
│   └── Pagination.tsx
├── services/           # API services
│   └── github.ts
├── types/             # TypeScript types
│   └── github.ts
└── App.tsx           # Main application component
```

## Future Improvements

Here are some ideas for future enhancements:

1. Advanced Filtering
   - Filter by programming language
   - Filter by repository visibility (public/private)
   - Date range filters

2. Enhanced Features
   - Repository statistics visualization
   - Repository README preview
   - User/Organization profile information
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
   - Loading skeletons

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.