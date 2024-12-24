const { completeEmployeeTodo, readEmployeeTodo } = require("../controllers/employee.controller")

const router = require("express").Router()

router
    .get("read/todo", readEmployeeTodo)
    .put("update/todo/:tid", completeEmployeeTodo)

module.exports = router