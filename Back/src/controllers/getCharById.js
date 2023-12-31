const axios = require ("axios");
const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = (req, res) =>{
    const {id} = req.params;
    axios(URL+id)
    .then (({data})=>{
        const {name, gender, species, origin, image,status} = data;
        const character = {id, name, gender, species, origin, image,status}
        return character.name
        ? res.status (200).json(character)
        : res.status (404).send('Not Found')
    })
    .catch((err) => {
        return res.status(500).send(err.message)
    })

}

module.exports = getCharById





// const axios = require ("axios");
// const getCharById = (res, id) => {
//     axios.get(`${URL}/character/${id}`)
//     .then (({ data}) => {
//         const {name, gender, species, origin, image,status} = data;
//         const character = {id, name, gender, species, origin, image,status}
//         res.writeHead (200, {"Content-type": "application/json"})
//         res.end (JSON.stringify (character));
//     })
//     .catch((err) => {
//         res.writeHead (500, {"Content-type": "text/plain"}); 
//         return res.end(err.message)
//     })
// }

// const successH = (response, res) => {
//     const {id, name, gender, species, origin, image,status} = response.data;
//     res.writeHead(200, {"Content-type": "application/json"});
//     res.end(JSON.stringify({id, name, gender, species, origin, image,status}))
// };

// const errorH = (error, res) => {
//     res.writeHead (500, {"Content-type": "text/plain"});
//     res.end(error.message);
// }


module.exports = getCharById;