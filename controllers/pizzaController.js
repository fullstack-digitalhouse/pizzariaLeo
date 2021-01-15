const pizzas = require('../database/Pizzas.json');
/* const pizzas = basePizzas; */


const pizzaController = {
    index: (req, res)=>{
        return res.render('pizza', {pizzas});
    }
}

module.exports = pizzaController;