const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const app = express()
const port = 8080

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

connectDB();

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.post('/ios-receipt', (req, res) => {
//     res.send(req.body)
// })

app.use('/ios-receipt', require('./testRoute'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})