import axios from "axios";

const endpoints = {
    login: "/admin/auth/login",
    register: "/api/register",
    otp: "admin/auth/two-factor",
};

export const googleLogin = () => {
    const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const clientId = '1064859701522-smu7lvrhg63tfqeh9q867c82ehvjegmj.apps.googleusercontent.com';
    const redirectUri = 'https://harmanjeetsinghvirdi.com/Khozzo_Rooms_Api/api/index.php?route=google/atuh/login/info';
    const scope = 'email profile';
    const googleLoginUrl = `${googleAuthUrl}?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&access_type=offline`;

    window.location.href = googleLoginUrl;
};

const apiBaseUrl = import.meta.env.VITE_API_LIVEHOST;
const apiXHeaderKey = import.meta.env.VITE_API_KEY;
const apiClient = axios.create({
    baseURL: `${apiBaseUrl}`,
    headers: {
        "x-api-key": apiXHeaderKey,
        "Content-Type": "application/json",
    },
});

export const apiCalling = async (endpoint: string, body: any, customHeaders: Record<string, any> = {}) => {
    try {
        const response = await apiClient.post(endpoints?.login, body, {
            headers: customHeaders,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const twoFactorAuthenticate = async (body: any, customHeaders: Record<string, any> = {}) => {
    try {
        const response = await apiClient.post(endpoints?.otp, body, {
            headers: customHeaders,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};