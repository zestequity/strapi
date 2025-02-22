module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
    host: env('DATABASE_HOST', '127.0.0.1'),
    port: env.int('DATABASE_PORT', 5432),
    database: env('DATABASE_NAME', 'strapi'),
    user: env('DATABASE_USERNAME', 'strapi'),
    password: env('DATABASE_PASSWORD', 'strapi'),
    ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', true), // For self-signed certificates
    },
    },
    debug: false,
  },
});
