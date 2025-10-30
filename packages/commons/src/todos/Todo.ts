export default interface Todo {
  id: string;
  userId: string;
  title: string;
  description?: string;
  dueDate: Date;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}
