"use client";

import { useState } from "react";
import CelestialBody from "./CelestialBody";
import { StarSystemData, Planet, Moon, CelestialBody as CelestialBodyType } from "./types";

// Helper function to generate angles once
const generateInitialAngles = (data: StarSystemData) => {
    const angles = new Map<string, number>();
    data.planets.forEach((planet) => {
        angles.set(planet.name, Math.random() * 360);
        planet.moons.forEach((moon) => {
            angles.set(moon.name, Math.random() * 360);
        });
    });
    return angles;
};

export default function StarSystem({ data }: { data: StarSystemData }) {
    const [activeBody, setActiveBody] = useState<CelestialBodyType | null>(null);

    // Store the random angles in state so they are only generated once
    const [initialAngles] = useState(() => generateInitialAngles(data));

    const handleBodyClick = (body: CelestialBodyType) => {
        setActiveBody(activeBody?.name === body.name ? null : body);
    };

    if (!data) return <div className="text-white">No data available.</div>;

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <h1 className="absolute top-5 md:top-10 text-3xl md:text-5xl font-bold text-cyan-300 tracking-wider opacity-80 font-orbitron">
                {data.starSystemName} System
            </h1>

            <div className="relative w-[90vmin] h-[90vmin] max-w-[800px] max-h-[800px]">
                {/* Star */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <CelestialBody
                        body={data.stellarObject}
                        size="w-16 h-16"
                        color="bg-gradient-to-br from-yellow-400 to-red-500 shadow-[0_0_40px_10px] shadow-yellow-500/50"
                        showTooltip={activeBody?.name === data.stellarObject.name}
                        onClick={() => handleBodyClick(data.stellarObject)}
                    />
                </div>

                {/* Planets */}
                {data.planets.map((planet: Planet, index: number) => {
                    const orbitRadius = 100 + index * 70;
                    const randomAngle = initialAngles.get(planet.name) || 0;

                    return (
                        <div
                            key={planet.name}
                            className="absolute top-1/2 left-1/2 border border-dashed border-gray-600/30 rounded-full"
                            style={{
                                width: `${orbitRadius * 2}px`,
                                height: `${orbitRadius * 2}px`,
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            <div
                                className="absolute top-1/2 left-1/2 w-full h-full"
                                style={{
                                    transform: `rotate(${randomAngle}deg)`,
                                }}
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="relative">
                                        <CelestialBody
                                            body={planet}
                                            size={planet.isHabitable ? "w-5 h-5" : "w-4 h-4"}
                                            color={
                                                planet.isHabitable
                                                    ? "bg-green-500"
                                                    : planet.type === "Icy Planet"
                                                    ? "bg-blue-300"
                                                    : "bg-red-700"
                                            }
                                            showTooltip={activeBody?.name === planet.name}
                                            onClick={() => handleBodyClick(planet)}
                                        />
                                        {/* Moons */}
                                        {planet.moons.map((moon: Moon, moonIndex: number) => {
                                            const moonOrbitRadius = 25 + moonIndex * 10;
                                            const moonRandomAngle = initialAngles.get(moon.name) || 0;

                                            return (
                                                <div
                                                    key={moon.name}
                                                    className="absolute top-1/2 left-1/2"
                                                    style={{
                                                        width: `${moonOrbitRadius}px`,
                                                        height: `${moonOrbitRadius}px`,
                                                        transform: "translate(-50%, -50%)",
                                                    }}
                                                >
                                                    <div
                                                        className="absolute top-1/2 left-1/2 w-full h-full"
                                                        style={{
                                                            transform: `rotate(${moonRandomAngle}deg)`,
                                                        }}
                                                    >
                                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                                            <CelestialBody
                                                                body={moon}
                                                                size="w-2 h-2"
                                                                color="bg-gray-400"
                                                                showTooltip={activeBody?.name === moon.name}
                                                                onClick={() => handleBodyClick(moon)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
