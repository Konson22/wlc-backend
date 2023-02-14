// const { visterDb } = require("../dbs");
const { Visitors } = require('../modules/modules');


const getVisitorsTest = async (req, res) => {
    try{
        const visitors = await Visitors.find({});
        res.json(visitors)
        // visterDb.find({}, (err, result) => {
        //     if(err) throw err
        //     res.json(result);
        // })
    }catch(error){
        res.status(400).send(error);
    }
}

const getVisitors = async (req, res) => {
    try{
        if(req.user.org === 'VSS' || req.user.org === 'WLC'){
            const visitors = await Visitors.find({});
            res.json(visitors)
        }else{
            const visitors = await Visitors.find({org_to_visit:req.user.org});
            res.json(visitors)
        }
        // if(req.user.org === 'VSS' || req.user.org === 'WLC'){
        //     visterDb.find({}, (err, result) => {
        //         if(err) throw err
        //         res.json(result);
        //     })
        // }else{
        //     visterDb.find({org_to_visit:req.user.org}, (err, result) => {
        //         if(err) throw err
        //         res.json(result);
        //     })
        // }
    }catch(error){
        res.status(400).send('internal Error...!');
    }
}

const registerVisitor = async (req, res) => {
    const date = new Date();

    const record = { ...req.body, date:date.toLocaleDateString(), time_in:date.toLocaleTimeString(), time_out:null, graud:req.user.name }
    try{
        const visitor = new Visitors(record);
        await visitor.save(visitor);
        res.status(201).json(visitor);
        
        // visterDb.insert(record, (err, result) => {
        //     if(err) throw err
        //     res.status(201).json(result);
        // })
    }catch(error){
        res.status(400).send(error);
    }
}
module.exports = { getVisitors, registerVisitor, getVisitorsTest }
