const express = require("express");
const https = require("https");
const fs = require("fs");
const { exec } = require("child_process");
const dotenv = require("dotenv");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const excelToJson = require('convert-excel-to-json');
const fsextra = require("fs-extra");
const serveindex = require('serve-index');
const Student = require("./Models/StudentModal");
const jimp = require("jimp");


//Routes
const userRoute = require("./Routes/UserRoute");
const studentRoute = require("./Routes/studentRoute");
const instituteRoute = require("./Routes/instituteRoute");
const inputRoute = require("./Routes/inputRoute");
const fontRoute = require("./Routes/fontRoute");
const dataRoute = require("./Routes/dataRoute");
const imageRoute = require("./Routes/ImageRoute");
const fieldRoute = require("./Routes/fieldsRoute");
const signRoute = require("./Routes/signRoute");
const downloadRoute = require("./Routes/downloadRoute");

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req.body.Name);
    let date = new Date().toISOString().slice(0, 10);
    let name = "Printing";
    let path = `image/${date}/${name}/`;
    fsextra.mkdirsSync(path);
    cb(null, path);
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname.replace(/\\/g, "/") + ".jpeg");
  },
});
const upload = multer({ storage: diskStorage });

// const MONGODB_URI = "mongodb://localhost:27017/GJaai";
const MONGODB_URI = "mongodb+srv://farmsell:farmsell@cluster0.mh36s.mongodb.net/GJaai?retryWrites=true&w=majority";


const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

dotenv.config({
  path: "./config.env",
});

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}


// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/jpeg" ||
//     file.mimetype === "image/png"
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };




app.use("/image", express.static(path.join(__dirname, "image")));
app.use("/bg", express.static(path.join(__dirname, "bg")));

app.use('/folders', express.static('image'), serveindex('image', { icons: true }));
app.use('/bg', express.static('bg'), serveindex('bg', { icons: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});


app.use(userRoute);
app.use(downloadRoute);
app.use(studentRoute);
app.use(instituteRoute);
app.use(inputRoute);
app.use(fontRoute);
app.use(dataRoute);
app.use(imageRoute);
app.use(fieldRoute);
app.use(signRoute);


// app.post('/remove-image-bg', upload.single('bgremover'), (req, res, next) =>{
//   try{
//     const host = req.hostname;

//     if (!req.file) {
//       res.status(404).json({
//         status: false,
//         message: 'Please provide a image'
//       })
//     }
//       const photo = req.file.path.replace(/\\/g, "/");
//       console.log(photo);

//       let formdata = new FormData();
//       formdata.append("sync", "1");
//       formdata.append("image_file", photo)
//       app.post("https://techhk.aoscdn.com/api/tasks/visual/segmentation", formdata,  )
//   }catch(error){
//     res.status(404).json({

//     })

//   }
// })

app.get('/', (req, res) => {
  res.render('home');
})

app.post('/bgremove' ,upload.single('image'), (req, res, next) =>{
try{	
  if(!req.file){
    res.status(400).send("Please provide a file");
  }



let photo = req.file.path;

let bgurl = 'bg/'+ req.file.filename;

exec(`rembg i ${photo} ${bgurl}`,(err, stdout, stderr) =>
{
if(err){
	console.log(err);
  res.status(400).send(err);
}
res.status(200).json({stdout: stdout, stderr: stderr, file: "http://192.168.3.108:8081/"+bgurl});
console.log(stdout);
})


console.log(`image:- ${photo}`);
}catch(error){
res.status(500).send(error.message);
}

});


app.post('/img', upload.single('file'), (req, res, next) => {
  const host = req.hostname;

  if (!req.file) {
    res.status(404).json({
      status: false,
      message: 'Please provide a image'
    })
  }
  const photo = req.file.path.replace(/\\/g, "/");
  console.log(photo);

  res.status(200).json({
    photo: req.protocol + "://" + "192.168.3.108" + ":" + "8081" + "/" + photo
  })

})

//Get A Excel file And SAve to Database

app.post('/excel/student', upload.single('file'), (req, res, next) => {
  const host = req.hostname;

  if (!req.file) {
    res.status(404).json({
      status: false,
      message: 'Please provide a excel sheet'
    })
  }
  const result = excelToJson({
    sourceFile: req.file.path,
    columnToKey: {
      '*': '{{columnHeader}}'
    }
  });

  Student.create(result.Sheet1)
    .then((success) => {
      res.status(200).json({
        // photo: req.hostname + ":8080/"+photo
        status: true,
        result: success
      })
    }).catch((error) => {
      res.status(404).json({
        message: error.message
      })
    })
  //const photo = req.file.path.replace(/\\/g, "/");
  console.log(result);



})



app.use((err, req, res, next) => {
  console.log(err);
  const status = err.status || 500;
  const message = err.message;
  const data = err.data;

  res.status(status).json({
    message: message,
    data: data,
    error: err,
  });
});


app.all("*", (req, res, next) => {
  res.status(404).json({
    message: "No Route found"
  })
});


const sslserver = https.createServer({
  key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem"))
})

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((result) => {
    const server = app.listen(8081);
    const io = require("./socket").init(server);

    io.on('connection', () => {
      console.log("User connected");
    })
  })
  .catch((err) => {
    console.log(err);
  });
