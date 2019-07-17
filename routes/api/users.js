// 13.- Initialize Express and router for mini-app
const express = require('express');
const router = express.Router();
// 22.- Add Express-Validator to check API Calls
const { check, validationResult } = require('express-validator')

// 17.- Get user schema from models folder (Go to main foler /models)
const User = require('../../models/User');

// 14.- Add a description to the API endpoint
//@route    GET api/users
//@dest     Register User
//@access   Public

// =============================================================================
// Register user
// =============================================================================
// 15.- Create route handlers
router.post('/', [
  // ===========================================================================
  // Check parameters
  // ===========================================================================
    // 23.- Configure check parameters
    check('name', 'name is required').not().isEmpty(),
    // 23.- Configure check parameters
    check('email', 'Please include an email').isEmail(),
    // 23.- Configure check parameters
    check('password', 'Please enter a password of 6 or more characters').isLength({ min: 6 })
  ],
  (req, res)=>{
    // =========================================================================
    // Request-Response handling
    // =========================================================================
      // 24.- Use BodyParser (now included on Express natively) to get the body
      console.log(req.body);
      // 25.- Pass request through validator to check
      const errors = validationResult(req);
      // =======================================================================
      // Failure handling
      // =======================================================================
      // 26.- Check wether the call was succesful or not
      if(!errors.isEmpty()){
        // 27.- In case there was a problem return a 400 status with the errors
        return res.status(400).json({ errors: errors.array() });
      }

      // =======================================================================
      // Check wether a user exists already
      // =======================================================================
      // 28.- Use destructuring to get request's body variables
      const { name, email, password } = req.body;

      // =======================================================================
      // Get users gravatar
      // =======================================================================

      // =======================================================================
      // Encrypt password
      // =======================================================================

      // =======================================================================
      // Return JSONwebtoken
      // =======================================================================

      // 29.- Send API call response
      res.send('User Route')
    }
);

// 16.- Export routes to be used by main app
module.exports = router;
