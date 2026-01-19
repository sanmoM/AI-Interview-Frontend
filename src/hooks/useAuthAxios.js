import { BASE_URL } from "@/config";
import axios from "axios";
import { useRouter } from "next/navigation"; // ✅ Next.js 13+ navigation
import { useSelector } from "react-redux";

export default function useAuthAxios() {
  const router = useRouter();
  const token = useSelector((state) => state.auth.token);

  // Request interceptor
  axios.interceptors.request.use(
    function (config) {
      return {
        ...config,
        baseURL: BASE_URL,
        headers: {
          Authorization: `Bearer ${token || ""}`,
          ...config.headers, // merge headers safely
        },
        // withCredentials: true,
      };
    },
    function (error) {
      return Promise.reject(error);
    },
    { synchronous: true },
  );

  // Response interceptor
  axios.interceptors.response.use(
    function onFulfilled(response) {
      return response;
    },
    function onRejected(error) {
      if (error?.response?.status === 401) {
        if (error.config.url === "/my-personal-info") {
          return Promise.reject(error);
        }
        // ✅ Clear token (optional, but recommended)
        localStorage.removeItem("token");

        // ✅ Redirect to login
        router.push("/signin");
      }
      return Promise.reject(error);
    },
  );

  return axios;
}
