// const express = require("express");
// require('dotenv').config()
// const mongoose = require("mongoose");
// const bodyParser = require('body-parser');
// const router = require('./routes/route')
// const app = express();
// app.use(bodyParser.json());
// port=process.env.PORT||3000
// app.use(bodyParser.urlencoded({ extended: true }));

// const uri = process.env.uri;
// mongoose.connect(uri);



// // Get the default connection
// const db = mongoose.connection;

// // Event handlers for Mongoose connection
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connected to MongoDB database');
 
//   // Now you can define and use your models here
// });

// app.get('/', (req,res)=>{
//   res.status(200).json({message: "hello i m still online if u need u should be ask a question"})
// })

// app.route('/api', router)




// app.listen(port,()=>{
//     console.log(`port runing on ==>http://localhost:${port}`)
// });

const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");
const router = require('./routes/route');
const app = express();
const port = process.env.PORT || 2000;

const uri = process.env.uri;
mongoose.connect(uri);

// Get the default connection
const db = mongoose.connection;

// Event handlers for Mongoose connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB database');
    // Now you can define and use your models here
});

app.get('/', (req, res) => {
    res.status(200).json({ message: "hello, I'm still online. If you need anything, feel free to ask." });
});

// Mount router middleware (here we need to add app.use instead router.use)
app.use('/api', router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});






