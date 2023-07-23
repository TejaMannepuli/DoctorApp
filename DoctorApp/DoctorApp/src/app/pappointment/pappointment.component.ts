import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { FormsService } from '../forms.service';
@Component({
  selector: 'app-pappointment',
  templateUrl: './pappointment.component.html',
  styleUrls: ['./pappointment.component.css']
})
export class PappointmentComponent {
  constructor(private fs:FormsService){}
  formData:any
  ngOnInit(){
  this.formData=new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email,
      Validators.pattern('^[a-zA-Z0-9]+@')]),
    phone:new FormControl('',[Validators.required]),
    date:new FormControl('',[Validators.required]),
    doctor:new FormControl('',[Validators.required]),
    
  })
}
logaction(data:any){
  console.log(data)
  this.fs.appointmentpost(data).subscribe((res)=>{
    if(res.submit==true){
      alert("Appointment registered successfully")
    }
    else{
      alert("Appointment not register")
    }


  },(err)=>{
    console.log(err);
  })
}
  
}

