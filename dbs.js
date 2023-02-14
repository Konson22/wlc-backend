const database = require('nedb');
// const bcrypt = require('bcryptjs')

const trucksDb = new database('./databases/trucksDb.db');
const vehiclesDb = new database('./databases/vehiclesDb.db');
const userDb = new database('./databases/userDb.db');
const visterDb = new database('./databases/visterDb.db');

trucksDb.loadDatabase();
vehiclesDb.loadDatabase();
visterDb.loadDatabase();
userDb.loadDatabase();

// const date = new Date()

// const visitors = [
//     {
//         name:'Jmaes Juma',
//         id_no:'452158',
//         visitor_org:'WFP Juba',
//         contact:'0925623473',
//         reason:'Collect',
//         org:'UNICEFE',
//         person_to_visit:'Jastine Alison',
//         date:date.toLocaleDateString(),
//         time_in:date.toLocaleTimeString(),
//         time_out:null,
//         guard:'',
//         remark:'',
//     },
//     {
//         name:'Santo Marino',
//         id_no:'8457w',
//         visitor_org:'WFP Juba',
//         contact:'0925623473',
//         reason:'Collect',
//         org:'ICRC',
//         person_to_visit:'William ICRC',
//         date:date.toLocaleDateString(),
//         time_in:date.toLocaleTimeString(),
//         time_out:null,
//         guard:'',
//         remark:'',
//     },
//     {
//         name:'Samuel John',
//         id_no:'452158',
//         visitor_org:'World Helath Org',
//         contact:'0925623473',
//         reason:'Collect',
//         org:'CARE',
//         person_to_visit:'Jastine Alison',
//         date:date.toLocaleDateString(),
//         time_in:date.toLocaleTimeString(),
//         time_out:null,
//         guard:'',
//         remark:'',
//     }
// ]

// visterDb.insert(visitors)

module.exports = { trucksDb, vehiclesDb, visterDb, userDb }