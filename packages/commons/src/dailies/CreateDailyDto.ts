export type CreateDailyDto = {
  title: string;
  description?: string;
  resetCounter: 'daily' | 'weekly' | 'monthly';
};
