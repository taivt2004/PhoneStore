import axios from 'axios';

const AxiosHelper = (token = '', contentType = 'application/json') => {
    const axiosInstance = axios.create({
        baseURL: 'http://192.168.214.225:3008'  
    });
    // cmd -----> ipconfig -----> IPv4 Address 
    axiosInstance.interceptors.request.use(
        async (config) => {
            // const token = '';
            config.headers = {
                'Authorization': `Bearer ${token}`,
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



