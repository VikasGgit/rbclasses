// controllers/admissionController.js
const Admission = require('../models/Admission');
const Course = require('../models/Course');
const { sendNotificationEmail } = require('../utils/emailService');

// Submit admission form
const submitAdmission = async (req, res) => {
  try {
    const admission = new Admission(req.body);
    await admission.save();
    
    // Get course details for notification
    const course = await Course.findById(admission.course);
    
    // Send notification email to admin
    await sendNotificationEmail(
      'New Admission Request', 
      `A new admission request has been received for ${course.name} from ${admission.studentName}.`
    );

    res.status(201).send(admission);
  } catch (e) {
    res.status(400).send(e);
  }
};

// Get all admissions (admin only)
const getAllAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.find({}).populate('course');
    res.send(admissions);
  } catch (e) {
    res.status(500).send();
  }
};

// Update admission status (admin only)
const updateAdmissionStatus = async (req, res) => {
  const { status } = req.body;
  
  if (!['pending', 'approved', 'rejected'].includes(status)) {
    return res.status(400).send({ error: 'Invalid status' });
  }

  try {
    const admission = await Admission.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    ).populate('course');
    
    if (!admission) {
      return res.status(404).send();
    }

    res.send(admission);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = {
  submitAdmission,
  getAllAdmissions,
  updateAdmissionStatus
};