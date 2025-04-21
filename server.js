const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");

app.use(express.json());

app.use("/api", signupRoute);
app.use("/api", loginRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
