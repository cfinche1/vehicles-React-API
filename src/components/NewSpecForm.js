import React, { useState } from "react";

export const NewSpecForm = (props) => {
    const [model, setModel] = useState('');
    const [color, setColor] = useState('');


    const onSubmit = (e) => {
        e.preventDefault();
        if (model && color) {
            props.addNewSpec({model, color});
            setModel('');
            setColor('');
        }else {
            console.log('invalid input');
        }
    }


    return(
        <div>
            <h4>Add new specs</h4>
            <form onSubmit={onSubmit}>
                <input
                type='text'
                key={model.id}
                placeholder="model"
                onChange={(e) => setModel(e.target.value)}
                value={model}
                />
                <input
                type='text'
                key={color.id}
                placeholder="color"
                onChange={(e) => setColor(e.target.value)}
                value={color}
                />
                <button type="submit">Add specs</button>
            </form>
        </div>
    )
}