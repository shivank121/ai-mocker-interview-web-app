export const isAuthenticated = (): boolean => {
    try {
        // Retrieve token from localStorage
        const token = localStorage.getItem('authToken');
        return !!token;
    } catch (error) {
        console.error('Error retrieving token:', error);
        return false;
    }
};
