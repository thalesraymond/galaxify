export type UpdateHabitDto = {
  title?: string;
  description?: string;
  isPositive?: boolean;
  isNegative?: boolean;
  resetCounter?: 'daily' | 'weekly' | 'monthly';
};
