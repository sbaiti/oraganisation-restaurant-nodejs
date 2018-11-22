var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var orderSchema = new Schema({
    num_order: Number,
    date_order: Date || null
});


var Orders = mongoose.model('Orders', orderSchema);


module.exports = Orders;