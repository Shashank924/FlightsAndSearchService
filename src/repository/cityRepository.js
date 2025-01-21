const { Op } = require('sequelize');

const { City , Airport } = require('../models/index');

class CityRepository {

    async createCity({name}) {
        try {
            const city = await City.create({name});
            return city;
        } catch(error) {
            console.log("Something went wrong at Repository layer");
            throw {error};
        }
    }

    async createCities(data) {
        try {
            const cities = await City.bulkCreate(data);
            return cities;
        } catch(error) {
            console.log("Something went wrong at Repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where : {
                    id : cityId
                }
            });
            return true;
        } catch(error) {
            console.log("Something went wrong at Repository layer");
            throw {error};
        }
    }

    async updateCity(cityId , data) {
        try {
            const city = await City.update(data , {
                where : {
                    id : cityId
                }
            })
            return city;
        } catch (error) {
            console.log("Something went wrong at Repository layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong at Repository layer");
            throw {error};
        }
    }

    async getAllCities(filter) {
        try {
            if(filter.name) {
                const cities = await City.findAll({
                    where : {
                        name :{
                            [Op.startsWith] : filter.name
                        }
                    }
                })
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong at Repository layer");
            throw {error};
        }
    }

    async getAirports(cityId) {
        try {
            const city = await City.findByPk(cityId);
            const airports = city.getAirports();
            return airports;
        } catch (error) {
            console.log("Something went wrong at Repository layer");
            throw {error};
        }
    }
}

module.exports = CityRepository;