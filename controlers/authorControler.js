const Author = require("../models/authorModel");
const mongoose = require("mongoose");

//get all workouts
const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find({}).sort({ createdAt: -1 });
    res.status(200).json(authors);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get a single workout
const getAuthor = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such author" });
  }

  const author = await Author.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such author" });
  }

  res.status(200).json(author);
};

//create new author
const createAuthor = async (req, res) => {
  const { name } = req.body;

  //add doc to db
  try {
    const author = await Author.create({ name });
    res.status(200).json(author);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a workout
const deleteAuthor = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such author" });
  }

  const author = await Author.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).json({ error: "No such author" });
  }

  res.status(200).json(author);
};

//update a workout

const updateAuthor = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such author" });
  }

  const author = await Author.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res.status(404).json({ error: "No such author" });
  }

  res.status(200).json(author);
};

module.exports = {
  createAuthor,
  getAuthor,
  getAllAuthors,
  deleteAuthor,
  updateAuthor,
};
