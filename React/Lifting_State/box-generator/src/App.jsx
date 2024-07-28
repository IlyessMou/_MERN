import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ColorForm from "./components/ColorForm";
import ColorBox from "./components/ColorBox";

function App() {
    const [colors, setColors] = useState([]);
    const addNewColor = (newColor) => {
        setColors([...colors, newColor]);
        console.log(newColor);
        console.log(colors);
    };
    return (
        <>
            <ColorForm addColor={addNewColor} />
            {colors.map((c, i) => (
                <ColorBox key={i} boxColor={c} />
            ))}
            {/* <ColorBox boxColor={color} /> */}
        </>
    );
}

export default App;
