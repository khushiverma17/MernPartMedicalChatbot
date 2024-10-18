const mongoose = require("mongoose")
const mongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Connection successful");

  
  } catch (e) {
    console.log("Connection error:", e);
    return false;
  }
};

module.exports = mongodb;
