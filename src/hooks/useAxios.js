import { BASE_URL } from "@/config";
import axios from "axios";

export default function useAxios() {
    // Add a request interceptor
    axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        return {
            ...config,
            baseURL: BASE_URL,
        };
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
        { synchronous: true, runWhen: () => { } }
    );

    // Add a response interceptor
    axios.interceptors.response.use(function onFulfilled(response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function onRejected(error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });
    return axios;
}
