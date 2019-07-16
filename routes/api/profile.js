// 13.- Initialize Express and router for mini-app
const express = require('express');
const router = express.Router();

// 14.- Add a description to the API endpoint
//@route    GET api/Profile
//@dest     Test route
//@access   Public

// 15.- Create route handlers
router.get('/', (req, res)=>{
  res.send('Profile Route')
});

// 16.- Export routes to be used by main app
module.exports = router;
