const mongoose = require("mongoose");

var logSchema = mongoose.Schema({
    message: String
});

var Log = mongoose.model('Log', logSchema);

module.exports = Log;