const express = require('express');
const {PORT} = require('./config/serverConfig');

const CityRepository = require('./repository/cityRepository');

const setupAndStartServer = async () => {

    // create the express object
    const app = express();

    app.listen(PORT , async () => {
        console.log(`server started at port ${PORT}`);

        const cityObj = new CityRepository();
        cityObj.createCity({name : "Patna"});
    })
}

setupAndStartServer();