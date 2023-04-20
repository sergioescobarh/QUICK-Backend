//fetching models
const User = require('../../models').User

const usersController = {
    //listar usuarios
    show: async (req,res) => {
        const showUsers = await User.findAll()
        await res.send(showUsers);
    },
    register: async (req,res) => {
        const newUser = {
            ...req.body}
            console.log(newUser);
            try {
                await User.create(newUser);
                await res.status(200).json(newUser);
              } catch (error) {
                console.error(error);
                res.status(500).send('Error creating user');
              }
    }
};

module.exports = usersController;