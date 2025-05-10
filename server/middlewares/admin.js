// middlewares/admin.js
const auth = require('./auth');

const admin = async (req, res, next) => {
  auth(req, res, () => {
    if (req.admin.role === 'superadmin' || req.admin.role === 'admin') {
      next();
    } else {
      res.status(403).send({ error: 'Access denied.' });
    }
  });
};

module.exports = admin;