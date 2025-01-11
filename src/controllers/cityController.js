const { CityService } = require('../services/index');

const cityServiceObject = new CityService();

const create = async (req , res) => {
    try {
        const city = await cityServiceObject.createCity(req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : "succesfully created a City",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "not able to create a city",
            err : error
        })
    }
}


const get = async (req , res) => {
    try {
        const city = await cityServiceObject.getCity(req.params.id);
        return res.status(200).json({
            data : city,
            success : true,
            message : "succesfully fetched a City",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "not able to fetch the city",
            err : error
        })
    }
}


const update = async (req , res) => {
    try {
        const city = await cityServiceObject.updateCity(req.params.id , req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : "succesfully updated a City",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "not able to update the city",
            err : error
        })
    }
}


const destroy = async (req , res) => {
    try {
        const response = await cityServiceObject.deleteCity(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : "succesfully deleted a City",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "not able to delete the city",
            err : error
        })
    }
}
const getAll = async (req , res) => {
    try {
        const cities = await cityServiceObject.getAllCities(req.query);
        return res.status(200).json({
            data : cities,
            success : true,
            message : "Successfully fetched all cities",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "not able to fetch cities",
            err : error
        })
    }
}
module.exports = {
    create,
    get,
    update,
    destroy,
    getAll
}