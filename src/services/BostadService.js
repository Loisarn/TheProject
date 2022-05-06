import axios from 'axios';

const HOME_API_BASE_URL = "http://localhost:3000/houses";

export class BostadService {

    getHouse() {
        return axios.get(HOME_API_BASE_URL);
    }

    createHouse(houses) {
        return axios.post(HOME_API_BASE_URL, houses);
    }

    getHouseById(housesId) {
        return axios.get(HOME_API_BASE_URL + '/' + housesId);
    }

    updateHouse(houses, housesId) {
        return axios.put(HOME_API_BASE_URL + '/' + housesId, houses);
    }

    deleteHouse(housesId) {
        return axios.delete(HOME_API_BASE_URL + '/' + housesId)
    }
}

export default new BostadService()