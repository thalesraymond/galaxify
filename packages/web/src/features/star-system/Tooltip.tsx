import ProgressBar from "./ProgressBar";
import { CelestialBody } from "./types";

interface TooltipProps {
    body: CelestialBody;
}

export default function Tooltip({ body }: TooltipProps) {
    return (
        <div className="absolute bottom-full mb-2 w-48 bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-2 text-white shadow-lg shadow-cyan-500/10">
            <h3 className="text-md font-bold text-cyan-300">{body.name}</h3>
            <p className="text-xs text-gray-400">{body.type}</p>
            {body.mass && <p className="text-xs text-gray-500 mt-1">Mass: {body.mass}</p>}
            {body.isHabitable !== undefined && (
                <p className={`text-xs font-semibold mt-1 ${body.isHabitable ? "text-green-400" : "text-red-400"}`}>
                    {body.isHabitable ? "Potentially Habitable" : "Not Habitable"}
                </p>
            )}
            <div className="mt-2">
                <p className="text-xs text-gray-400 mb-1">Scan Progress</p>
                <ProgressBar current={body.currentHabitPoints} total={body.totalHabitPoints} />
            </div>
        </div>
    );
}
