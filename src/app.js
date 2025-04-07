import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import mocksRouter from './routes/mocks.router.js';

dotenv.config();

const app = express();
const PORT = 3000;

// Conectar a MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB conectado');
  } catch (err) {
    console.error('Error al conectar a MongoDB:', err);
    process.exit(1); // Salir si no se puede conectar
  }
};

// Llamamos a la función para conectar a MongoDB
connectDB();

app.use(express.json());

// Usamos el router de mocks
app.use('/api/mocks', mocksRouter);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

export default app;
