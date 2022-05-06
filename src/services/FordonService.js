import axios from 'axios';

const VEHICLE_API_BASE_URL = "http://localhost:3000/vehicles";

export class FordonService {

    getVehicle() {
        return axios.get(VEHICLE_API_BASE_URL);
    }

    createVehicle(vehicles) {
        return axios.post(VEHICLE_API_BASE_URL, vehicles);
    }

    getVehicleById(vehicleId) {
        return axios.get(VEHICLE_API_BASE_URL + '/' + vehicleId);
    }

    updateVehicle(vehicles, vehicleId) {
        return axios.put(VEHICLE_API_BASE_URL + '/' + vehicleId, vehicles);
    }

    deleteVehicle(vehicleId) {
        return axios.delete(VEHICLE_API_BASE_URL + '/' + vehicleId)
    }
}

export default new FordonService()