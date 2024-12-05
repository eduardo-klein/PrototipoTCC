// models/user.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    progresso: {
      type: Array, // Array que armazenará as seções abertas
      default: [],  // Valor inicial vazio
    },
  },
  {
    collection: 'usuarios', // Define explicitamente a coleção existente
  }
);

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;