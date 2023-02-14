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

const VisitorsSchema = new mongoose.Schema({
  visitor_name:{
    type:String,
  },
  visitor_id:{
    type:String,
  },
  visitor_org:{
    type:String,
  },
  org_to_visit:{
    type:String,
  },
  contact:{
    type:String,
  },
  person_to_visit:{
    type:String,
  },
  date:{
    type:String,
  },
  time_in:{
    type:String,
  },
  time_out:{
    type:Boolean,
  },
  graud:{
    type:String,
  }
})

const Trucks = mongoose.model("Trucks", TruckSchema);
const Users = mongoose.model("Users", UsersSchema);
const Visitors = mongoose.model("Visitors", VisitorsSchema);

module.exports = { Visitors, Users, Trucks };