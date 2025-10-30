import { model, Schema } from 'mongoose';
import { Todo } from '@galaxify/commons';

const todoSchema = new Schema<Todo>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any,
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret: Record<string, unknown>) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export const TodoModel = model<Todo>('Todo', todoSchema);
