const mongoose = require("mongoose");

var logSchema = mongoose.Schema({
    message: String,
    createdAt: Date,
});

var Log = mongoose.model('Log', logSchema);

module.exports = Log;