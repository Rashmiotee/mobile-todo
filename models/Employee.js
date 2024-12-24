const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    isActive: { type: Boolean, require: false },
}, { timestamps: true })

module.exports = mongoose.model("employee", employeeSchema)