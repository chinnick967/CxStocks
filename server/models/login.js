import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const loginSchema = new Schema({
  username: { type: 'String', required: true },
  encryptedPassword: { type: 'String', required: true },
  email: { type: 'String', required: false },
  lastSignIn: { type: Date, required: true, default: Date.now },
  active: { type: Boolean, required: true, default: true }
}, {timestamps: true});

export default mongoose.model('Login', loginSchema);