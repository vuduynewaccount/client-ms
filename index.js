let express = require('express');
let app = new express()
var bodyParser = require('body-parser')
var path = require('path');
var public = path.join(__dirname, 'public');
app.set("view engine", "ejs")
app.use('/public', express.static(public))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var cors = require('cors')
app.use(cors())
//connect to db
require('dotenv').config({ path: 'app.env' })
let mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI)

let router=require("./router/index")
app.use("/",router)

app.listen(process.env.PORT || 80, () => {
  console.log('server running');
})

