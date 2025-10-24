export type Daily = {
    id: string;
    title: string;
    description?: string;
    resetCounter: 'daily' | 'weekly' | 'monthly';
    checks: Date[];
    counter: number;
};
