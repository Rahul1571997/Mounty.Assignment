const hotel = require('../models/hotel.model');

// without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// controllers/hotel.js
exports.hotel_create = function (req, res) {
    let hotel = new Hotel(
        {
            bookingReference:req.body.bookingReference,
            name: req.body.name,
            price: req.body.price,
            address:req.body.address,
            phone: req.body.phone,
            email: req.body.email,
            passportNumber: req.body.passportNumber,
            roomNumber: req.body.roomnumber,
            roomType: req.body.roomtype,
            bedCount: req.body.bedcount,
            checkInDate: req.body.checkInDate,
            checkOutDate: req.body.checkOutDate,
            paymentMethod: req.body.paymentMethod,
            state: req.body.state,
        }
    );

    hotel.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Booking Created successfully')
    })
};



// routes/hotel.route.js
...
router.get('/:id', hotel_controller.hotel_information);

// controllers/hotel.controller.js
exports.hotel_information = function (req, res) {
    hotel.findById(req.params.id, function (err, hotel) {
        if (err) return next(err);
        res.send(hotel);
    })
};

// routes/hotel.route.js
...
router.put('/:id/update', hotel_controller.hotel_update);

// controllers/hotel.controller.js
...
exports.hotel_update = function (req, res) {
    hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, hotel) {
        if (err) return next(err);
        res.send('hotel udpated.');
    });
};
// routes/hotel.route.js
...
router.delete('/:id/delete', hotel_controller.hotel_delete);


// controllers/hotel.controller.js
exports.hotel_delete = function (req, res) {
    hotel.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};