import axios from 'axios';


const api = axios.create({
    baseURL: "http://localhost:3333"
});

export const useApi = () => ({
    validateToken: async (token, email) => {
        try {
            const response = await api.post('/validate', 
        { email },
        { 
            headers:
            { 'Authorization': `Basic ${token}`}
        });

        return response.data;

        } catch (error) {
            localStorage.setItem('authToken', "");
            localStorage.setItem('email', "");
            document.location.reload();
        }
        
    },
    signin: async (email, password) => {
        const response = await api.post('/auth', { email, password });
        return response.data;
    },
    logout: async () => {
        return { status: true };
        const response = await api.post('/logout');
        return response.data;
    }
});