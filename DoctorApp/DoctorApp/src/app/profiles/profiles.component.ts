import { Component } from '@angular/core';
import { FormsService } from '../forms.service';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent {
  appointments=true;
  searchtext:any;
  formheader:any;
  formdata:any={}
  tableData: any ={
    id:'',
    name:'',specialist:'',email:'',number:'',dob:'',address:''
  }; 
  name:any;
  constructor(private service:FormsService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(){
    this.getdatafunction();
  }
 /* delete(id:any) {
    this.service.delseller(id).subscribe((res) => {
      console.log(res.submit);
      if (res.submit == true) {
        alert("deleted successfully");
        this.getdatafunction();
      }
    },
      (err) => {
        console.log(err);
      })
  }*/
  
  showform=false;
  display(app:any){
    console.log(app.dob);
    this.showform=true;
    this.formdata={
      firstName:app.name,
      spe:app.specialist,
      email:app.email,
      phone:app.number,
      date:app.dob,
      address:app.address,
    }
    console.log(this.formdata);
  }
  formheading="Edit Profile";
  savedata(){
    console.log(this.formdata);
    this.service.uprofile(this.formdata).subscribe((res)=>{
      if(res.submit){
        alert("successfully updated")
      }
      else{
        alert("not updated")
      }
    },(err)=>{
      console.log(err.err)
    })
    
  }
  closeform(){
    this.showform=false
  }

  getdatafunction(){
    console.log("working");
    this.service.get().subscribe((response)=>{
      console.log(response.result);
    },
    (err)=>{
        alert(err.error);
    });
  }
 //add doctor
}
 