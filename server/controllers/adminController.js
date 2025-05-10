// controllers/adminController.js
const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const { sendWelcomeEmail } = require('../utils/emailService');

// Admin registration (only by superadmin)
const registerAdmin = async (req, res) => {
  // if (req.admin.role !== 'superadmin') {
  //   return res.status(403).send({ error: 'Only superadmin can register new admins.' });
  // }

  const { name, email, password, role } = req.body;

  try {
    const admin = new Admin({ name, email, password, role });
    await admin.save();
    
    // Send welcome email with credentials
    // await sendWelcomeEmail(admin.email, admin.name, password);

    res.status(201).send({ admin });
  } catch (e) {
    res.status(400).send(e);
  }
};

// Admin login
const loginAdmin = async (req, res) => {
  try {

    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).send({ error: 'Invalid credentials' });
    } 
   

    const isMatch = await admin.comparePassword(password);

    if (!isMatch) {
      return res.status(400).send({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ _id: admin._id.toString() }, process.env.JWT_SECRET);
    // admin.tokens = admin.tokens.concat({ token });
    // await admin.save();
  
    res.send({ admin, token });
  } catch (e) {
    res.status(400).send(e);
  }
};

// Get all admins (only superadmin)
const getAllAdmins = async (req, res) => {
  if (req.admin.role !== 'superadmin') {
    return res.status(403).send({ error: 'Only superadmin can view all admins.' });
  }

  try {
    const admins = await Admin.find({});
    res.send(admins);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports = {
  registerAdmin,
  loginAdmin,
  getAllAdmins
};