const testDataController = require("../controllers/TestDataController.js");

const router = require("express").Router();

router.post("/test-data", testDataController.create);

router.get("/test-data", testDataController.retrieve);

router.get("/test-data/:id", testDataController.detail);

router.put("/test-data/:id", testDataController.update);

router.delete("/test-data/:id", testDataController.remove);

module.exports = router;