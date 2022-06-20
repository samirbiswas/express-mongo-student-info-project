const express = require("express")
const app = express()
const { connect } = require('mongoose')
const router = require('./routes')

app.use(express.json())

app.use(router)

app.use((err, req, res, next) => {
    console.log(err)
    res.send(500).json({ message: "Server Error" })
})

connect('mongodb://localhost:27017/new-db')
    .then(() => {
        console.log("Database connected");
        app.listen(8000, () => {
            console.log("Server is running ...");
        });
    }).catch((err) => console.log(err))

