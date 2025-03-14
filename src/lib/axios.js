import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin`
});

if (process.env.NEXT_PUBLIC_BASE_URL.includes("ngrok")) {
    // Add a request interceptor
    axiosInstance.interceptors.request.use(function (config) {
        // Add the ngrok-skip-browser-warning header to the request
        config.headers['ngrok-skip-browser-warning'] = 'true';
        return config;
    }, function (error) {
        // Do something with request error        
        return Promise.reject(error);
    });
}

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
