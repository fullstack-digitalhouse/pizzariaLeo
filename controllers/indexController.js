const pizzas = require('../database/Pizzas.json');

const indexController = {
    index: (req, res)=>{
        return res.render('index', {pizzas});
    }
}

module.exports = indexController;