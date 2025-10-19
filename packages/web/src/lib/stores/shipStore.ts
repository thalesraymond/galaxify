import { writable } from 'svelte/store';
import type { Ship } from 'shared/src/types/model-types';

export const ship = writable<Ship | null>(null);
