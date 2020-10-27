
const axiosInstance = axios.create({
    baseURL: 'http://192.168.0.26:4000/',
    timeout:5000
});



// const axiosInstance = axios.create({
//     baseURL: 'http://localhost:4000/',
//     timeout:5000
// });


export default axiosInstance;
