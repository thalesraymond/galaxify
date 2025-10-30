export type Daily = {
  id: string;
  userId: string;
  title: string;
  description?: string;
  resetCounter: 'daily' | 'weekly' | 'monthly';
  counter: number;
  checks: Date[];
  createdAt: Date;
  updatedAt: Date;
};
