import axios from 'axios';
import {SearchParams } from '../types/github';
import githubClient from '@/api/facade/gitHubClient';


export const searchRepositories = async (params: SearchParams) => {
  try {
    const response = await githubClient.get('/search/repositories', {
      params: {
        ...params,
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