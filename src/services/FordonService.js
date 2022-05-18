import axios from '../api/axios.js';

const VEHICLE_API_BASE_URL = "http://localhost:3000/vehicles";

export class FordonService {

    getVehicle() {
        return axios.get(VEHICLE_API_BASE_URL);
    }

    createVehicle(vehicles) {
        return axios.post(VEHICLE_API_BASE_URL, vehicles);
    }

    getVehicleById(vehicleid) {
        return axios.get(VEHICLE_API_BASE_URL + '/' + vehicleid);
    }

    updateVehicle(vehicles, vehicleid) {
        return axios.put(VEHICLE_API_BASE_URL + '/' + vehicleid, vehicles);
    }

    deleteVehicle(vehicleid) {
        return axios.delete(VEHICLE_API_BASE_URL + '/' + vehicleid)
    }
}

export default new FordonService()