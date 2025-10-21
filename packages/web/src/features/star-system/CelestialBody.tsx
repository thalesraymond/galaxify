import Tooltip from "./Tooltip";
import { CelestialBody as CelestialBodyType } from "./types";

interface CelestialBodyProps {
    body: CelestialBodyType;
    size: string;
    color: string;
    showTooltip: boolean;
    onClick: () => void;
}

export default function CelestialBody({ body, size, color, showTooltip, onClick }: CelestialBodyProps) {
    return (
        <div className="relative">
            <div
                className={`${size} ${color} rounded-full cursor-pointer transition-all duration-300 hover:scale-125`}
                onClick={onClick}
            />
            {showTooltip && <Tooltip body={body} />}
        </div>
    );
}
