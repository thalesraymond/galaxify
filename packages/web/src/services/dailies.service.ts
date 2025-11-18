import { apiClient } from '../lib/api-client';

export interface Daily {
  id: string;
  title: string;
  description?: string;
  resetCounter: 'daily' | 'weekly' | 'monthly';
  counter: number;
  checks: string[];
}

export const dailiesService = {
  getDailies: (): Promise<Daily[]> => apiClient('/dailies'),
  createDaily: (data: Partial<Daily>): Promise<Daily> => apiClient('/dailies', { body: data }),
  updateDaily: (id: string, data: Partial<Daily>): Promise<Daily> => apiClient(`/dailies/${id}`, { method: 'PUT', body: data }),
  deleteDaily: (id: string): Promise<void> => apiClient(`/dailies/${id}`, { method: 'DELETE' }),
  checkDaily: (id: string): Promise<Daily> => apiClient(`/dailies/${id}/check`, { method: 'POST' }),
};
