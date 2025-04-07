import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

// Ya existente
export const generateMockingPets = (count = 10) => {
  const pets = [];

  for (let i = 0; i < count; i++) {
    pets.push({
      id: faker.database.mongodbObjectId(),
      name: faker.animal.cat(),
      species: faker.animal.type(),
      age: faker.number.int({ min: 1, max: 15 }),
    });
  }

  return pets;
};

// Nueva función: generar usuarios mock
export const generateMockingUsers = (count = 5) => {
  const users = [];

  for (let i = 0; i < count; i++) {
    const password = faker.internet.password();
    const hashedPassword = bcrypt.hashSync(password, 10); // Encriptar la contraseña

    users.push({
      _id: faker.database.mongodbObjectId(),
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      age: faker.number.int({ min: 18, max: 60 }),
      password: hashedPassword,
      role: faker.helpers.arrayElement(['user', 'admin']),
      pets: [],
    });
  }

  return users;
};
