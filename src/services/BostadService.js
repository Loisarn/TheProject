import axios from 'axios';

const HOME_BASE_URL = "http://localhost:3000/houses";

export class BostadService {

    getHouse() {
        return axios.get(HOME_BASE_URL);
    }

    createHouse(house) {
        return axios.post(HOME_BASE_URL, house);
    }

    getHouseById(houseId) {
        return axios.get(HOME_BASE_URL + '/' + houseId);
    }

    updateHouse(house, houseId) {
        return axios.put(HOME_BASE_URL + '/' + houseId, house);
    }

    deleteHouse(houseId) {
        return axios.delete(HOME_BASE_URL + '/' + houseId)
    }
}

export default new BostadService()