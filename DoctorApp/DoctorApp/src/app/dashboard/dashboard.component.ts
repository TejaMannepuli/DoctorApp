import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormsService } from '../forms.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  show=false;
formdata:any;
  count=5;
  constructor( private route:Router,private fs:FormsService){}
  ngOnInit(): void {
    this.formdata=new FormGroup({
      name:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
    })
  }
  admin(data:any){
    console.log(data)
    this.fs.adminpost(data).subscribe((res)=>{
      if(res.submit==true){
        alert(" Admin registered successfully")
      }
      else{
        alert("NOT registered")
      }
  
  
    },(err)=>{
      console.log(err);
    })
  }
  display(){
    this.show=true;
  }
  closeform(){
    this.show=false;
  }
  }
