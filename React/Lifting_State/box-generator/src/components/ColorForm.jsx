import React, { useState } from "react";

function ColorForm({ addColor }) {
    const [color, setColor] = useState("");
    const handlSubmit = (e) => {
        e.preventDefault();
        addColor(color);
    };
    return (
        <div>
            <form action="" onSubmit={handlSubmit}>
                <label htmlFor="color">Color</label>
                <input
                    type="color"
                    id="color"
                    onChange={(e) => setColor(e.target.value)}
                    value={color}
                />
                <button>Add</button>
            </form>
        </div>
    );
}

export default ColorForm;
