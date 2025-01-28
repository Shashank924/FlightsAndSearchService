const { FlightService } = require('../services/index');

const flightServiceObj = new FlightService();

const create = async (req , res) => {

    try {
        const flightRequestBody = {
            flightNumber : req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            arrivalAirportId : req.body.arrivalAirportId,
            departurAirportId : req.body.departureAirportId,
            arrivalTime : req.body.arrivalTime,
            departureTime : req.body.departurnTime,
            price : req.body.price
        }

        const flight = await flightServiceObj.createFlight(flightRequestBody);
        return res.status(200).json({
            data : flight,
            success : true,
            message : "succesfully created a flight",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "not able to create flight",
            err : error
        })
    }
}

const get = async (req , res) => {

    try {
        const flight = await flightServiceObj.getFlight(req.body);
        return res.status(200).json({
            data : flight,
            success : true,
            message : "succesfully fetched a flight",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "not able to fetch the flight",
            err : error
        })
    }
}

const getAll = async (req , res) => {

    try {
        const flights = await flightServiceObj.getAllFlights(req.query);
        return res.status(200).json({
            data : flights,
            success : true,
            message : "succesfully fetched all flights with given filters",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "not able to fetch flights",
            err : error
        })
    }
}

module.exports = {
    create,
    get,
    getAll
}