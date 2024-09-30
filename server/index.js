require("dotenv").config()
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT | 5000;
const router = require("./router/index");
const fileUpload = require("express-fileupload");



app.use(express.json());
app.use(fileUpload({}));
app.use(cors());
app.use("/api", router);

async function start() {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {

        })

        app.listen(PORT, () => {
            console.log(`Server has been started on port: ${PORT}`)
        })

    } catch(e) {
        console.log(`Ошибка при запуске сервере`, e)
    }
}

start();