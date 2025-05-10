// routes/teacherRoutes.js
const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
const {upload} = require('../utils/upload');

// Add new teacher (admin only)
router.post('/', auth, admin, upload.single('image'), teacherController.addTeacher);

// Get all teachers
router.get('/', teacherController.getAllTeachers);

// Get teacher by ID
router.get('/:id', teacherController.getTeacherById);

// Update teacher (admin only)
router.patch('/:id', auth, admin, upload.single('image'), teacherController.updateTeacher);

// Delete teacher (admin only)
router.delete('/:id', auth, admin, teacherController.deleteTeacher);

module.exports = router;