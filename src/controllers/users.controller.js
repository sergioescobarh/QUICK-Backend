//fetching models
const {User} = require('../../models');

const usersController = {
    //listar usuarios
    show: async (req,res) => {
        const showUsers = await User.findAll()
        await res.send(showUsers);
    },
    register: async (req,res) => {
        const newUser = await {...req.body}
        try {await User.create(newUser);
        await res.status(200).send(newUser)}
        catch{ console.error(error);}
    }
};

module.exports = usersController;