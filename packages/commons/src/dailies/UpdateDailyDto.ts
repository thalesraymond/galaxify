export type UpdateDailyDto = {
  title?: string;
  description?: string;
  resetCounter?: 'daily' | 'weekly' | 'monthly';
};
