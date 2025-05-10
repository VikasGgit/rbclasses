// controllers/teacherController.js
const Teacher = require('../models/Teacher');
const { uploadImage } = require('../utils/upload');
const { sendNotificationEmail } = require('../utils/emailService');

// Add new teacher (admin only)
const addTeacher = async (req, res) => {
  try {
    const { name, qualification, specialization, experience, bio, socialMedia } = req.body;
    
    let image = {};
    if (req.file) {
      const result = await uploadImage(req.file);
      image = {
        public_id: result.public_id,
        url: result.secure_url
      };
    }

    const teacher = new Teacher({
      name,
      qualification,
      specialization,
      experience,
      bio,
      socialMedia,
      image
    });

    await teacher.save();
    
    // Notify admin about new teacher
    await sendNotificationEmail(
      'New Teacher Added', 
      `A new teacher "${name}" has been added to the system.`
    );

    res.status(201).send(teacher);
  } catch (e) {
    res.status(400).send(e);
  }
};

// Get all teachers
const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find({});
    res.send(teachers);
  } catch (e) {
    res.status(500).send();
  }
};

// Get teacher by ID
const getTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    
    if (!teacher) {
      return res.status(404).send();
    }

    res.send(teacher);
  } catch (e) {
    res.status(500).send();
  }
};

// Update teacher (admin only)
const updateTeacher = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'qualification', 'specialization', 'experience', 'bio', 'socialMedia'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const teacher = await Teacher.findById(req.params.id);
    
    if (!teacher) {
      return res.status(404).send();
    }

    updates.forEach(update => teacher[update] = req.body[update]);
    
    if (req.file) {
      const result = await uploadImage(req.file);
      teacher.image = {
        public_id: result.public_id,
        url: result.secure_url
      };
    }

    await teacher.save();
    res.send(teacher);
  } catch (e) {
    res.status(400).send(e);
  }
};

// Delete teacher (admin only)
const deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id);
    
    if (!teacher) {
      return res.status(404).send();
    }

    res.send(teacher);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports = {
  addTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher
};