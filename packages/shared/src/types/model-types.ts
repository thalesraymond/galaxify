export interface User {
  _id: string;
  email: string;
  username: string;
  ship: string; // ObjectId
  createdAt: Date;
  updatedAt: Date;
}

export interface Part {
  name: string;
  type: 'SCANNER' | 'ENGINE' | 'MINING_LASER' | 'SCOOP';
  description: string;
  effects: { effectType: string; value: number }[];
}

export interface Ship {
  _id: string;
  user: string; // ObjectId
  name: string;
  partSlots: number;
  parts: Part[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Task {
  _id: string;
  user: string; // ObjectId
  type: 'HABIT' | 'DAILY' | 'TODO';
  text: string;
  notes?: string;
  isPositive: boolean;
  isNegative: boolean;
  completed: boolean;
  streak: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Planet {
    name: string;
    type: string;
    isExplored: boolean;
}

export interface StarSystem {
  _id: string;
  user: string; // ObjectId
  name: string;
  isCurrent: boolean;
  planetCount: number;
  escapeVector: {
    requiredTasks: { taskType: string; habitText: string; count: number }[];
    isCompleted: boolean;
  };
  planets: Planet[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Discovery {
  _id: string;
  user: string; // ObjectId
  type: 'PLANET' | 'CREATURE' | 'ANOMALY' | 'LORE_FRAGMENT';
  name: string;
  description: string;
  starSystem: string; // ObjectId
  createdAt: Date;
  updatedAt: Date;
}

export interface Resource {
    _id: string;
    user: string; // ObjectId
    type: string;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
}
