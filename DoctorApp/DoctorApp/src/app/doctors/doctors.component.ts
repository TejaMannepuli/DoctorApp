import { Component } from '@angular/core';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent {

  searchtext:any;
  appointment=true;
  formheading="Reschedule";
  formdata:any;
  tableData: any ={
    id:'',
    name:'',specialist:'',email:'',number:'',dob:'',address:''
  }; 
  count:any;
  constructor(private fs:FormsService){}
  ngOnInit() {
    this.getdatafunction();
  }
  delete(id:any) {
    this.fs.delseller(id).subscribe((res) => {
      console.log(res.submit);
      if (res.submit == true) {
        alert("deleted successfully");
        this.getdatafunction();
      }
    },
      (err) => {
        console.log(err);
      })
  }
  getdatafunction(){
    this.fs.get().subscribe((response:any)=>{
      this.tableData=response.result;
      console.log(this.tableData);
    },
    (err)=>{
        alert(err.error);
    })
  }
  showform=false;
  display(app:any){
    console.log(app.date);
    this.showform=true;
    this.formdata={
      name:app.name,
      email:app.email,
      phone:app.number,
      date:app.date,
      address:app.address,
    }
    console.log(this.formdata);
  }
  savedata(){
    console.log(this.formdata);
    this.fs.auprofile(this.formdata).subscribe((res)=>{
      if(res.submit==true){
        alert("successfully updated")
        this.getdatafunction();
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
  }