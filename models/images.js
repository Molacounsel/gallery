const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// create a schema for our database
var imageSchema = new Schema({
    name: String,
    path: String,
    size: Number,
    date: {type: Date, default: Date() }

});

// convert the schema into a Model
let Image = mongoose.model('Image', imageSchema);

module.exports = Image;