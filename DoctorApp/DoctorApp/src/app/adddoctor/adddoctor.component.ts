import { Component } from '@angular/core';
import { FormsService } from '../forms.service';
import { FormGroup ,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent {
constructor(private fs:FormsService){}
formheading="ADD DOCTOR"
formdata:any
ngOnInit(){
this.formdata=new FormGroup({
  name:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required,Validators.email]),
  specialist:new FormControl('',[Validators.required]),
  dob:new FormControl('',[Validators.required]),
  number:new FormControl('',[Validators.required]),
  address:new FormControl('',[Validators.required])
})
}
daction(data:any){
  console.log(data)
  this.fs.doctorpost(data).subscribe((res)=>{
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
}
