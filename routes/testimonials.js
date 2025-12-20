const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

/**
 * @route   GET /api/testimonials
 * @desc    Get all testimonials
 * @access  Public
 */
router.get('/', async (req, res) => {
    try {
        const testimonials = await Testimonial.find().sort({ date: -1 });
        res.status(200).json({
            success: true,
            count: testimonials.length,
            data: testimonials
        });
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
});

module.exports = router;
