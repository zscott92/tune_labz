import mongoose from "mongoose";
 
mongoose.connect(
  process.env.ATLAS_DB,
    { 
      useNewUrlParser: true
    }
  );
 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB database")
});
 
module.exports = db;
