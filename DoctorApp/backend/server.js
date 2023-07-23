const express=require("express");
const cors=require("cors");
const bodyparser=require("body-parser");
const connection=require("./connection");
const doctorappointment=require("./routes/registers");
const app=express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use("/" ,doctorappointment);
const port=process.env.PORT||5000;

app.get('/',(req,res)=>{
	res.send("good");
})
app.listen(port,()=>{
	console.log("application is running on the http://localhost:5000");
});
