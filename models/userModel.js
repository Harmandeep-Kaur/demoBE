var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	'opportunity_client_type': String,
	'opportunity_client_no': String,
	'opportunity_martial_status': String,
	'opportunity_firstname': String,
	'opportunity_lastname': String,
	'opportunity_id': Number,
	'opportunity_email': { type: String, lowercase: true },
	'opportunity_mobile': Number,
	'opportunity_landline': Number,
	'opportunity_postal_address': String,
	'opportunity_residental_address': String,
	'opportunity_pay_type': String,
	'opportunity_pat_category': String,
	'opportunity_best_price': String,
	'opportunity_deposite': String,
	'opportunity_deposite_date': String,
	'opportunity_parking_base': String,
	'opportunity_parking_cost': String,
	'opportunity_stove_option': String,
	'opportunity_stove_cost': String,
	'opportunity_extra_cost': String,
	'opportunity_bond_amount': String,
	'opportunity_contract_price': String,
	'opportunity_additional_cost': String,
	'opportunity_notes': String,
	'opportunity_gardenNumber': String,
	'opportunity_gardenSize': String,
	'opportunity_originalBayNo': String,
	'opportunity_parkingBayNo': String,
	'opportunity_spareRoom': String,
	'opportunity_mood': String,
	'opportunity_flooring': String,
	'opportunity_otp': String,
	'opportunity_uploadId': String,
	'opportunity_addressproof': String,
	'opportunity_upload_deposite': String,
	'opportunity_upload_statement': String,
	'opportunity_upload_lastThree': String,
	'opportunity_sale_agreement': String,
	'opportunity_sale_mobile': Number,
	'create_date': {
		type: Date,
		default: Date.now
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('user', userSchema);

