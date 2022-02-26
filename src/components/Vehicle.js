import React from 'react';
import { NewSpecForm } from './NewSpecForm';

export const Vehicle = (props) => {
    const { vehicle, updateVehicle, } = props;
    //console.log(vehicle, "Printing out vehicle");
    //console.log(vehicle.specs, "Printing out vehicle and specs")

    const deleteVehicle = () => {
        props.deleteVehicle(vehicle);
    };

    const deleteSpec = (specId) => {
        const updatedVehicle = {
            ...vehicle,
            specs: vehicle.specs.filter((x) => x._id !== specId)
        };
        updateVehicle(updatedVehicle);
    }

    const addNewSpec = (spec) => updateVehicle({...vehicle, specs:[...vehicle.specs, spec]});

    const specs = () => (   
        <ul>
            {vehicle.specs.map((spec, index) => (
                <ul key={index}>
                    <label>{`Model: ${spec.model}`}</label><br/>
                    <label>{`Color: ${spec.color}`}</label><br/>
                    <button onClick={(e) => deleteSpec(spec._id)}>Delete</button>
                </ul>
            ))}
        </ul>
    );

    

    return(
        <div>
            <h2>{vehicle.make}<br/>
                <button onClick={deleteVehicle}>Delete Vehicle</button>
            </h2>
            {
                specs({ specs, vehicleId: vehicle._id, deleteSpec})
            }
            <NewSpecForm addNewSpec={addNewSpec} />
        </div>
    );
};