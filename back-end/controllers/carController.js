const router = require('express').Router();
const Car = require('../models/car');
const User = require('../models/user')



router.post('/createCar', (req, res, next) => {
    Car.create(req.body)
        .then(createdCar => {
            console.log('Create car!')
        //   const newCar = Car.findOne({owner});
        //   User.updateOne({_id:user}, {$push:{cars:newCar._id}})
            res.send(createdCar)
        })
        .catch(next)
})

router.get('/carList', async (req,res) =>{
    console.log('Paramas')
    await Car.find({},(err,result) =>{
        res.send(result)
    })
})


router.get('/carList',  (req,res) =>{
    const id=req.params.ownerId;
    console.log('PARAMS--------------------------------->: ', req.params)      
     Car.find({ownerId:id}) 
        // res.send(result)
        .exec()
        .then(result=>{
            console.log('Paramas')
            res.json(result)
        })
        .catch(err=>console.log(err))
        console.log(result)
})

router.get('/account', async (req,res) => {
    const id=req.params.ownerId;
    console.log('PARAMS--------------------------------->: ', req.params)      
    //  Car.find({ownerId:id}) 
    //     // res.send(result)
    //     .exec()
    //     .then(result=>{
    //         console.log('Paramas')
    //         res.json(result)
    //     })
    //     .catch(err=>console.log(err))
    //     console.log(result)
    await Car.find({},(err,result) =>{
        res.send(result)
    })
})
    
router.get(`/details/:carId`, async (req,res)=>{
    const id=req.params.carId;
   await Car.findById(id)
    .exec()
    .then(doc=>{
        res.status(200).json(doc)
    }).catch(err=>{console.log(err)})

})

router.put(`/edit/:carId`, async (req,res) =>{
    const id=req.params.carId;
  await  Car.updateOne({_id:id},req.body)
    .then(doc=>{
        res.status(200).json(doc)
    })
        .catch(err=>console.log(err))
    })

router.delete('/delete/:carId',async (req,res)=>{
    const id=req.params.carId;
    await Car.deleteOne({_id:id}  )
    .then(doc=>{
        res.status(200).json(doc)
    })
    .catch(err=>console.log(err))
})

module.exports = router;