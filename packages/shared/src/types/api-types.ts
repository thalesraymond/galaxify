import { Ship, StarSystem, Task, User } from './model-types';

// =================================
// Task API Types
// =================================
export interface CreateTaskRequest {
  type: 'HABIT' | 'DAILY' | 'TODO';
  text: string;
  notes?: string;
}

export interface TaskCompletionResponse {
  message: string;
  rewards: {
    resourceType: string;
    quantity: number;
  }[];
}


// =================================
// Ship API Types
// =================================
export type ShipDataResponse = Ship;

export interface CraftPartRequest {
    partName: string;
    materials: { resourceType: string; quantity: number }[];
}


// =================================
// Star System API Types
// =================================
export type StarSystemResponse = StarSystem;

// =================================
// Auth API Types (Placeholder)
// =================================

export interface AuthResponse {
    token: string;
    user: User;
}
