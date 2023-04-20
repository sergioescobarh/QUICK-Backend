//recurso para API REST
const fetch = require('node-fetch');

charactesController = {
    list: async (req,res)=>{
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json();
        const characters = await data.results
        res.send(characters);
    }
};
module.exports =charactesController;