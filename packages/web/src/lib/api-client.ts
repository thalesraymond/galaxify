const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4001/api';

interface ApiClientConfig extends Omit<RequestInit, 'body'> {
  body?: any;
}

export async function apiClient(endpoint: string, { body, ...customConfig }: ApiClientConfig = {}) {
  const token = localStorage.getItem('token');
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config: RequestInit = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_URL}${endpoint}`, config);

  if (response.status === 401) {
    localStorage.removeItem('token');
    window.location.href = '/login';
    return Promise.reject(new Error('Unauthorized'));
  }

  if (response.ok) {
    if (response.status === 204) {
      return null;
    }
    return await response.json();
  } else {
    const errorMessage = await response.text();
    return Promise.reject(new Error(errorMessage));
  }
}
