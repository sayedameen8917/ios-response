const SubscriptionModal = require("./testModal");

const add = async (req, res) => {
    try {
        const data = await SubscriptionModal.create({
            data: req.body.data,
        });

        res.status(200).json(data)
    } catch (error) {
        console.log("Error: ", error)
    }
}

module.exports = {
    add
}

