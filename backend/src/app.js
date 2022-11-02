const express = require("express");
require("./database/connection")
const Student = require("./models/students")
const routerStudent = require("./routes/student");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(routerStudent);

app.listen(port, () => {
    console.log(`connection on port ${port}`);
})