import { API_KEY } from '../utils/constants';

export const fetchData = async (url, params) => {
    const fullUrl = `${url}?${params}&appid=${API_KEY}`;
    try {
        const rawResponse = await fetch(fullUrl);

        if (!rawResponse.ok) {
        throw new Error('Failed to fetch data');
        }

        const response = await rawResponse.json();
        return response;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
};