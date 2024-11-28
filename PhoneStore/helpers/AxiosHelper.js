import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const AxiosHelper = (token = '', contentType = 'application/json') => {
    const axiosInstance = axios.create({
        baseURL: 'https://md18401-api.onrender.com'  
    });
    // cmd -----> ipconfig -----> IPv4 Address 
    axiosInstance.interceptors.request.use(
        async (config) => {
            config.headers = {
                'Authorization': token ? `Bearer ${token}` : '',
                'Accept': 'application/json',
                'Content-Type': contentType
            }
            return config;
        },
        err => Promise.reject(err)
    );
    
    axiosInstance.interceptors.response.use(
        res => res.data,
        err => Promise.reject(err)
    );
    return axiosInstance;
};

export default AxiosHelper;



