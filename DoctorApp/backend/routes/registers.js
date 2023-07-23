const express=require("express");
const connection=require("../connection");
const router=express.Router();

/*router.get('/getdataapi',(req,res)=>{
 connection.query("Select * from profiles ",(err,result)=>{
  if(err){
    res.send({
      error:err,
    });
    console.log(err);
  }
  else{
    res.send({
      date:result,
    })
    console.log(result);
    console.log("working");
  }
 });
});*/
router.get('/dapi',(req,res)=>{
  connection.query("Select * from profiles ",(err,result)=>{
   if(err){
     res.send({
       error:err,
     });
     console.log(err);
   }
   else{
     res.send({
       result:result,
     })
     console.log(result);
     console.log("working");
   }
  });
 });
router.post('/deleteapi',(req,res)=>{
  connection.query("Select * from profiles WHERE name=?",req.body,(err,result)=>{
   if(err){
     res.send({
       error:err,
     })
   }
   else{
     res.send({
       result:result,
     })
   }
  });
 });
 //admin data sending
 router.post('/adminapi',(req,res)=>{
  connection.query("insert into admini set?",[req.body],(err,result)=>{
    if(err) throw err;
    else{
      res.send({submit:true,})
    }
  })
 })
//register data sending
router.post('/registerapi',(req,res)=>{
  connection.query("insert into  register set?",[req.body],(err,result)=>{
   if(err) throw err;
   else{
     res.send({submit:true,})
   }
  });
 });
 //appointment data sending
 router.post('/appointmentapi',(req,res)=>{
  connection.query("insert into  appointment set?",[req.body],(err,result9)=>{
   if(err) throw err;
   else{
     res.send({submit:true,})
   }
  });
 }); 
 router.post('/loginad',(req,res)=>{
  const {name,password}=req.body;
  console.log(name,password);
  connection.query("select * from admini where name=? and password=?",[name,password],(err,result3)=>{
   if(err) throw err;
   else if(result3.length>0){
    res.send({submit:true,});
   }
   else{
     res.send({submit:false,});
   }
  });
 }); 
 router.post('/userloginad',(req,res)=>{
  const {name,password}=req.body;
  console.log(name,password);
  connection.query("select * from register where uname=? and password=?",[name,password],(err,result3)=>{
   if(err) throw err;
   else if(result3.length>0){
    res.send({submit:true,});
   }
   else{
     res.send({submit:false,});
   }
  });
 }); 
 //apppointment data getting
 router.get('/appgetapi',(req,res)=>{
  connection.query("Select * from appointment",(err,result)=>{
   if(err){
     res.send({
       error:err,
     })
   }
   else{
     res.send({
       result:result,
     })
   }
  });
 });
 //appointment delete
 router.delete("/delappointapi/:id", function (req, res) {
  let id = req.params.id;
  console.log(id)
  connection.query("delete  from appointment where id=?", [id], (err, res3) => {
      if (err) {
          res.send({ message: err });
      }
      else {
          res.send({ submit: true, message: "deleted successfull" });

      }
    });
});
 //doctor data posted
 router.post('/dapi',(req,res)=>{
  connection.query("insert into  profiles set?",[req.body],(err,result)=>{
   if(err) throw err;
   else{
     res.send({submit:true,})
   }
  });
 });
 //delete doctor profile
 router.delete("/deluser/:delid", function (req, res) {
  let id = req.params.delid;
  connection.query("delete  from profiles where id=?", [id], (err, res3) => {
      if (err) {
          res.send({ message: err });
      }
      else {
          res.send({ submit: true, message: "deleted successfull" });

      }
    });
});
//updated profiles
router.put("/update/:id", function (req, res) {
  let id = req.params.upid;
  let name = req.body.name;
  let specialist=req.body.specialist;
  let email = req.body.email;
  let number=req.body.number;
  let dob=req.body.dob;
  let address=req.body.address;
  connection.query("update  profiles set name=?,specialist=?,email=?,number=?,dob=?,address=? where name=?", [name,specialist,email,number,dob,address,id], (err, result3) => {
      if (err) {
          res.send({ message: err });
      }
      else {
          res.send({ submit: true });
      }
    });
});
//update 1
router.post('/updateapi',(req,res)=>{
	connection.query("update profiles set name=?,specialist=?,email=?,number=?,dob=?,address=? where id=?",[req.body.name,req.body.specialist,req.body.email,req.body.number,req.body.dob,req.body.address,req.body.id],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				submit:true
			});
		}
	});
});
//update 2
router.post('/aupdateapi',(req,res)=>{
  console.log(req.body)
	connection.query("update appointment set name=?,email=?,phone=?,date=?,doctor=? where  id=?",[req.body.name,req.body.email,req.body.phone,req.body.date,req.body.doctor,req.body.id],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
      console.log(error);
		}
		else{
			res.send({
				submit:true
			});
		}
	});
});

module.exports=router;