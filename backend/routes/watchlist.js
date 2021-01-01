const router = require('express').Router()
const auth = require("../middleware/auth")
const WatchList = require('../models/watchListModel')

router.post("/", auth, async (req, res) => {
    try {
        const {item} = req.body


        if (!item)
        return res.status(400).json({msg: "Not all fields have been entered"})
        

        const newItem = new WatchList({
            item,
            userId: req.user
        })

        const savedItem = await newItem.save()
        res.json(savedItem)
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
})

router.get("/all", auth, async (req, res) => {
    try {
        const watchlist = await WatchList.find({userId: req.user})
        res.json(watchlist)
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
    
})

router.delete("/:id", auth, async (req, res) => {
    const watchListItem = await WatchList.findOne({userId: req.user, _id: req.params.id})
        if (!watchListItem)
            return res.status(400).json({msg: "No watchlist item found with the ID that belongs to the current logged in user."})
    const deletedWatchListItem = await WatchList.findByIdAndDelete(req.params.id)
    res.json(deletedWatchListItem)
})










module.exports = router