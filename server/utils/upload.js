// // utils/upload.js
// const cloudinary = require('../config/cloudinary');
// const fs = require('fs');

// const uploadImage = async (file) => {
//   try {
//     const result = await cloudinary.uploader.upload(file.path, {
//       folder: 'rb-classes',
//       width: 500,
//       height: 500,
//       crop: 'fill'
//     });
    
//     // Delete file from server
//     fs.unlinkSync(file.path);
    
//     return result;
//   } catch (error) {
//     throw new Error('Image upload failed');
//   }
// };

// module.exports = {
//   uploadImage
// };

// utils/upload.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cloudinary = require('../config/cloudinary');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // temp storage before cloudinary
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Async function to upload to Cloudinary
const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'rb-classes',
      width: 500,
      height: 500,
      crop: 'fill',
    });
    fs.unlinkSync(filePath); // Remove file after upload
    return result;
  } catch (err) {
    throw new Error('Cloudinary upload failed');
  }
};

module.exports = {
  upload,
  uploadToCloudinary,
};
