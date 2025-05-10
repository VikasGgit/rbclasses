// controllers/studentController.js
const Student = require('../models/Student');
const { uploadToCloudinary } = require('../utils/upload');
const { sendNotificationEmail } = require('../utils/emailService');

// Add new student (admin only)
const addStudent = async (req, res) => {
  try {
    const { name, email, phone, testimonial, isTopPerformer, performanceDetails } = req.body;
    
    let image = {};
    if (req.file) {
      const result = await uploadToCloudinary(req.file.path);
      image = {
        public_id: result.public_id,
        url: result.secure_url
      };
    }

    const student = new Student({
      name,
      email,
      phone,
      image,
      testimonial,
      isTopPerformer,
      performanceDetails
    });

    await student.save();
    
    if (isTopPerformer) {
      await sendNotificationEmail(
        'New Top Performer Added', 
        `A new top performer ${name} has been added to the system.`
      );
    }

    res.status(201).send(student);
  } catch (e) {
    res.status(400).send(e);
  }
};

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    res.send(students);
  } catch (e) {
    res.status(500).send();
  }
};

// Get top performers
const getTopPerformers = async (req, res) => {
  try {
    const performers = await Student.find({ isTopPerformer: true });
    res.send(performers);
  } catch (e) {
    res.status(500).send();
  }
};

// Update student
const updateStudent = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'phone', 'testimonial', 'isTopPerformer', 'performanceDetails'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const student = await Student.findById(req.params.id);
    
    if (!student) {
      return res.status(404).send();
    }

    updates.forEach(update => student[update] = req.body[update]);
    
    if (req.file) {
      const result = await uploadToCloudinary(req.file.path);
      student.image = {
        public_id: result.public_id,
        url: result.secure_url
      };
    }

    await student.save();
    res.send(student);
  } catch (e) {
    res.status(400).send(e);
  }
};

// Delete student
const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    
    if (!student) {
      return res.status(404).send();
    }

    res.send(student);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports = {
  addStudent,
  getAllStudents,
  getTopPerformers,
  updateStudent,
  deleteStudent
};