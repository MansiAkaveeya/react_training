var mongoose = require('mongoose');
const userschema = mongoose.Schema({
    FirstName: {
        type: String,
        required: [true, "Please enter the first name."],
        trim: true,
    },
    LastName: {
        type: String,
        required: [true, "Please enter the last name."],
        trim: true,
    },
    email: {
        type: String,
        match: [/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "please enter valid email"],
        required: [true, "Please enter the email."],
        unique: true
    },
    city: {
        type: String,
        required: [true, "Please enter the city."],
        trim: true
    },
    state: {
        type: String,
        required: [true, "Please enter the state."],
        trim: true,
    },
    country: {
        type: String,
        required: [true, "Please enter the country."],
    },
    department: {
        type: String,
        required: [true, "please enter department."]
    },
    gender: {
        type: String,
        required: [true, "please enter the gender"]
    }
})


module.exports = mongoose.model('users', userschema);;