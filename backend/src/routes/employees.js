const express =  require("express");
const Employee = require("../models/employes")
const router = new express.Router();


// router.post("/employees", (req, res) => {
//     // res.send("post request");
//     console.log(req.body);
//     const employee = new employee(req.body);
//     employee.save().then(() => {
//         res.status(201).send(employee)
//     }).catch((e) => {

//         res.status(400).send(e);
//     });
// })





router.post("/employees", async (req, res) => {
    try {
        const employee = new Employee(req.body);
        const createUser = await employee.save();
        res.status(201).send(createUser);
    } catch (e) {
        res.status(400).send(e);
    }

})
router.get("/employees", async (req, res) => {
    try{
        const employees = await Employee.find();
        res.send(employees)
    }catch(e){
        res.send(e);
    }

})
// router.get("/employees", (req, res) => {
//     const employees = employee.find().then(() => {
//         res.status(200).send(employees);
//     }).catch((e) => {
//         res.status(500).send(e);
//     });
// })
// router.get("/employees/:id", async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const employeeData = await employee.findById(_id);
//         if (!employeeData) {
//             res.status(404).send("not found");
//         } else {
//             res.status(200).send(employeeData);
//         }
//     } catch (e) {
//         res.status(500).send(e);
//     }
// })
router.get("/employees/:name", async (req, res) => {
    try {
        const name = req.params.name;
        const employeeData = await Employee.findOne({ name: name }).exec();
        if (!employeeData) {
            res.status(404).send("not found");
        } else {
            res.status(200).send(employeeData);
        }
    } catch (e) {
        res.status(500).send(e);
    }
})
router.patch("/employees/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const upadteEmployee = await Employee.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.status(200).send(upadteEmployee);

    } catch (e) {
        res.status(404).send(e);
    }
})
router.delete("/employees/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteEmployee = await Employee.findByIdAndDelete(_id);
        if (!_id) {
            return res.status(404).send();
        }
        else {
            res.send(deleteEmployee);
        }
    } catch (error) {
        res.status(500).send(error);
    }
})
module.exports = router;
