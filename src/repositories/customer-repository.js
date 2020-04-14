'use strict';

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get = async() => {
    var res = await Customer.find({
    }, 'name email password image');
    return res;
}

exports.create = async(data) => {
    var customer = new Customer(data);
    await customer.save();
}

exports.login = async(email, password) => {
    var res = await Customer.find({
        email: email,
        password: password
    });
    return res;
}


