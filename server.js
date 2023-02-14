const cors = require('cors');
const express = require('express');
let bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/auth');
const visitorRoute = require('./routes/visitors');
const recordsRoute = require('./routes/records');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({origin: ['https://wlc.onrender.com/', 'http://localhost:3000'], methods: ["GET", "POST"], credentials: true }));

app.use('/auth', authRoute);
app.use('/visitors', visitorRoute);
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

/*

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://konsonak:<password>@cluster0.uifpprf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

*/