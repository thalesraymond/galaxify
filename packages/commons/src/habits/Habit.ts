export type Habit = {
  _id: string;
  userId: string;
  title: string;
  description?: string;
  isPositive: boolean;
  isNegative: boolean;
  resetCounter: 'daily' | 'weekly' | 'monthly';
  positiveCount: number;
  negativeCount: number;
  createdAt: Date;
  updatedAt: Date;
};
