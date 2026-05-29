const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    userName:{
        type: String,
        required: true
    },
    userEmail:{
        type: String,
        required: true
    },
});
const User = mongoose.model('User',userSchema);
module.exports = User;