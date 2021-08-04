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