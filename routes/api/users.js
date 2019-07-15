const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator')

//@route    GET api/users
//@dest     Register User
//@access   Public
router.post('/', [
    check('name', 'name is required').not().isEmpty(),
    check('email', 'Please include an email').isEmail(),
    check('password', 'Please enter a password of 6 or more characters').isLength({ min: 6 })
  ],
  (req, res)=>{
      console.log(req.body);
      const errors = validationResult(req);
      if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
      }

      res.send('User Route')
    }
);

module.exports = router;
