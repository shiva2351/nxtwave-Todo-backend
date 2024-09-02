const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../db/database');



router.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const users = await db.all(`SELECT * FROM USERS`);
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ error: "errmessage" });
    }
});



module.exports = router;
