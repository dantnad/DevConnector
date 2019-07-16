// 18.- Require Mongoose
const mongoose = require('mongoose');

// 19.- Define schema to be used
const UserSchema = new mongoose.Schema({
  // 20.- Add the properties parameters
  name: {
    type: String,
    required: true
  },
  // 20.- Add the properties parameters
  email: {
    type: String,
    required: true,
    unique: true
  },
  // 20.- Add the properties parameters
  password: {
    type: String,
    required: true,
  },
  // 20.- Add the properties parameters
  avatar: {
    type: String
  },
  // 20.- Add the properties parameters
  date: {
    type: Date,
    default: Date.now
  }
});

// 21.- Export to be used on users.js (go to /routes/api/users)
module.exports = User = mongoose.model('user', UserSchema);
