const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let hotelSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
    bookingReference: {type: Number, required: true},
    address:{type: String, required: true, max: 100},
    phone: {type: Number, required: true},
    passportNumber: {type: Number, required: true},
    roomNumber: {type: Number, required: true},
    roomType: {type: String, required: true, max: 100},
    bedCount: {type: Number, required: true},
    checkInDate: {type: Number, required: true},
    checkOutDate: {type: Number, required: true},
    paymentMethod: {type: String, required: true, max: 100},
    state:{type: String, required: true, max: 100},


});


// Export the model
module.exports = mongoose.model('hotel', hotelSchema);