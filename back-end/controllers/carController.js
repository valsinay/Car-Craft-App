const router = require('express').Router();
const Car = require('../models/car');
const User = require('../models/user')



router.post('/createCar', (req, res, next) => {
    Car.create(req.body)
        .then(createdCar => {
        //   const newCar = Car.findOne({owner});
        //   User.updateOne({_id:user}, {$push:{cars:newCar._id}})
            res.send(createdCar)
        })
        .catch(next)
})

router.get('/carList', async (req,res) =>{
    await Car.find({},(err,result) =>{
        console.log("Car from db:", result)

        res.send(result)
    })
})



module.exports = router;