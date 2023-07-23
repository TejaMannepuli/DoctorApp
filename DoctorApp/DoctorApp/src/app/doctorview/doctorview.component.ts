import { Component } from '@angular/core';
import { FormsService } from '../forms.service';
@Component({
  selector: 'app-doctorview',
  templateUrl: './doctorview.component.html',
  styleUrls: ['./doctorview.component.css']
})
export class DoctorviewComponent {
appointments=true;
  searchtext:any;
  formheader:any;
  tableData: any ={
    id:'',
    name:'',specialist:''
  }; 
  count:any;
  constructor(private service:FormsService){}
  ngOnInit() {
    this.getdatafunction()
  }
  getdatafunction(){
    this.service.get().subscribe((response:any)=>{
      this.tableData=response.result;
      console.log(this.tableData);
    },
    (err)=>{
        alert(err.error)
    })
  }
}

