require('dotenv').config()
const express = require('express')
require('./main');
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT
const cors = require('cors');
const http = require('http')
let server = http.createServer(app)
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

//Cloudnary setup

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

//Storage setup
const storage = new CloudinaryStorage({
  cloudinary: cloudinary
});

//Uploader function
const upload = multer({ storage: storage });
app.post("/uploadfile", upload.single("file"), async (req, res) => {
  // console.log(req, req.file, req.body)
  return res.json({ picture: req.file.path });
});


// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });

// const corsOpts = {
//   origin: '*',

//   methods: [
//     'GET',
//     'POST',
//   ],

//   allowedHeaders: [
//     'Content-Type',
//   ],
// };

app.use(cors());

// app.post("/uploadfile", upload.single("file"), async (req, res) => {
//   const options = {
//     use_filename: true,
//     unique_filename: false,
//     overwrite: true,
//   };
//   console.log(req.file, req)
//   try {
//     const upload = await cloudinary.uploader.upload(req.file.path, options)
//     res.send({ picture: upload.secure_url })
//   } catch (error) {
//     console.error(error);
//   }
// })


const user = require('./routes/userRoutes');


// app.use(cors('*'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/user', user);


const service = server.listen(process.env.PORT || port, function (err) {
  if (err) {
    console.log("Error in starting server", err);
  }
  console.log(`Node app listening to port : ${process.env.PORT || port}`);
});

