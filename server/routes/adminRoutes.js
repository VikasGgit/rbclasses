// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');

// Admin registration (superadmin only)
router.post('/register', auth, admin, adminController.registerAdmin);
// router.post('/register',  adminController.registerAdmin);

// Admin login
router.post('/login', adminController.loginAdmin);

// Get all admins (superadmin only)
router.get('/', auth, admin, adminController.getAllAdmins);

module.exports = router;