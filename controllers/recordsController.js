const { trucksDb } = require("../dbs");
const { Trucks } = require("../modules/modules");


const getAllTestRecordsController = async (req, res) => {
    try {
        const trucks = await Trucks.find({});
        res.json(trucks)
    } catch (error) {
        console.log(error)
    }
}

const getAllRecordsController = async (req, res) => {
    try {
        if(req.user.org === 'VSS' || req.user.org === 'WLC'){
            const trucks = await Trucks.find({});
            res.json(trucks)
        }else{
            const trucks = await Trucks.find({client:req.user.org});
            res.json(trucks)
        }
        // if(req.user.org === 'VSS' || req.user.org === 'WLC'){
        //     trucksDb.find({}, (err, result) => {
        //         res.json(result)
        //     })
        // }else{
        //     trucksDb.find({client:req.user.org}, (err, result) => {
        //         res.json(result)
        //     })
        // }
    } catch (error) {
        
    }
}

const addTruckRecordController = async (req, res) => {
    try {
        const date = new Date()
    
        const record = {
            plate_no:req.body.plate_no.toUpperCase(),
            driver_name:req.body.driver_name.toUpperCase(),
            company:req.body.company.toUpperCase(),
            client:req.body.client.toUpperCase(),
            contact:req.body.contact.toUpperCase(),
            purpuse:req.body.purpuse.toUpperCase(),
            arrival:{
                date:date.toLocaleDateString(),
                time:date.toLocaleTimeString(),
                guard:req.user.name.toUpperCase()
            },
            cleared:false,
            dispatch:null,
        }
        trucksDb.insert(record, (err, result) => {
            if(err) throw err
            res.status(201).json(result);
        })
    } catch (error) {
        res.status(400).send(error)
    }
}


// CHECK OUT TRUCK
const checkOutController = (req, res) => {

    const date = new Date()

    const depature = {
        date:date.toLocaleDateString(),
        time:date.toLocaleTimeString(),
        guard:req.user.name.toUpperCase()
    }
    
    trucksDb.update({_id:req.body.id}, {$set:{'dispatch': depature}}, (err, result) => {
        if(err) throw err
        trucksDb.find({}, (err, data) => {
            if(err) throw err
            res.json(data)
        })
    })
}


// CLEAR FOR DEPATRUE TRUCK
const clearController = (req, res) => {
    trucksDb.update({_id:req.body.id}, {$set:{'cleared': true}}, (err, result) => {
        if(err) throw err
        trucksDb.find({client:req.user.org}, (err, data) => {
            if(err) throw err
            res.json(data)
        })
    })
}

module.exports = { getAllTestRecordsController, checkOutController, clearController, getAllRecordsController, addTruckRecordController }