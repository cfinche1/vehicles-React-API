const VehicleEndpoint = 'https://61fd8ab3a58a4e00173c95c3.mockapi.io/vehicle';

class VehiclesApi {
    get = async () => {
        try{
            const resp = await fetch(VehicleEndpoint);
            const data = await resp.json();
            return data;
        } catch (e) {
            console.log('Oh no! Seems like a traffic jam.', e);
        }
    }
   
    put = async (vehicle) => {
        try{
            const resp = await fetch(`${VehicleEndpoint}/${vehicle.id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(vehicle)
            });
            return await resp.json();
        }catch(e) {
            console.log('Uh oh! Looks like the car would not start.', e);
        }
    }

    post = async (vehicle) => {
        try{
            const resp = await fetch(`${VehicleEndpoint}`, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(vehicle)
            });
            return await resp.json()
        }catch(e) {
            console.log('Dang! The car broke down.', e);
        }
    }

    delete = async (vehicle) => {
        try{
            const resp = await fetch(`${VehicleEndpoint}/${vehicle.id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            return await resp.json();
        }catch(e) {
            console.log('Shoot! The car is getting towed!', e);
        }
    }
}

export const vehicleApi = new VehiclesApi();

