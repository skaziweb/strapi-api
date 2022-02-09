const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
console.log('DATABASE_URL', config)
module.exports = ({ env }) => ({
    connection: {
    client: 'postgres',
    connection: {
        host: config.host || 'ec2-52-31-217-108.eu-west-1.compute.amazonaws.com',
        port: config.port || 5432,
        database: config.database || 'dljn77fg5bagq',
        user: config.user || 'auppfynkftefqh',
        password: config.password || '166e6d3b33c51e5090022bc60fa0c4c1e12472f5451d3eba9872f49395cce51f',
        ssl: {
            rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },
    },
    options: {
        ssl: env.bool('DATABASE_SSL', false),
    },
    debug: false,
    },
});