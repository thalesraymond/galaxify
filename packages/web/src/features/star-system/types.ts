export interface CelestialBody {
    name: string;
    type: string;
    mass?: string;
    isHabitable?: boolean;
    currentHabitPoints: number;
    totalHabitPoints: number;
}

export interface Moon extends CelestialBody {}

export interface Planet extends CelestialBody {
    moons: Moon[];
}

export interface StellarObject extends CelestialBody {}

export interface StarSystemData {
    starSystemName: string;
    stellarObject: StellarObject;
    planets: Planet[];
}
