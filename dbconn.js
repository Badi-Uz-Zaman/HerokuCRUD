
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'aflvohumqnrvqo',
    host: 'ec2-44-205-177-160.compute-1.amazonaws.com',
    database: 'd6l19j31r9tq4q',
    password: '35d90f587c49e8224b96336f35ecee8a38135a4633dae74c3f8d931271959157',
    port: 5432,
    ssl:{
        rejectUnauthorized: false
    }
});

module.exports = pool