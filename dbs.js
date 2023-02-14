const database = require('nedb');
// const bcrypt = require('bcryptjs')

const trucksDb = new database('./databases/trucksDb.db');
const vehiclesDb = new database('./databases/vehiclesDb.db');
const userDb = new database('./databases/userDb.db');

trucksDb.loadDatabase();
vehiclesDb.loadDatabase();
userDb.loadDatabase();


// const users = [
//     { name:'Kon', org:'VSS', pwd:'12345' }
// ]

// users.forEach(async user => {
//     const hashPass = await bcrypt.hash(user.pwd, 5);

//     const data = {...user, password:hashPass}
//     userDb.insert(data)
// })


module.exports = { trucksDb, vehiclesDb, userDb }