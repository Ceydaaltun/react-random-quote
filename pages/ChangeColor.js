import { useEffect, useState } from "react";


export default function ChangeColor({ children }) {
    const [color, setColor] = useState("#333454");

    const handleColorChange = () => {
        const newColor = `#${Math.floor(Math.random() * 6556).toString().padStart(6, '3')}`
        setColor(newColor)
    };

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);


    return children({ color, handleColorChange});

};