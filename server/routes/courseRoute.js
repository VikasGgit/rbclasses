// routes/courseRoutes.js
const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
const {upload }= require('../utils/upload');

// Add new course (admin only)
router.post('/', auth, admin, upload.single('image'), courseController.addCourse);

// Get all active courses
router.get('/', courseController.getAllCourses);

// Get course by ID
router.get('/:id', courseController.getCourseById);

// Update course (admin only)
router.patch('/:id', auth, admin, upload.single('image'), courseController.updateCourse);

// Delete course (admin only - soft delete)
router.delete('/:id', auth, admin, courseController.deleteCourse);

module.exports = router;