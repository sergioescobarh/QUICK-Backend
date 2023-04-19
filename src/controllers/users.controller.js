
const usersController = {
    //listar usuarios
    show: (req,res) => {
        const usersDefault = [
            {name: 'John', email:'j@gmail.com'},
            {name: 'Juan', email:'jj@gmail.com'},
            {name: 'Carlos', email:'C@gmail.com'}];

            res.send(usersDefault);

    }
};

module.exports = usersController;