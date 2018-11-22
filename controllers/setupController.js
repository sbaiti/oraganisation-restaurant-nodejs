var Orders = require('../models/orderModel');

module.exports = function (app) {
    app.get('/api/setupOrder', function (req, res) {
        //seed data 
        var starterOrder = [
            {
                num_order: 10,
                date_order: null
            },
            {
                num_order: 1,
                date_order: null
            },
            {
                num_order: 3,
                date_order: null
            }
        ];
        Orders.create(starterOrder, function (err, results) {
            if (err) throw err;
            res.send(results);
        });
    });
}