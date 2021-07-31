const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, 
        {
            useNewUrlParser: true, 
            useCreateIndex: true,
            //useUnifiedTopology option removes support for several connection options
            //that are no longer relevant with the new topology engine:
            //autoReconnect
            //reconnectTries
            //reconnectInterval
            useUnifiedTopology: true, 
            //useFindAndModify: true --if we would like to modify the data
        });
        console.log("MongoDB connected");
};

module.exports = connectDB;
// mongoose.connect(url, { useNewUrlParser: true }, (err, client) => {
//   db.on('error', console.error.bind(console, 'connection error:'));
//   db.once('open', function() {
//     // we're connected!
//   });

//   // Storing a reference to the database so you can use it later
//   db = client.db(dbName);
//   const users = db.collection('users').find({});
//   console.log(`Connected MongoDB: ${url}`);
//   console.log(`Database: ${dbName}`);
//   users.forEach(iterateFunc, errorFunc)
// })