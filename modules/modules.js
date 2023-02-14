const mongoose = require("mongoose");

const TruckSchema = new mongoose.Schema({
  plate_no: {
    type: String,
    required: true,
  },
  driver_name: {
    type: String,
    default: 0
  },
  contact:{
    type:String
  },
  company:{
    type:String,
  },
  client:{
    type:String,
  },
  purpuse:{
    type:String
  },
  arrival:{
    type:Object,
  },
  cleared:{
    type:Boolean,
  },
  dispatch:{
    type:Object,
  },
});


const UsersSchema = new mongoose.Schema({
  name:{
    type:String,
  },
  org:{
    type:String,
  },
  password:{
    type:String,
  }
})

const Trucks = mongoose.model("Trucks", TruckSchema);
const Users = mongoose.model("Users", UsersSchema);

module.exports = { Users, Trucks };