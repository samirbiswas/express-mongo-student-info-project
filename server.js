const express = require("express")
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const { connect } = require('mongoose')
const router = require('./routes')
const app = express()

dotenv.config();
app.use(express.json())
app.use(cors());
app.use(morgan("dev"));

app.use(router)

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: err && err.message || "Server Error" })
})

connect('mongodb://localhost:27017/new-db')
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => console.log(err))

const PORT = process.env.PORT || 3005
app.listen(PORT, () => {
    console.log(`Server is running port ${PORT}`);
});