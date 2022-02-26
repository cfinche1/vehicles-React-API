import React from "react";
import { Vehicle } from "./Vehicle";
import { vehicleApi } from "../rest/VehicleApi";
import { NewVehicleForm } from './NewVehicleForm';


export class VehicleList extends React.Component {
    state = {
        vehicles: [],
        vehicleChanged: false
    };


    componentDidMount() {
        this.fetchVehicles();
    }

    fetchVehicles = async () => {
        const vehicles = await vehicleApi.get();
        this.setState({ vehicles });
        
    };

    createVehicle = async (vehicle) => {
        //console.log(this.state);
        await vehicleApi.post(vehicle);
        this.state.vehicleChanged = true;
        this.fetchVehicles();
        //console.log(this.state);
    }

    updateVehicle = async (updatedVehicle) => {
        await vehicleApi.put(updatedVehicle);
        this.fetchVehicles();
    };

    deleteVehicle = async(vehicle) => {
         await vehicleApi.delete(vehicle);
         this.state.vehicleChanged = true;
         this.fetchVehicles();
    }    

    render() {
        return(
            <div>
                <div className="vehicles">
                    <NewVehicleForm createNewVehicle={this.createVehicle} />
                </div>
                <div className="vehicle-list">
                    {this.state.vehicles.map((vehicle) =>(
                        <Vehicle
                        vehicle={vehicle}
                        key={vehicle.id}
                        updateVehicle={this.updateVehicle}
                        deleteVehicle={this.deleteVehicle}
                        />
                ))}
                </div>
            </div>
        
        )
    }
}