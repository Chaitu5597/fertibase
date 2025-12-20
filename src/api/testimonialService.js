import { api } from './api';

/**
 * Testimonial Service - All testimonial-related API calls
 */
const testimonialService = {
    /**
     * Get all testimonials from the API
     * @returns {Promise<Array>} - Array of testimonials
     */
    async getAllTestimonials() {
        try {
            const response = await api.get('/testimonials');

            // Handle different response structures (standardizing on data array)
            const testimonials = response.data || response.testimonials || response;

            if (Array.isArray(testimonials)) {
                return testimonials;
            }

            return [];
        } catch (error) {
            console.error('Error fetching testimonials:', error);
            throw error;
        }
    }
};

export default testimonialService;
