import {jwtDecode} from 'jwt-decode';

const isTokenExpired = (token) => {
    try {
        const {exp}  = jwtDecode(token);
        if (!exp) return true;

        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
        return currentTime > exp;
    } catch (error) {
        console.error("Failed to decode token:", error);
        return true;
    }
};

export default isTokenExpired;