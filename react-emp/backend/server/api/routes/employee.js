//adding employee 
const express = require('express');
const router = express.Router();
const EmpController = require('../controllers/employee');





//employee Routes
router.get("/employees", EmpController.user_all);

router.post("/employee/add", EmpController.create_User);

router.get("/employee/:empId", EmpController.curr_User);

router.delete("/employee/:empId", EmpController.user_delete);



module.exports = router;