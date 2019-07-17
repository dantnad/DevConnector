// =============================================================================
// Requirements
// =============================================================================
// 3.- database initialization
const mongoose = require('mongoose');
// 4.- require config module
const config = require('config');
// =============================================================================
// Get information from external file
// =============================================================================
// 5.- get the mongoURI from default.json
const db = config.get('mongoURI');

// =============================================================================
// NOT IN CLASS: Fix for deprecation warning collection.ensureindex
// =============================================================================
mongoose.set('useCreateIndex', true);


// =============================================================================
// Database connection
// =============================================================================
// 6.- Create an asyncronous function called connectDB
const connectDB = async () => {
  // 7.- Attempt to connect to the database
  try{
    // 8.- Send request to Atlas through mongoose
    await mongoose.connect(db, { useNewUrlParser: true })
    // 8.- If successful this will generate a console log
    console.log('MongoDB Connected')
  }catch(err){
    // 9.- If the connection fails, get the error and display it
    console.error(err);
    // 9.- Stop the server. Exit process with failure
    process.exit(1);
  }
}

// 10.- Export the function to be used on main app (Go back to server.js)
module.exports = connectDB
