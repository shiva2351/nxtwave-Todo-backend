const express = require('express');
const app = express();
const userRoutes = require('./routes/users');
const { initializeDatabase } = require('./db/database');
const cors= require("cors")

app.use(express.json());
app.use(cors())

initializeDatabase().catch((err) => {
    console.error('Failed to initialize database:', err);
});


app.use('/users', userRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});





