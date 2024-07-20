const Broker = require('../models/Broker');
const Category = require('../models/Category');

// Create a new broker
exports.createBroker = async (req, res) => {
  try {
    const broker = await Broker.create(req.body);
    res.status(201).json(broker);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all brokers
exports.getAllBrokers = async (req, res) => {
  try {
    const brokers = await Broker.findAll({
      include: [Category]
    });
    res.status(200).json(brokers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Get a broker by ID
exports.getBrokerById = async (req, res) => {
  try {
    const broker = await Broker.findByPk(req.params.id);
    if (broker) {
      res.status(200).json(broker);
    } else {
      res.status(404).json({ error: 'Broker not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a broker by ID
exports.updateBrokerById = async (req, res) => {
  try {
    const [updated] = await Broker.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedBroker = await Broker.findByPk(req.params.id);
      res.status(200).json(updatedBroker);
    } else {
      res.status(404).json({ error: 'Broker not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a broker by ID
exports.deleteBrokerById = async (req, res) => {
  try {
    const deleted = await Broker.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Broker not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Search brokers by category
exports.searchBrokersByCategory = async (req, res) => {
  try {
    const { category } = req.query;
    const brokers = await Broker.findAll({
      include: [{
        model: Category,
        where: { name: category }
      }]
    });
      res.status(200).json({brokers});
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};