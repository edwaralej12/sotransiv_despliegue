const mysql = require('mysql');

// Set database connection credentials
const config = {
    host: 'localhost',
    user: 'sotransiv',
    password: '1234',
    database: 'sotransiv',
};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;