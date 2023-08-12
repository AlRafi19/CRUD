const express = require ("express")
const path = require('path');
const router = require ("./src/route/api.js")
const app = express()
const bodyParser = require ("body-parser")

// Security Middleware 

const rateLimit = require("express-rate-limit")
const helmet = require ("helmet")
const mongoSanitize = require ("express-mongo-sanitize")
const hpp = require ("hpp")
const cors = require ("cors")


// Database 

const mongoose = require("mongoose")

// Security middleware Implementation 

app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())

// Body Parser Implementation 

app.use(bodyParser.json())


// Rate Limiter Implementation 

const limiter = rateLimit({windowsMS:15*60*100, max: 100})


// MongoDB Database Connection 

const URI = "mongodb+srv://<username>:<password>@cluster0.xzrgtm1.mongodb.net/CRUD?retryWrites=true&w=majority";
const OPTIONS = { user: "testUser7777", pass: "testUser7777"};
mongoose.connect(URI, OPTIONS)
    .then(() => {
        console.log("Connection Success");
        // You can start your application or perform other operations here
    })
    .catch((error) => {
        console.error("Connection Failed:", error);
    });
    {/* or Try Async Await 
    const connectToMongoDB = async () => {
    const URI = "mongodb+srv://<username>:<password>@cluster0.xzrgtm1.mongodb.net/CRUD?retryWrites=true&w=majority";
    const OPTIONS = { user: "testUser777", pass: "testUser777", autoIndex: true };
    try {
        await mongoose.connect(URI, OPTIONS);
        console.log("Connection Success");
        // You can start your application or perform other operations here
    } catch (error) {
        console.error("Connection Failed:", error);
    }
};
connectToMongoDB();
*/}

// Attaching Front-End With BackEnd ......
// Managing Front End Routing with backend....

// Serve static files from the "client/dist" directory
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Catch-all route to serve the "index.html" file for client-side routing
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

// Managing BackEnd API Routing

app.use("/api/v1", router)

module.exports = app