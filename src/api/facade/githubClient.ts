import axios from 'axios';

const GITHUB_API_BASE = 'https://api.github.com';

export const githubClient = axios.create({
  baseURL: GITHUB_API_BASE,
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
});

export default githubClient;
