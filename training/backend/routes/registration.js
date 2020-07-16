var express = require('express')
var mongoose = require('mongoose');
var router = express.Router(); //we store all this methods in router variable
var model = require('../model/users')

router.post('/registration', function (req, res , next) {

    model.create({
        id:req.params.id,
        FirstName : req.body.FirstName,
        LastName : req.body.LastName,
        email : req.body.email,
        city : req.body.city,
        state : req.body.state,
        country : req.body.country,
        department : req.body.department,
        gender : req.body.gender
    })

    .then(function(result){
        return res.status(200).json({
            error: false,
            success: true,
            data: result,
            msg: "data inserted!"
          });

    })
    .catch(function(err){
        return res.status(404).json({
            error: true,
            success: false,
            data: null,
            msg: err
          });
    });

});
module.exports = router;
