const express = require("express");
const admin = require("../firebase");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
    console.log(req.body.email)
  try {
    const user = await admin.auth().createUser({
      email,
      password,
    });
    res.status(201).send({ message: "User created", uid: user.uid });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
