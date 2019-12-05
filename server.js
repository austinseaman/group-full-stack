const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 8080

app.use(express.json())

app.use("/classifiedItems", require('./routes/itemsRouter'))


mongoose.connect('mongodb://localhost:27017/storedb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log(`Connected to the DB`))
    .catch(() => console.log(err))

app.listen(PORT, () => {
    console.log(`V*Trade server is running on port ${PORT}`)
})