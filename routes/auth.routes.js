const { adminResister, adminLogin, adminLogout, employeeResister, employeeLogin, employeeLogout } = require("../controllers/auth.controller")
const { adminProtected } = require("../middlewares/proctected.middleware")

const router = require("express").Router()

router
    .post("/admin/register", adminResister)
    .post("/admin/login", adminLogin)
    .post("/admin/logout", adminLogout)

    .post("/employee/register", adminProtected, employeeResister)
    .post("/employee/login", employeeLogin)
    .post("/employee/logout", employeeLogout)

module.exports = router
