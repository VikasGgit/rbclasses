// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
const {upload} = require('../utils/upload');

// Add new student (admin only)
router.post('/', auth, admin, upload.single('image'), studentController.addStudent);

// Get all students
router.get('/', studentController.getAllStudents);

// Get top performers
router.get('/top', studentController.getTopPerformers);

// Update student (admin only)
router.patch('/:id', auth, admin, upload.single('image'), studentController.updateStudent);

// Delete student (admin only)
router.delete('/:id', auth, admin, studentController.deleteStudent);

module.exports = router;