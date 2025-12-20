const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    videoUrl: {
        type: String,
        required: true
    },
    imageSrc: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: true
    },
    season: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
