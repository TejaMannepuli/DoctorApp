import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  formtitle="RegistrationForm";
  formData:any;
  constructor(private fs:FormsService){}
  close:boolean=false;
  ngOnInit():void{
this.formData=new FormGroup({
  fname:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required,Validators.email]),
  gender:new FormControl('',[Validators.required]),
  date:new FormControl('',[Validators.required]),
  phone:new FormControl('',[Validators.required]),
  uname:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)
    ,Validators.pattern('^[a-zA-Z]+$')]),
  cpassword:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)
      ,Validators.pattern('^[a-zA-Z]+$')]),
  address:new FormControl('',[Validators.required])
  })
}
action(data:any){
  console.log(data)
  this.fs.registerpost(data).subscribe((res)=>{
    if(res.submit==true){
      alert("registered successfully")
    }
    else{
      alert("NOT SAVED")
    }


  },(err)=>{
    console.log(err);
  })
}
showBook(){

}
  };

