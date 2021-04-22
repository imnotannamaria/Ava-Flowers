const { Status, sequelize } = require('../models/');

const StatusController = {
  index: async (req, res) => {
    let status = await Status.findAll();
    return res.json(status);
  },

  create: async (req, res) => {
    let { nome } = req.body;

    let NovoStatus = await Status.create({
      nome,
    });

    return res.json(NovoStatus);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;

    const status = await Status.update(
      {
        nome,
      },
      {
        where: { id },
      }
    );

    return res.json(status);
  },

  delete: async (req, res) => {
    const { id } = req.params;

    const status = await Status.destroy({
      where: { id },
    });

    return res.json(status);
  },
};

module.exports = StatusController;
