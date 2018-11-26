var Orders = require('../models/orderModel');
var bodyParser = require('body-parser');

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    // get
    app.get('/api/orders', function (req, res) {
        Orders.find((err, orders) => {
            if (err) {
                throw err;
                console.log(err);
            }
            res.send(orders);
        })
    });

    // app.get('/api/todo/:id', function (req, res) {
    //     Todos.findById({ _id: req.params.id }, function
    //         (err, todo) {
    //         if (err) throw err;
    //         res.send(todo);
    //     })
    // });

    //post

    app.post('/api/order', function (req, res) {
        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, {
                num_order: req.body.order.num_order,
                date_order: req.body.order.date_order
            }, function (err) {
                if (err) throw err;
                res.send('succes');
            });
        }
        else {
            var newOrder = Orders({
                username: 'test',
                num_order: req.body.order.num_order || null,
                date_order: req.body.order.date_order
            });
            newOrder.save(function (err) {
                if (err) throw err;
                res.send('Success');
            });
        }
    });
    app.delete('/api/orders/delete', function (req, res) {
        Orders.remove((err) => {
            if (err) throw err;
            res.send('Success')
        });
    });

    app.delete('/api/orders/delete/:id',function(req,res){
        var id = req.params.id;
        Orders.deleteOne({_id:id.slice(1)},function(err){
            if (err) throw err;
            else
            console.log('success');
        });
    })
}