const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose')

app.use(express.json({ extended: true }))
app.use(cors())

const PORT = 4005

async function start() {
    try {
        await mongoose.connect("mongodb://localhost:27017/github",
            { useNewUrlParser: true, useUnifiedTopology: true })

        console.log('mongodbga online ulandik')

        app.listen(PORT, () => console.log(`server ${PORT} da ishladi`))


    } catch (e) {
        console.log(`Server Error ${e}`);
    }
}

start()


