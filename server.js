const cors = require('cors');
const express = require('express');
let bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/auth');
const recordsRoute = require('./routes/records');
const mongoose = require('mongoose');

const app = express();
app.use(express.static('public'));
app.use(express.static('images'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({origin: ['https://wlc.onrender.com/', 'http://localhost:3000'], methods: ["GET", "POST"], credentials: true }));
// app.use(cors({origin: true, credentials: true }));

app.use('/auth', authRoute);
app.use('/records', recordsRoute);

const dbUrl = 'mongodb+srv://konifytech:konsonak@one-point-db.rgzqx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const connectionParam = {
  useNewUrlParser:true,
  useUnifiedTopology:true
}

const db = mongoose.connect(dbUrl, connectionParam).then(() => {
  console.log('mango db connected!')
}).catch(err => {
  console.log(err)
})

const PORT = process.env.PORT || 3001
app.listen(PORT);

