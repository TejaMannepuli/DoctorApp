import { Component } from '@angular/core';
import { FormsService } from '../forms.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {
searchtext:any;
appointment=true;
formheading="Reschedule";
formdata:any;
tableData: any ={
  id:'',
  name:'',email:'',number:'',date:'',doctor:''
}; 
count:any;
constructor(private fs:FormsService){}
ngOnInit() {
  this.appointmentget()
}
delete(id:any) {
  this.fs.delapp(id).subscribe((res) => {
    console.log(res.submit);
    if (res.submit == true) {
      alert("deleted successfully");
      this.appointmentget()
    }
  },
    (err) => {
      console.log(err);
    })
}
appointmentget(){
  this.fs.appointmentget().subscribe((response:any)=>{
    this.tableData=response.result;
    console.log(this.tableData);
  },
  (err)=>{
      alert(err.error)
  })
}
showform=false;
display(app:any){
  console.log(app.name)
this.showform=true;
this.formdata={
  name:app.name,
  email:app.email,
  phone:app.phone,
  date:app.date,
  doctor:app.doctor,
}
}
update(data:any) {
  console.log(data)
  let id=data.name;
  this.fs.apupdate(data,id).subscribe((res)=>{
   if(res.submit==true){
     alert("updated successfully");
     this.appointmentget()
   }
  },(err)=>{
   console.log(err);
  }
  ) 
 
      
}
closeform(){
  this.showform=false
}
savedata(){
  console.log(this.formdata);
  this.fs.auprofile(this.formdata).subscribe((res)=>{
    if(res.submit==true){
      alert("successfully updated")
      this.appointmentget()
    }
    else{
      alert("not updated")
    }
  },(err)=>{
    console.log(err.err)
  })
  
}
}
