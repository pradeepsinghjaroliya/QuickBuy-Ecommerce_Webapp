import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/ecom-webapp-453ea/us-central1/api'  //API the cloud function url
});

export default instance;
