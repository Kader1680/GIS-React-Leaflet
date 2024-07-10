const express =  require("express")
const router = express.Router()
const Cities = require("../model/cities")


// get all product 
router.get("/c", async (req, res)=>{
    

    try {
        const allCities = await Cities.find()
        res.send(allCities)
        
    } catch (error) {
        console.log(error.message)
    }
})

module.exports = router;

