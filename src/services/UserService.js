import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:3000/users";

export class UserService {

    getUser() {
        return axios.get(USER_API_BASE_URL);
    }

    createUser(users) {
        return axios.post(USER_API_BASE_URL, users);
    }

    getUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    updateUser(users, userId) {
        return axios.put(USER_API_BASE_URL + '/' + userId, users);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId)
    }
}

export default new UserService()