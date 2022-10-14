const Hashids = require('hashids/cjs');
const hashids = new Hashids('Node', 10);

exports.encode = function(id) {
    return hashids.encodeHex(id.toString());
};
exports.decode = function(id) {
    return hashids.decodeHex(id);
};
