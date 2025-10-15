import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import sequelize from '../config/database.js';

const seedUsers = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected.');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);

    const testUser = {
      name: 'Admin User',
      email: 'admin@admin.com',
      password: hashedPassword,
    };

    await User.create(testUser);
    console.log('Test user created successfully.');

  } catch (error) {
    console.error('Error seeding user:', error);
  } finally {
    await sequelize.close();
  }
};

export default seedUsers;