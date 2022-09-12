const express = require('express');
const router = express.Router();

//REQUIRE CONTROLLERS - MIDDLEWARES - VALIDATIONS - MULTER - SESSION
const { uploadUsers } = require('../middlewares/uploadFilesUsers');
const userSessionCheck = require('../middlewares/userSessionCheck');
const { register, processRegister, login, processLogin, /* shopping, */ profile, update, logout } = require('../controllers/userController');
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator');

//USER REGISTER
router.get('/register', register);
router.post('/register', registerValidator, processRegister);

//USER LOGIN AND LOGOUT
router.get('/login', login);
router.post('/login', loginValidator, processLogin);
router.get('/logout', logout);

//USER PROFILE
router.get('/profile', userSessionCheck, profile);
router.put('/update/:id', uploadUsers.single('avatar'), update);

//MY SHOPPING
router.get('/shopping', shopping);


module.exports = router;


