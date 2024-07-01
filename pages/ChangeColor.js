import { useEffect, useState } from "react";


export default function ChangeColor({ children }) {
    const [color, setColor] = useState("#333454");

    const handleColorChange = () => {
        const newColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
        setColor(newColor)
    };

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);


    return children({ color, handleColorChange});

};