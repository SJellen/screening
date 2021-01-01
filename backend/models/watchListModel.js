const mongoose = require('mongoose')

const Schema = mongoose.Schema

const watchListSchema = new Schema({
    
    item: {
        type: Array,
        required: true
    },
    userId: {
        type: String,
        required: true
    }

},  {timestamps: true,})

const WatchList = mongoose.model('WatchList', watchListSchema)

module.exports = WatchList