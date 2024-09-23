const express = require('express');
const router = express.Router();
const { createUser, updateUser, loginUser, deleteUser, forgetPassword, getToken, passwordResetFinally } = require('../controllers/userController');
const checkToken = require('../middleware/checkToken');

router.post('/create',createUser)
router.post('/login', loginUser)
router.put('/update/:_id',checkToken ,updateUser)
router.delete('/delete/:_id',checkToken,deleteUser) 
router.post('/forget-password',forgetPassword)
router.get('/reset-password/:token',getToken)
router.post('/reset-password/:token',passwordResetFinally)

module.exports = router