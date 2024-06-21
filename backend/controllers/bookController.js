const { Op } = require("sequelize");
const response = require("../helper/response");
const db = require("../models");

const Book = db.book;
const User = db.user;

const getAllDataBook = async (req, res) => {
  try {
    const dataUser = await Book.findAll();
    if (dataUser.length === 0) {
      return res.status(404).send(response(404, dataUser, "Not found books"));
    }
    return res.status(200).send(response(200, dataUser, "Success get book"));
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
const addNewBook = async (req, res) => {
  try {
    const { user } = req;
    const dataUser = await User.findOne({ where: { email: user.email } });
    if (dataUser.role !== "admin") {
      return res
        .status(400)
        .send(response(400, null, "Cannot acces this feature"));
    }

    let info = {
      title: req.body.title,
      author: req.body.author,
      quantity: req.body.quantity,
    };

    const product = await Book.create(info);
    return res.status(200).send(response(200, product, "Succes created book"));
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const getOneBook = async (req, res) => {
  try {
    let id = req.params.id;
    let product = await Book.findOne({ where: { id: id } });
    if (!product) {
      return res.status(404).send(response(404, product, "Not found book"));
    }
    return res.status(200).send(response(200, product, "Succes get one book"));
  } catch (error) {
    console.log(error);
  }
};

const updateDataBook = async (req, res) => {
  try {
    const { user } = req;
    const dataUser = await User.findOne({ where: { email: user.email } });
    if (dataUser.role !== "admin") {
      return res
        .status(400)
        .send(response(400, dataUser, "Cannot acces this feature"));
    }
    let id = req.params.id;

    await Book.update(req.body, { where: { id: id } });

    const data = await Book.findOne({ where: { id: id } });
    if (!data) {
      return res.status(404).send(response(404, data, "Not found book"));
    }
    res.send(response(200, data, "Success update book"));
  } catch (error) {
    console.log(error);
  }
};

const deleteDataBook = async (req, res) => {
  try {
    const { user } = req;
    const dataUser = await User.findOne({ where: { email: user.email } });
    if (dataUser.role !== "admin") {
      return res
        .status(400)
        .send(response(400, dataUser, "Cannot acces this feature"));
    }

    let id = req.params.id;
    const data = await Book.findOne({ where: { id: id } });
    if (!data) {
      return res.status(404).send(response(404, data, "Not found book"));
    }
    let products = await Book.findAll({});
    await Book.destroy({ where: { id: id } });
    res.send(response(200, products, "Success delete book"));
  } catch (error) {
    throw error;
  }
};

const searchBookOrAuthor = async (req, res) => {
  try {
    const { title, author } = req.query;
    // console.log("pepe", search);
    let ProductData = "";
    if (title) {
      const books = await Book.findAll({
        where: {
          title: {
            [Op.like]: `%${title}%`,
          },
        },
      });
      ProductData = books;
      return res.send(response(200, ProductData, "Success get data book"));
    } else {
    }
    if (author) {
      const books = await Book.findAll({
        where: {
          author: {
            [Op.like]: `%${author}%`,
          },
        },
      });

      ProductData = books;
      return res.send(response(200, ProductData, "Success get data book"));
    }

    const books = await Book.findAll();
    ProductData = books;
    return res.send(response(200, ProductData, "Success get data book"));
  } catch (error) {
    console.log(error);
  }
};

const uploadImage = async (req, res) => {
  try {
    const { file, params } = req;
    const id = parseInt(params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid room ID" });
    }

    const info = {
      image: `/${file?.filename}`,
    };

    const data = await Book.update(info, {
      where: { id: id },
    });
    return res.send(response(200, data, "Success upload picture book"));
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  addNewBook,
  getOneBook,
  updateDataBook,
  deleteDataBook,
  getAllDataBook,
  searchBookOrAuthor,
  uploadImage,
};
