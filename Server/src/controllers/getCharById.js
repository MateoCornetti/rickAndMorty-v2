const axios = require ("axios")

const URL_BASE = "https://rickandmortyapi.com/api/character"
const errorHandler = require("../utils/errors")

const getCharById = async (req, res) => {
    const {id} = req.params;

    try {
        const {data} = await axios(`${URL_BASE}/${id}`)

        const { name, gender,
            species, origin, image,
            status } = data;

        const character = {id, name, gender,
            species, origin, image,
            status }

        res.status(200).json(character)
    }
    catch (error) {
        errorHandler(res, error)
    }
}

module.exports = getCharById;