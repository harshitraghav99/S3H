const express = require("express");
require("./database/connection")
const Employee = require("./models/employes")
const routerEmployee = require("./routes/employees");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(routerEmployee);

app.listen(port, () => {
    console.log(`connection on port ${port}`);
})