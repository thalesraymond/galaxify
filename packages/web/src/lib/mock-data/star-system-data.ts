import { StarSystemData } from "@/features/star-system/types";

export const solarSystemData: StarSystemData = {
    starSystemName: "TRAPPIST-1",
    stellarObject: {
        name: "TRAPPIST-1",
        type: "Ultra-cool red dwarf",
        mass: "0.089 Solar Masses",
        currentHabitPoints: 75,
        totalHabitPoints: 100,
    },
    planets: [
        {
            name: "TRAPPIST-1b",
            type: "Terrestrial",
            isHabitable: false,
            moons: [],
            currentHabitPoints: 25,
            totalHabitPoints: 50,
        },
        {
            name: "TRAPPIST-1e",
            type: "Terrestrial",
            isHabitable: true,
            moons: [],
            currentHabitPoints: 10,
            totalHabitPoints: 80,
        },
        {
            name: "TRAPPIST-1g",
            type: "Terrestrial",
            isHabitable: true,
            moons: [
                {
                    name: "T-1g-alpha",
                    type: "Asteroid Capture",
                    currentHabitPoints: 5,
                    totalHabitPoints: 20,
                },
            ],
            currentHabitPoints: 60,
            totalHabitPoints: 100,
        },
        {
            name: "TRAPPIST-1h",
            type: "Icy Planet",
            isHabitable: false,
            moons: [
                {
                    name: "T-1h-alpha",
                    type: "Icy",
                    currentHabitPoints: 15,
                    totalHabitPoints: 30,
                },
                {
                    name: "T-1h-beta",
                    type: "Rocky",
                    currentHabitPoints: 0,
                    totalHabitPoints: 25,
                },
            ],
            currentHabitPoints: 90,
            totalHabitPoints: 120,
        },
    ],
};
