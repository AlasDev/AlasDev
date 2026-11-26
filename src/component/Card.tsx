import './Card.css';
import type {CSSProperties, ReactNode} from "react";

interface CardSettings {
    height?: number; //percentage
    width?: number; //percentage
    borderWidth?: number; //pixels
    transparency?: number; //percentage
    color?: string;
    children?: ReactNode;
}

export function Card({height = 100,
                         width = 100,
                         borderWidth = 3,
                         transparency = 50,
                         color = "#0A0C0E",
                         children}: CardSettings) {
    const vars = {
        "--cardHeight": `${height}%`,
        "--cardWidth": `${width}%`,
        "--cardBorderWidthPx": `${borderWidth}px`,
        "--cardTransparency": `${transparency}%`,
        "--cardBg": color
    } as CSSProperties;

    return (
        <div className="Card" style={vars}>
            {children}
        </div>
    );
}