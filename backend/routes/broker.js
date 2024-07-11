const express = require("express");
const router = express.Router();
const brokerController = require("../controllers/brokerController");

// Search brokers by category
router.get("/search", brokerController.searchBrokersByCategory);
// Create a new broker

// Get a broker by ID
router.get("/:id", brokerController.getBrokerById);

// Update a broker by ID
router.put("/:id", brokerController.updateBrokerById);

// Delete a broker by ID
router.delete("/:id", brokerController.deleteBrokerById);

router.post("/", brokerController.createBroker);

// Get all brokers
router.get("/", brokerController.getAllBrokers);

module.exports = router;
