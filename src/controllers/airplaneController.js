const AirplaneService = require('../services/airplaneService');

const airplaneServiceObj = new AirplaneService();

const create = async (req , res) => {
    try {
        const airplane = await airplaneServiceObj.create(req.body);
        return res.status(201).json({
            data : airplane,
            success : true,
            message : 'Airplane Added Successfully',
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to add Airplane',
            err : error
        })
    }
}

const destroy = async (req , res) => {
    try {
        const response = await airplaneServiceObj.delete(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Airplane deleted Successfully',
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to delete Airplane',
            err : error
        })
    }
}

const update = async (req , res) => {
    try {
        const airplane = await airplaneServiceObj.update(req.body , req.params.id);
        return res.status(201).json({
            data : airplane,
            success : true,
            message : 'Airplane data Updated Successfully',
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to Update Airplane data',
            err : error
        })
    }
}

const get = async (req , res) => {
    try {
        const airplane = await airplaneServiceObj.get(req.params.id);
        return res.status(200).json({
            data : airplane,
            success : true,
            message : 'Airplane fetched Successfully',
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to fetch Airplane',
            err : error
        })
    }
}


module.exports = {
    create ,
    destroy ,
    update , 
    get

}