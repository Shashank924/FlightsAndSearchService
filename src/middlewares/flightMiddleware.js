const { errorCodes } = require('../utils/index');

const validateCreateFlight = async (req , res , next) => {

    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.arrivalAirportId ||
        !req.body.departureAirportId ||
        !req.body.arrivalTime ||
        !req.body.departurnTime ||
        !req.body.price
    ) {
        return res.status(errorCodes.clientErrorCodes.BAD_REQUEST).json({
            data : {},
            success : false,
            message : "Invalid request body for create Flight",
            err : "Missing mandatory properties to create a Flight"
        })
    }

    next();
}

module.exports = {
    validateCreateFlight
}