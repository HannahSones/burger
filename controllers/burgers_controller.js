const express = require("express");

const router = express.Router();
const burger = require("../models/burger.js");

// Get request for existing burger data
router.get("/", async (req, res) => {
    try {
        const data = await burger.all();
        const handlebarsObj = { burgers: data };
        
        res.render("index", handlebarsObj);
    }
    catch (error) {
        console.log(error);
    }
});

// Post request for new burger
router.post("/api/burgers", async (req, res) => {
    try {
        const result = await burger.create(["Burger name", "devoured"], [req.body.name, false]);
        
        if (result.affectedRows === 0) {
            return res.status(500).json({ message: "New database entry was not made" }).end();
        }
        res.status(200).end();
    }
    catch (error) {
        console.log(error);
    }
});

// Pit request for changing the devoured property
router.put("/api/burgers/:id", async (req, res) => {
    const condition = `id = ${req.params.id}`;
    
    try {
        const result = await burger.update({ devoured: true }, condition);

        if (result.changedRows === 0) {
            return res.status(500).json({ message: "Database record was not updated" }).end();
        }
        res.status(200).end();
    }
    catch (error) {
        console.log(error);
    }
});

module.exports = router;