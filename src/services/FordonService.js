import axios from 'axios';

const VEHICLE_API_BASE_URL = "http://localhost:1234/api/v1/vehicles";

export class FordonService {

    getFordon() {
        return axios.get(VEHICLE_API_BASE_URL);
    }

    createFordon(fordon) {
        return axios.post(VEHICLE_API_BASE_URL, fordon);
    }

    getFordonById(fordonId) {
        return axios.get(VEHICLE_API_BASE_URL + '/' + fordonId);
    }

    updateFordon(fordon, fordonId) {
        return axios.put(VEHICLE_API_BASE_URL + '/' + fordonId, fordon);
    }

    deleteFordon(fordonId) {
        return axios.delete(VEHICLE_API_BASE_URL + '/' + fordonId)
    }
}

export default new FordonService()