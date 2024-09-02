const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

// Function to connect to the database
async function connectToDatabase() {
    const db = await sqlite.open({
        filename: './index.db',
        driver: sqlite3.Database
    });
    return db;
}


// Initialize the database
async function initializeDatabase() {
    const db = await connectToDatabase();
    
    console.log('Users table created or verified.');
    return db;
}

module.exports = {
    connectToDatabase,
    initializeDatabase
};
