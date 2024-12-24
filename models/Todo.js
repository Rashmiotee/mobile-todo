const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    employee: { type: mongoose.Types.ObjectId, ref: "employee", require: true },
    task: { type: String, require: true },
    desc: { type: String, require: true },
    priority: { type: String, require: true },
    isComplete: { type: Boolean, require: false },
}, { timestamps: true })

module.exports = mongoose.model("todo", todoSchema)