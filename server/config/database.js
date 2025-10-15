import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME || 'hub_db', process.env.DB_USER || 'root', process.env.DB_PASS || '', {
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql'
});

export default sequelize;