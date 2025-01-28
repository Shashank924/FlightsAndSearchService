const { AirportService } = require('../services/index');

const airportServiceObj = new AirportService();

const create = async (req , res) => {
    try {
        const airport = await airportServiceObj.createAirport(req.body);
        return res.status(201).json({
            data : airport,
            success : true,
            message : 'Airport Added Successfully',
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to add Airport',
            err : error
        })
    }
}

const destroy = async (req , res) => {
    try {
        const response = await airportServiceObj.deleteAirport(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Airport deleted Successfully',
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to delete Airport',
            err : error
        })
    }
}

const update = async (req , res) => {
    try {
        const airport = await airportServiceObj.updateAirport(req.body , req.params.id);
        return res.status(201).json({
            data : airport,
            success : true,
            message : 'Airport Updated Successfully',
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to Update Airport',
            err : error
        })
    }
}

const get = async (req , res) => {
    try {
        const airport = await airportServiceObj.getAirport(req.params.id);
        return res.status(200).json({
            data : airport,
            success : true,
            message : 'Airport fetched Successfully',
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to fetch Airport',
            err : error
        })
    }
}

const getAll = async (req , res) => {
    try {
        const airports = await airportServiceObj.getAllAirports(req.query);
        return res.status(200).json({
            data : airports,
            success : true,
            message : 'Airports fetched Successfully',
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to fetch Airports',
            err : error
        })
    }
}

module.exports = {
    create ,
    destroy ,
    update , 
    get , 
    getAll
}