const { createToken } = require('../middlewares/jwt');
const bcryptjs = require('bcryptjs');
// const { userDb } = require("../dbs");
const { Users } = require('../modules/modules');

// authenticate access token
async function authUser(req, res){
    try{
        res.json(req.user)
    }catch(error){
        res.status(404).send(error)
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await Users.find({});
        res.json(users)
    } catch (error) {
        console.log(error)
    }
}

const logout = (req, res) => {
    res.clearCookie("WLC-ACCESS-KEY");
    res.send('logedout')
    res.end()
}


const loginUser = async (req, res) => {
    try {
        const user = await Users.find({org:req.body.name})
    
        if(user.length === 0){
            res.status(404).send('Wrong user name')
        }else{
            const { name, org, _id, password } = user[0]
            const verifiedPass = await bcryptjs.compare(req.body.password, password);
            if(!verifiedPass){
                return res.status(403).send('Wrong password')
            }else{
                const profile = { name, org, _id }
                const ACCESS_TOKEN = await createToken(profile)
                // res.cookie('WLC-ACCESS-KEY', ACCESS_TOKEN, { maxAge: 6000 * 60 * 60 * 60, sameSite:'none', httpOnly: true });
                res.cookie('WLC-ACCESS-KEY', ACCESS_TOKEN, {
                    expires: new Date(Date.now() + (3600 * 1000 * 24 * 180 * 1)),
                    httpOnly: true,
                    sameSite: "none",
                    secure: 'false',
                });
                res.status(200).json(profile)
            }
        }
    
        // userDb.find({org:req.body.name}, async (err, results) => {
        //     if(err) throw err
        //     if(results.length === 0){
        //         res.status(404).send('Wrong user name')
        //     }else{
        //         const { name, org, _id, password } = results[0]
                
        //         const verifiedPass = await bcryptjs.compare(req.body.password, password);
        //         if(!verifiedPass){
        //             return res.status(403).send('Wrong password')
        //         }else{
        //             const profile = { name, org, _id }
        //             const ACCESS_TOKEN = await createToken(profile)
        //             res.cookie('WLC-ACCESS-KEY', ACCESS_TOKEN, { maxAge: 6000 * 60 * 60 * 60, SameSite:'None', httpOnly: true });
        //             res.status(200).json(profile)
        //         }
        //     }
        // })
    } catch (error) {
        
    }
}
module.exports = { authUser, loginUser, getAllUsers, logout }