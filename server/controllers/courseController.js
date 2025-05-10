// controllers/courseController.js
const Course = require('../models/Course');
const { uploadToCloudinary } = require('../utils/upload');
const { sendNotificationEmail } = require('../utils/emailService');

// Add new course (admin only)
const addCourse = async (req, res) => {
  try {
    const { name, description, discountDescription, duration, fee, discount } = req.body;
    
    let image = {};
    if (req.file) {
      const result = await uploadToCloudinary(req.file.path);
      image = {
        public_id: result.public_id,
        url: result.secure_url
      };
    }

    const course = new Course({
      name,
      description,
      duration,
      fee,
      discountDescription,
      discount,
      image
    });

    await course.save();
    
    // Notify admin about new course
    // await sendNotificationEmail(
    //   'New Course Added', 
    //   `A new course "${name}" has been added to the system.`
    // );

    res.status(201).send(course);
  } catch (e) {
    res.status(400).send(e);
  }
};

// Get all courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({ isActive: true });
    res.send(courses);
  } catch (e) {
    res.status(500).send();
  }
};

// Get course by ID
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    
    if (!course) {
      return res.status(404).send();
    }

    res.send(course);
  } catch (e) {
    res.status(500).send();
  }
};

// Update course (admin only)
const updateCourse = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'description','discountDescription', 'duration', 'fee', 'discount', 'isActive'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const course = await Course.findById(req.params.id);
    
    if (!course) {
      return res.status(404).send();
    }

    updates.forEach(update => course[update] = req.body[update]);
    
    if (req.file) {
      const result = await uploadToCloudinary(req.file.path);
      course.image = {
        public_id: result.public_id,
        url: result.secure_url
      };
    }

    await course.save();
    res.send(course);
  } catch (e) {
    res.status(400).send(e);
  }
};

// Delete course (admin only - soft delete)
const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );
    
    if (!course) {
      return res.status(404).send();
    }

    res.send(course);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports = {
  addCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse
};