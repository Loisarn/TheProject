import axios from 'axios';

const HOME_API_BASE_URL = "http://localhost:1234/api/v1/home";

export class BostadService {

    getBostad() {
        return axios.get(HOME_API_BASE_URL);
    }

    createBostad(bostad) {
        return axios.post(HOME_API_BASE_URL, bostad);
    }

    getBostadById(bostadId) {
        return axios.get(HOME_API_BASE_URL + '/' + bostadId);
    }

    updateBostad(bostad, bostadId) {
        return axios.put(HOME_API_BASE_URL + '/' + bostadId, bostad);
    }

    deleteBostad(bostadId) {
        return axios.delete(HOME_API_BASE_URL + '/' + bostadId)
    }
}

export default new BostadService()