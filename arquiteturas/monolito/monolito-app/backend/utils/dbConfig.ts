export const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    database: process.env.DB_NAME || 'monolito_db',
    username: process.env.DB_USER || 'admin',
    password: process.env.DB_PASS || 'admin123'
};
