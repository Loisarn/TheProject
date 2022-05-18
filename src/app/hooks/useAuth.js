import { useContext } from 'react';
import AuthContext from '../../context/AuthProvider.js';

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;