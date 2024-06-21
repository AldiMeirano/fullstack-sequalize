const response = require("../helper/response");
const db = require("../models");

const Employe = db.employe;
const createEmploye = async (req, res) => {
  try {
    const info = {
      employe: req.body.employe,
    };
    const product = await Employe.create(info);
    res.send(response(200, product, "Success created employe"));
    console.log(product);
  } catch (error) {
    throw error;
  }
};

const UpdateEmploye = async (req, res) => {
  try {
    const id = req.params.id;
    const info = {
      employe: req.body.employe,
    };
    const employe = await Employe.update(info, {
      where: { id: id },
    });
    if (!employe) {
      return res
        .status(404)
        .send(response(404, null, "Cannot found employe to update"));
    }
    res.send(response(200, employe, "Success created employe"));
  } catch (error) {
    res.status(500).send(500, null, error);
  }
};

const getEmployeById = async (req, res) => {
  try {
    const id = req.params.id;

    const employe = await Employe.findOne({
      where: { id: id },
    });

    res.send(response(response(200, employe, "Success get data")));
  } catch (error) {
    throw error;
  }
};

const deleteEmploye = async (req, res) => {
  try {
    const id = req.params.id;

    const employe = await Employe.destroy({
      where: { id: id },
    });
    res.send(response(200, employe, "Success created employe"));
    console.log(product);
  } catch (error) {
    throw error;
  }
};

const getAllEmployee = async (req, res) => {
  try {
    const employe = await Employe.findAll({});
    if (employe.length == 0) {
      return res.status(404).send(response(404, null, "No one employe"));
    }
    res.send(response(200, employe, "Success created employe"));
    console.log(product);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createEmploye,
  UpdateEmploye,
  getEmployeById,
  deleteEmploye,
  getAllEmployee,
};
