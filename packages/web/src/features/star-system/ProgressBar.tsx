interface ProgressBarProps {
    current: number;
    total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
    const percentage = (current / total) * 100;

    return (
        <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div
                className="bg-cyan-400 h-2.5 rounded-full"
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );
}
