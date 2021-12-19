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
        res.send(result)
    })
})

router.get(`/details/:carId`,(req,res)=>{
    const id=req.params.carId;
    Car.findById(id)
    .exec()
    .then(doc=>{
        res.status(200).json(doc)
    }).catch(err=>{console.log(err)})

})

router.put(`/edit/:carId`,(req,res) =>{
    const id=req.params.carId;
    Car.updateOne({_id:id},req.body)
    .then(doc=>{
        res.status(200).json(doc)
    })
        .catch(err=>console.log(err))
    })

router.delete('/delete/:carId', (req,res)=>{
    const id=req.params.carId;
    Car.deleteOne({_id:id}  )
    .then(doc=>{
        res.status(200).json(doc)
    })
    .catch(err=>console.log(err))
})

module.exports = router;