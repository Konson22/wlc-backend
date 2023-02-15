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

const GatepassSchema = new mongoose.Schema({
  org:{
    type:String,
  },
  department:{
    type:String,
  },
  destination:{
    type:String,
  },
  purpose:{
    type:String,
  },
  gatepass_no:{
    type:String,
  },
  taken_by:{
    type:String,
  },
  date:{
    type:String,
  },
  vehicle_no:{
    type:String,
  },
  issued_by:{
    type:String,
  },
  time_out:{
    type:String,
  },
  isValid:{
    type:Boolean,
  },
  items:{
    type:Array,
  },
  graud:{
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
const Gatepass = mongoose.model("Gatepass", GatepassSchema);
const Visitors = mongoose.model("Visitors", VisitorsSchema);

module.exports = { Visitors, Users, Gatepass, Trucks };