const { Op } = require("sequelize");
const { req, res } = require("express");
const db = require("../models");
const response = require("../helper/response");

const Penalty = db.penalty;

const penaltyController = async (req, res) => {
  try {
    let info = {
      price: req.body.price,
    };

    const penalty = await Penalty.create(info);
    res
      .status(404)
      .send(response(404, penalty, "Success send penalty to user"));
  } catch (error) {
    console.log(error);
  }
};

const updatePenaltyController = async (req, res) => {
  try {
    const id = req.params.id;
    await Book.update(req.body, { where: { id: id } });
  } catch (error) {
    console.log(error);
  }
};

const deleteController = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Penalty.destroy({ where: { id: id } });
    res.status(200).send(response(200, data, "Succes delete data"));
  } catch (error) {
    console.log(error);
  }
};

const getAllDataPenalty = async (req, res) => {
  try {
    const data = await Penalty.findAll({});
    res.status(200).send(response(200, data, "Success get all data"));
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  penaltyController,
  updatePenaltyController,
  getAllDataPenalty,
  deleteController,
};
