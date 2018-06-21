import mongoose from 'mongoose';
const Scheme = mongoose.Schema;

const profileSchema = new Schema({
    name: {type: 'String', required: true},
    profileUri: {type: 'String', required: true},
    baseValue: {type: 'Decimal', required: true},
    streamLink: {type: 'String', required: false}
});

export default mongoose.model('Profile', profileScheme);