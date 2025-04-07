import { Router } from 'express';
import { generateMockingPets, generateMockingUsers } from '../utils/mocking.utils.js';
import  UserModel  from '../models/User.js'; 
import  PetModel   from '../models/Pet.js';

const router = Router();

// Endpoint para obtener mascotas mock
router.get('/mockingpets', (req, res) => {
  try {
    const pets = generateMockingPets(10); // 10 mascotas por defecto
    res.status(200).json({ status: 'success', pets });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
});

// Endpoint para obtener usuarios mock
router.get('/mockingusers', (req, res) => {
  try {
    const userCount = parseInt(req.query.count) || 5;  // Obtener el parámetro 'count' o usar 5 por defecto
    const users = generateMockingUsers(userCount);
    res.status(200).json({ status: 'success', users });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
});

// Nuevo endpoint POST /generateData para insertar usuarios y mascotas
router.post('/generateData', async (req, res) => {
  try {
    const { users = 5, pets = 10 } = req.body;  // Recibimos los parámetros desde el body (usuarios y mascotas)
    
    // Generamos los datos mock
    const generatedUsers = generateMockingUsers(users);
    const generatedPets = generateMockingPets(pets);

    // Insertamos los datos en la base de datos (asumiendo que ya tienes los modelos)
    await UserModel.insertMany(generatedUsers);  // Inserta los usuarios
    await PetModel.insertMany(generatedPets);    // Inserta las mascotas

    res.status(200).json({
      status: 'success',
      message: `Successfully generated ${users} users and ${pets} pets`,
    });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
});

export default router;
