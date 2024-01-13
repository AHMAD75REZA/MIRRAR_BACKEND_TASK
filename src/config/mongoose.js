const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Mirrar_development');

const db = mongoose.connection;

db.once('open', function () {
    console.log('conneted to database:: MongoDB');
});

// module.exports.connect = () => {
//     mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//     mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
// };

module.exports = db;