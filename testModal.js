const mongoose = require('mongoose')

const subscriptionResponse = mongoose.Schema(
    {
        data: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('subscription-response', subscriptionResponse)