// const { trucksDb } = require("../dbs");
const { Trucks } = require("../modules/modules");


const getAllTestRecordsController = async (req, res) => {
    try {
        const trucks = await Trucks.find({});
        res.json(trucks)
        // trucksDb.find({}, (err, result) => {
        //     res.json(result)
        // })
    } catch (error) {
        console.log(error)
    }
}

const getAllRecordsController = async (req, res) => {
    try {
        console.log(req.body.org)
        if(req.body.org === 'VSS' || req.body.org === 'WLC'){
            const trucks = await Trucks.find({});
            res.json(trucks)
        }else{
            const trucks = await Trucks.find({client:req.body.org});
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
            plate_no:req.body.data.plate_no.toUpperCase(),
            driver_name:req.body.data.driver_name.toUpperCase(),
            company:req.body.data.company.toUpperCase(),
            client:req.body.data.client.toUpperCase(),
            contact:req.body.data.contact.toUpperCase(),
            purpuse:req.body.data.purpuse.toUpperCase(),
            arrival:{
                date:date.toLocaleDateString(),
                time:date.toLocaleTimeString(),
                guard:req.body.user.toUpperCase()
            },
            cleared:false,
            dispatch:null,
        }

        const truck = new Trucks(record);
        await truck.save(truck);
        res.status(201).json(truck);
        // trucksDb.insert(record, (err, result) => {
        //     if(err) throw err
        //     res.status(201).json(result);
        // })
    } catch (error) {
        res.status(400).send(error)
    }
}


// CHECK OUT TRUCK
const checkOutController = async (req, res) => {

    const date = new Date()

    const depature = {
        date:date.toLocaleDateString(),
        time:date.toLocaleTimeString(),
        guard:req.body.user.toUpperCase()
    }
    const result = await Trucks.update({_id:req.body.id}, {$set:{'dispatch': depature}})
    if(result.ok === 1){
        const data = await Trucks.find({})
        res.json(data)
    }
    
    // trucksDb.update({_id:req.body.id}, {$set:{'dispatch': depature}}, (err, result) => {
    //     if(err) throw err
    //     trucksDb.find({}, (err, data) => {
    //         if(err) throw err
    //         res.json(data)
    //     })
    // })
}


// CLEAR FOR DEPATRUE TRUCK
const clearController = async (req, res) => {
    const result = await Trucks.update({_id:req.body.id}, {$set:{'cleared': true}})
    if(result.ok === 1){
        const data = await Trucks.find({client:req.body.org})
        res.json(data)
    }
    // trucksDb.update({_id:req.body.id}, {$set:{'cleared': true}}, (err, result) => {
    //     if(err) throw err
    //     trucksDb.find({client:req.user.org}, (err, data) => {
    //         if(err) throw err
    //         res.json(data)
    //     })
    // })
}

module.exports = { getAllTestRecordsController, checkOutController, clearController, getAllRecordsController, addTruckRecordController }