import mongoose from 'mongoose';

const devicesSchema = new mongoose.Schema({
  brand: { type: String, unique: true },
  models: [{ type: String, unique: true }],
});

const Devices = mongoose.model('Devices', devicesSchema);
export default Devices;
