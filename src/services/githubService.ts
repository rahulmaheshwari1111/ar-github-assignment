import axios from 'axios';
import {SearchParams } from '../types/github';

const GITHUB_API_BASE = 'https://api.github.com';

export const searchRepositories = async (params: SearchParams) => {
  try {
    const response = await axios.get(`${GITHUB_API_BASE}/search/repositories`, {
      params: {
        ...params
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to fetch repositories');
    }
    throw error;
  }
};