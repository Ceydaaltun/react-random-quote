import { useEffect, useState } from "react";

export default function ChangeColor({ children }) {
    const [color, setColor] = useState("#333454");
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleColorChange = () => {
        const newColor = `#${Math.floor(Math.random() * 6556).toString().padStart(6, '3')}`
        setColor(newColor);
    };

    useEffect(() => {
        if (isClient) {
            document.body.style.backgroundColor = color;
        }
    }, [color, isClient]);

    return typeof children === 'function' ? children({ color, handleColorChange }) : null;
}
