const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 8080

app.use(express.json())

app.use("/camping", require('./routes/campingRouter'))
// app.use("/cycling", require('./routes/cyclingRouter'))
// app.use("/fishing", require('./routes/fishingRouter'))
// app.use("/skiing", require('./routes/skiingRouter'))

mongoose.connect('mongodb://localhost:27017/VTradeDB',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Connected to the DB`))
.catch(() => console.log(err))

app.listen(PORT, () => {
    console.log(`V*Trade server is running on port ${PORT}`)
})