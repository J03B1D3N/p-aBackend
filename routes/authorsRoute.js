const express = require("express");
const router = express.Router();
router.use(express.json());

const {
  createAuthor,
  getAuthor,
  getAllAuthors,
  deleteAuthor,
  updateAuthor,
} = require("../controlers/authorControler");

router.use(express.json());

router.get("/", getAllAuthors);

router.get("/:id", getAuthor);

router.post("/", createAuthor);

router.delete("/:id", deleteAuthor);

router.patch("/:id", updateAuthor);

module.exports = router;
