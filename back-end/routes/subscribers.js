const express = require('express')
const subscriber = require('../models/subscriber')
const router = express.Router()
const Subscriber = require('../models/subscriber')
//Fetch all 
router.get('/', async (req, res) => {
 try{
    const subscribers = await Subscriber.find()
    res.json(subscribers)
 }catch (err){
  res.status(500).json({message: err.message})
 }
})

//Fetch  one 
router.get('/:id', getSubscriber, (req, res)=> {
    res.json(res.subscriber)
})
//Create one
router.post('/', async (req, res)=> {
 const subscriber = new Subscriber({
  forename: req.body.forename,
  subscribedToChannel: req.body.subscribedToChannel
 })
 try{
    const newSubscriber = await subscriber.save()
    res.status(201).json(newSubscriber)
 }catch (err){
  res.status(400).json({message: err.message})
 }
})
//Update one 
router.patch('/:id', getSubscriber, async (req, res)=> {
  if (req.body.forename != null){
    res.subscribers.forename = req.body.forename
  }
  if (req.body.subscribedToChannel != null){
    res.subscribers.subscribedToChannel = req.body.subscribedToChannel
  }
  try {
    const updatedSubscriber = await res.subscriber.save()
    res.json(updatedSubscriber)
  } catch (err){
      res.status(400).json({message: err.message})
      
  }

})
//Delete one
router.delete('/:id', getSubscriber, async (req, res)=> {
     try{
      await res.subscriber.remove()
      res.json({message: "User Deleted"})

     }catch (err) {
      res.status(500).json({message: err.message})
     }
})

async function getSubscriber(req, res, next){
  let subscriber
    try {
      subscriber = await Subscriber.findById(req.params.id)
      if (subscriber == null){
        return res.status(404).json({message: "Cannot find user"})
      }
    } catch (err) {
      return res.status(500).json({message: err.message})

    }
    res.subscriber = subscriber
    next()
}

module.exports = router 