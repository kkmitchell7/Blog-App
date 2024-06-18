const express = require("express");
const router = express.Router();

const { login, register, getUser, updateUser } = require("../controllers/auth");

const {protect} = require("../middleware/authMiddleware")

const { upload } = require("../middleware/multer");

router.post("/login", (req, res) => {
  login(req, res);
});

router.post("/register", (req, res) => {
  register(req, res);
});

router.get("/user/:id", (req, res) => {
  getUser(req, res);
});

router.put("/user/:id", protect, upload.single("image"), (req, res) => {
  console.log(req)
  updateUser(req, res);
});

module.exports = router;