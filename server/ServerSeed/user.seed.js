const bcrypt = require("bcryptjs");
module.exports = {
    users: [
        {
            name: "priyanshu",
            email: "admin@example.google.com",
            password: bcrypt.hashSync("xyzabcnycdom",12),
            isAdmin: true
        },
        {
            name: "jhon wick",
            email: "jhon-wick@example.google.com",
            password: bcrypt.hashSync("jhon-wick",12),
            isAdmin: false
        },
        {
            name: "keyojiro rengoku",
            email: "keyojiro rengoku@example.google.com",
            password: bcrypt.hashSync("keyojiro rengoku",12),
            isAdmin: false
        }
    ]
}