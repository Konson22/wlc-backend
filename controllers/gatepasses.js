// const { gatepassDb } = require("../dbs");
const { Gatepass } = require('../modules/modules');


const getAllGatepasses = async (req, res) => {
    try{
        const gatepass = await Gatepass.find({});
        res.json(gatepass)
        // gatepassDb.find({}, (err, result) => {
        //     if(err) throw err
        //     res.json(result);
        // })
    }catch(error){
        res.status(400).send(error);
    }
}


module.exports = { getAllGatepasses }
