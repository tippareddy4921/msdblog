const express=require("express");
const app=express();
const dotenv=require("dotenv"); 
const mongoose=require("mongoose");
const authRoute=require("./routes/Auth");
const userRoute=require("./routes/Users");
const postsRoute=require("./routes/Posts");
const catRoute=require("./routes/Categories");
const cors = require("cors")
const multer=require("multer"); 
const path = require("path");

dotenv.config();
app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:3000",
    })
);
// app.user("/images",express.static(path.join(__dirname,"/images")))

mongoose.connect(process.env.MONGO_URL,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
    // useCreateIndex:true
}
).then(console.log("connected to Mongodb"))
.catch(err=>console.log(err));

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images");
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name);
    }
});


const upload=multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded");
});



app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postsRoute);
app.use("/api/categories",catRoute);

app.listen("5000",()=>{
    console.log("Backend is running")
}
);