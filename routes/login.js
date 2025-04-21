const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const apiKey = process.env.FIREBASE_API_KEY 
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
    res.send(response.data);
  } catch (err) {
    res.status(400).send({ error: err.response.data.error.message });
  }
});

module.exports = router;
