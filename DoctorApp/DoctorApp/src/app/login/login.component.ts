import { Component } from '@angular/core';
import { FormsService } from '../forms.service';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  export class LoginComponent {
  formtitle="LoginForm";
    formdata:any;
    constructor(private route:Router,private fap:FormsService) { }
    ngOnInit() {
      this.formdata=new FormGroup({
        name:new FormControl(""),
        password:new FormControl(""),
        aduser:new  FormControl(""),
      });
    }
  
  action(data:any){
      console.log(data.aduser);
      if(data.aduser==="Admin" ){
        this.fap.login(data).subscribe((res)=>{
          if(res.submit==true){
            alert("Admin login successfully")
            this.route.navigate(["/mainpage/dashboard"])
          }
        })
  
        
      }
      else{
        if(data.aduser==="User" ){
          this.fap.userlogin(data).subscribe((res)=>{
            if(res.submit==true){
              alert("user login successfully")
              this.route.navigate(['patientpage/pappointment'])
      }
    })
  }
  }
  }
  }
  
