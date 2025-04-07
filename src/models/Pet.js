import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
  name: String,
  species: String,
  age: Number,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  
});

const PetModel = mongoose.model('Pet', petSchema);
export default PetModel;
