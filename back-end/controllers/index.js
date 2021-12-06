const router = require('express').Router();

const userRouter = require('./userController');
const carRouter = require('./carController')

router.use('/user', userRouter)
router.use('/car', carRouter);

module.exports = router;