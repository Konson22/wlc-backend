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
}


// CLEAR FOR DEPATRUE TRUCK
const clearController = async (req, res) => {
    const result = await Trucks.update({_id:req.body.id}, {$set:{'cleared': true}})
    if(result.ok === 1){
        const data = await Trucks.find({client:req.body.org})
        res.json(data)
    }
}

module.exports = { getAllTestRecordsController, checkOutController, clearController, getAllRecordsController, addTruckRecordController }