import { writable } from 'svelte/store';
import type { User } from 'shared/src/types/model-types';

export const user = writable<User | null>(null);
