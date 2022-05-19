import axios from 'axios';

const VEHICLE_BASE_URL = "http://localhost:3000/vehicles";

export class FordonService {

    getVehicle() {
        return axios.get(VEHICLE_BASE_URL);
    }

    addVehicle(vehicle) {
        return axios.post(VEHICLE_BASE_URL, vehicle);
    }

    getVehicleById(vehicleId) {
        return axios.get(VEHICLE_BASE_URL + '/' + vehicleId);
    }

    updateVehicle(vehicle, vehicleId) {
        return axios.put(VEHICLE_BASE_URL + '/' + vehicleId, vehicle);
    }

    deleteVehicle(vehicleId) {
        return axios.delete(VEHICLE_BASE_URL + '/' + vehicleId)
    }
}

export default new FordonService()