const { Schema, model } = require("mongoose");
let face = "https://fakeface.rest/thumb/view";
const userSchema = new Schema({
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
    image: {
        type: String,
        default: face
    }
})

const User = model("User", userSchema);

module.exports = User