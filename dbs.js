const database = require('nedb');
// const bcrypt = require('bcryptjs')

const trucksDb = new database('./databases/trucksDb.db');
const vehiclesDb = new database('./databases/vehiclesDb.db');
const userDb = new database('./databases/userDb.db');
const visterDb = new database('./databases/visterDb.db');
const gatepassDb = new database('./databases/gatepassDb.db');

trucksDb.loadDatabase();
vehiclesDb.loadDatabase();
visterDb.loadDatabase();
userDb.loadDatabase();
gatepassDb.loadDatabase();

// const date = new Date()

// const gatepasses = [
//     {
//         org:'ICRC',
//         department:'Fleeds',
//         destination:'Deligation',
//         purpose:'Wash',
//         gatepass_no:Date.now(),
//         taken_by:'James Dut',
//         vehicle_no:'17541',
//         issued_by:'William Deng',
//         graud:'Joseph Bol',
//         date:date.toLocaleDateString(),
//         time_out:null,
//         isValid:false,
//         items:[
//             { item:'File folder', unit:'pcs', qty:20 },
//             { item:'Tyres', unit:'pcs', qty:4 },
//             { item:'engine oil', unit:'pcs', qty:5 },
//             { item:'pencil', unit:'box', qty:5 },
//         ]
//     },
//     {
//         org:'UNICEFE',
//         department:'Education',
//         destination:'Boor',
//         purpose:'Decuation',
//         gatepass_no:Date.now(),
//         taken_by:'Lomoro Samuel',
//         vehicle_no:'UN457 SSD',
//         issued_by:'Samson Deng',
//         graud:'Joseph Bol',
//         date:date.toLocaleDateString(),
//         time_out:null,
//         isValid:false,
//         items:[
//             { item:'File folder', unit:'pcs', qty:20 },
//             { item:'Tyres', unit:'pcs', qty:4 },
//             { item:'engine oil', unit:'pcs', qty:5 },
//         ]
//     },
//     {
//         org:'ICRC',
//         department:'Workshop',
//         destination:'Juba',
//         purpose:'Repair',
//         gatepass_no:Date.now(),
//         taken_by:'James Dut',
//         vehicle_no:'17541',
//         issued_by:'William Deng',
//         graud:'Joseph Bol',
//         date:date.toLocaleDateString(),
//         time_out:null,
//         isValid:false,
//         items:[
//             { item:'File folder', unit:'pcs', qty:20 },
//             { item:'Tyres', unit:'pcs', qty:4 },
//             { item:'engine oil', unit:'pcs', qty:5 },
//             { item:'pencil', unit:'box', qty:5 },
//         ]
//     }
// ]

// gatepassDb.insert(gatepasses)

module.exports = { trucksDb, gatepassDb, vehiclesDb, visterDb, userDb }