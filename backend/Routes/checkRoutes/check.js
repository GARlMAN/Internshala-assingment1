const express = require("express");
const {getAllProducts, addTasks, deleteTasks, updateTasks, getOneProducts} = require("../../controllers/check/checkcontrollers")
const router = express.Router();

//add controllers to routers
router.route("/tasks").get(getAllProducts).post(addTasks);
router.route("/task/:id").delete(deleteTasks).put(updateTasks).get(getOneProducts);

module.exports = router;