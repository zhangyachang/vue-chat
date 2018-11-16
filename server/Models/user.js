const {db} = require('../Schema/config');
const UserSchema = require('../Schema/user');
const UserModel = db.model('users', UserSchema);
module.exports = UserModel;

