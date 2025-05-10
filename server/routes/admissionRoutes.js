// routes/admissionRoutes.js
const express = require('express');
const router = express.Router();
const admissionController = require('../controllers/admissionController');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');

// Submit admission form
router.post('/', admissionController.submitAdmission);

// Get all admissions (admin only)
router.get('/', auth, admin, admissionController.getAllAdmissions);

// Update admission status (admin only)
router.patch('/:id/status', auth, admin, admissionController.updateAdmissionStatus);

module.exports = router;