const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const catRoute = require("./routes/categories");
const multer = require('multer')
const cors = require('cors')
dotenv.config()
const app = express();
const path =require('path'); 
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(console.log("successfully connected!")).catch(err => console.log(err))
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
})

const upload = multer({ storage: storage })
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("Image uploaded successfully!")
})
app.use(cors())
app.use('/images', express.static('images'));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute)
app.use('/api/post', postRoute);
app.use("/api/category", catRoute);

app.use(express.static(path.join(__dirname,"/client/build")));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'/client/build','index.html'));
});
app.listen(process.env.PORT || 5000, () => {
    console.log("backend is running on ");
})