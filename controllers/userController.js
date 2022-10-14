var User = require('../models/userModel.js');
const { validationResult } = require('express-validator');
const http = require('http');
const util = require('util');

require('dotenv').config()


/**
 * userController.js
 *
 * @description :: Server-side logic for managing users.
 */
module.exports = {

    /**
       * userController.createProfile()
       */
    createProfile: async function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                status: false,
                message: errors.array()[0].msg
            });
        }
        try {
            let user, checkUser;
            checkUser = await User.findOne({
                opportunity_email: req.body.opportunity_email,
            })
            if (checkUser) {
                return res.status(400).json({
                    status: false,
                    message: 'User email already exist',
                });
            } else {
                user = await User.create({
                    'opportunity_client_type': req.body.opportunity_client_type,
                    'opportunity_client_no': req.body.opportunity_client_no,
                    'opportunity_martial_status': req.body.opportunity_martial_status,
                    'opportunity_firstname': req.body.opportunity_firstname,
                    'opportunity_lastname': req.body.opportunity_lastname,
                    'opportunity_id': req.body.opportunity_id,
                    'opportunity_email': req.body.opportunity_email,
                    'opportunity_mobile': req.body.opportunity_mobile,
                    'opportunity_landline': req.body.opportunity_landline,
                    'opportunity_postal_address': req.body.opportunity_postal_address,
                    'opportunity_residental_address': req.body.opportunity_residental_address,
                    'opportunity_pay_type': req.body.opportunity_pay_type,
                    'opportunity_pat_category': req.body.opportunity_pat_category,
                    'opportunity_best_price': req.body.opportunity_best_price,
                    'opportunity_deposite': req.body.opportunity_deposite,
                    'opportunity_deposite_date': req.body.opportunity_deposite_date,
                    'opportunity_parking_base': req.body.opportunity_parking_base,
                    'opportunity_parking_cost': req.body.opportunity_parking_cost,
                    'opportunity_stove_option': req.body.opportunity_stove_option,
                    'opportunity_stove_cost': req.body.opportunity_stove_cost,
                    'opportunity_extra_cost': req.body.opportunity_extra_cost,
                    'opportunity_bond_amount': req.body.opportunity_bond_amount,
                    'opportunity_contract_price': req.body.opportunity_contract_price,
                    'opportunity_additional_cost': req.body.opportunity_additional_cost,
                    'opportunity_notes': req.body.opportunity_notes,
                    'opportunity_gardenNumber': req.body.opportunity_gardenNumber,
                    'opportunity_gardenSize': req.body.opportunity_gardenSize,
                    'opportunity_originalBayNo': req.body.opportunity_originalBayNo,
                    'opportunity_parkingBayNo': req.body.opportunity_parkingBayNo,
                    'opportunity_spareRoom': req.body.opportunity_spareRoom,
                    'opportunity_mood': req.body.opportunity_mood,
                    'opportunity_flooring': req.body.opportunity_flooring,
                    'opportunity_otp': req.body.opportunity_otp,
                    'opportunity_uploadId': req.body.opportunity_uploadId,
                    'opportunity_addressproof': req.body.opportunity_addressproof,
                    'opportunity_upload_deposite': req.body.opportunity_upload_deposite,
                    'opportunity_upload_statement': req.body.opportunity_upload_statement,
                    'opportunity_upload_lastThree': req.body.opportunity_upload_lastThree,
                    'opportunity_sale_agreement': req.body.opportunity_sale_agreement,
                    'opportunity_sale_mobile': req.body.opportunity_sale_mobile,
                });
                return res.status(200).json({
                    data: user,
                    status: true,
                    message: 'Data created successfully',
                });
            }
        } catch (err) {
            console.log(err)
            return res.status(500).json({
                error: err,
                status: false,
                message: 'Something went wrong',
            });
        }
    },

};