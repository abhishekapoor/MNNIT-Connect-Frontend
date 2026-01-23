import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api"

const api = axios.create({
    baseURL: baseURL,
})

api.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");

    if(token){
        req.headers.Authorization = `Bearer ${token}`
    }
    return req;
})

// Event API endpoints
export const eventAPI = {
    // Get all events
    getAllEvents: async () => {
        try {
            const response = await api.get('/event');
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Create a new event
    createEvent: async (eventData) => {
        try {
            const response = await api.post('/event', eventData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Delete an event
    deleteEvent: async (eventId) => {
        try {
            const response = await api.delete(`/event/${eventId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default api;