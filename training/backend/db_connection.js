var mongoose = require('mongoose');

var con = mongoose.connect('mongodb://localhost:27017/users', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(connect => console.log("Mongodb connected")).catch(err => {
    console.log("err", err)
});

module.exports = con;