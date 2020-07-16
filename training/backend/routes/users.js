var express = require('express')
var mongoose = require('mongoose');
var router = express.Router();
var model = require('../model/users');

//For retriving all data
router.get('/', function (req, res, next) {
    model.find({})
        .then(function (result) {
            return res.status(200).json({
                error: false,
                success: true,
                data: result,
                msg: "Here is the result!"
            });

        })
        .catch(function (err) {
            return res.status(404).json({
                error: true,
                success: false,
                data: null,
                msg: err
            });
        })
})
router.get('/:id', function (req, res, next) {
    model.findById({
        _id: req.params.id
    })
        .then(function (result) {
            return res.status(200).json({
                error: false,
                success: true,
                data: result,
                msg: "Here is the result!"
            });

        })
        .catch(function (err) {
            return res.status(404).json({
                error: true,
                success: false,
                data: null,
                msg: err
            });
        })
})

//for updating data
router.put('/', function (req, res, next) {

    if (req.body.update_firstname == "" || req.body.update_firstname == undefined || req.body.update_lastname == "" || req.body.update_lastname == undefined) {
        return res.status(404).json({
            error: true,
            success: false,
            msg: "please enter firstname or lastname."
        });
    } else {
        model.findOneAndUpdate({
            FirstName: req.body.FirstName,
        },
            {
                $set: {
                    FirstName: req.body.update_firstname,
                    LastName: req.body.update_lastname
                }
            })
            .then(function (result) {

                if (result == null) {
                    return res.status(200).json({
                        error: false,
                        success: true,
                        data: result,
                        msg: "Record which you want to update, it isn't existed!"
                    });
                }
                else {
                    return res.status(200).json({
                        error: false,
                        success: true,
                        msg: "Data updated successfully!"
                    });
                }
            })
            .catch(function (err) {
                return res.status(404).json({
                    error: true,
                    success: false,
                    data: null,
                    msg: err
                });
            })
    }

})

//for deleting record
router.delete('/:id', function (req, res, next) {
    model.findByIdAndDelete({
        _id: req.params.id
    })
        .then(function (result) {
            if (result == null) {
                return res.status(200).json({
                    error: false,
                    success: true,
                    data: result,
                    msg: "Record does not existed!"
                });
            }
            else {
                return res.status(200).json({
                    error: false,
                    success: true,
                    msg: "Record is deleted!"
                });
            }
        })
        .catch(function (err) {
            return res.status(404).json({
                error: true,
                success: false,
                data: null,
                msg: err
            });
        })
})
module.exports = router;
