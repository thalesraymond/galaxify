export interface User {
  userId: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum TaskType {
  HABIT = 'HABIT',
  DAILY = 'DAILY',
  TODO = 'TODO',
}

export interface Task {
  taskId: string;
  user: string; // userId
  type: TaskType;
  text: string;
  notes?: string;
  isPositive: boolean;
  isNegative: boolean;
  completed: boolean;
  streak: number;
  createdAt: Date;
  updatedAt: Date;
}

export enum ShipPartType {
  SCANNER = 'SCANNER',
  ENGINE = 'ENGINE',
  MINING_LASER = 'MINING_LASER',
}

export interface ShipPartEffect {
  effectType: string; // e.g., 'REWARD_BONUS'
  value: number;
}

export interface ShipPart {
  name: string;
  type: ShipPartType;
  description?: string;
  effects: ShipPartEffect[];
}

export interface Ship {
  shipId: string;
  user: string; // userId
  name: string;
  partSlots: number;
  parts: ShipPart[];
}

export interface Planet {
  planetId: string;
  name: string;
  description?: string;
  discoveredAt: Date;
}

export interface StarSystem {
  systemId: string;
  user: string; // userId
  name: string;
  isCurrent: boolean;
  planets: Planet[];
}

export enum DiscoveryType {
  PLANET = 'PLANET',
  CREATURE = 'CREATURE',
  LORE = 'LORE',
}

export interface Discovery {
  discoveryId: string;
  user: string; // userId
  type: DiscoveryType;
  name: string;
  description?: string;
  discoveredAt: Date;
}

export interface Party {
  partyId: string;
  name: string;
  members: string[]; // userIds
  activeEvent?: string;
}