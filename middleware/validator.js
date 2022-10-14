const { check, query } = require('express-validator')

exports.validate = (method) => {
    switch (method) {
        case 'createProfile':
            {
                return [
                    check('opportunity_firstname').not().isEmpty().withMessage('Please enter the first name'),
                    check('opportunity_id').not().isEmpty().withMessage('Please enter the id'),
                    check('opportunity_lastname').not().isEmpty().withMessage('Please enter the last name'),
                    check('opportunity_email').not().isEmpty().withMessage('Please enter the email'),
                ]
            }
    }
}