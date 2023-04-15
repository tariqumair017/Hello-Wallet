const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");


let UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);