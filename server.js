require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const cookiePraser = require('cookie-parser');

const app = express();
app.use(express.json())
app.use(cookiePraser())
app.use(cors())
app.use(fileUpload({
    useTempFiles:true
}))

//Routes
app.use('/users',require('./routes/userRouter'))

//connect to mongodb
const URI = process.env.MONGODB_URL;
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log('connected to MongoDB')
}
)



const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log('server is running on port', PORT)
})