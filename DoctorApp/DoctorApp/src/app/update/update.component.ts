import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
 /* formdata:any;
  Birdsales:birdsales[];
  searchdata:any;
  searchid:any;
  row='';
  destroyid=0;
  gettedupdatedata:any={};
  sl;
  data={};
  updatedata={};
  constructor(private route:ActivatedRoute,private router:Router) { }

  @ViewChild('destroy',{static:false}) m;
  ngOnInit() {
    this.checklogin();
    this.formdata=new FormGroup({
      id:new FormControl(""),
      noofchicks:new FormControl(""),
      amount:new FormControl(""),
      date:new FormControl("")
    });
    this.searchdata=new FormGroup({
      fromdate:new FormControl(""),
      todate:new FormControl("")
    });
    this.searchid=new FormGroup({
      search:new FormControl("")
    })
    this.route.paramMap.subscribe(params=>{
      this.sl=params.get('id');
      if(this.sl){
        document.getElementById("eggsales").style.display="none";
        document.getElementById("eggsales-update").style.display="block";
        this.getupdatedata();
      }
      else{
        document.getElementById("eggsales").style.display="block";
        document.getElementById("eggsales-update").style.display="none";
      }
    });
    this.Getbirdsales();
  }
  checklogin(){
    if(sessionStorage.length==0){
      this.router.navigate(["/"]);
    }
  }
  ngOnDestroy(){
    if(this.destroyid){
      clearInterval(this.destroyid);
    }
  }
  birdsale(data){
    this.service.birdsaleservice(data).subscribe((response)=>{
      if(response.submit==true){
        alert("Data Submitted");
        this.formdata.reset();
        this.Getbirdsales();
      }
      else{
        alert("Data not submitted");
        this.formdata.reset();
      }
    },
    (error)=>{
      alert(error.err);
      this.formdata.reset();
    });
  }

  Getbirdsales(){
    this.crudservice.birdsaleservice().subscribe((response)=>{
      this.Birdsales=response.result;
    },
    (error)=>{
      alert(error.err);
    });
  }
  searchbirdsales(data){
    this.destroyinterval();
    this.service.searchbirdsalesservice(data).subscribe((response)=>{
      if(response.result.length>0){
        this.Birdsales=response.result;
        this.searchdata.reset();
        this.row='';
      }
      else{
        this.Birdsales=response.result;
        this.row="No Data Exist";
        this.searchdata.reset();
      }
      
    },
    (error)=>{
      alert(error.err);
    });
  }

  searchiddata(data){
    this.destroyid=setInterval(()=>{
      if(!this.m.nativeElement.value){
        this.Getbirdsales();
        this.row='';
      }
    },500);
    this.service.searchidservice(data).subscribe((response)=>{
      if(response.result.length>0){
        this.Birdsales=response.result;
      }
      else{
        this.Birdsales=response.result;
        this.row="No Data Exist";
      }
    },
    (error)=>{
      alert(error.err);
    });
  }

  destroyinterval(){
    if(this.destroyid){
      clearInterval(this.destroyid);
    }
  }
  getupdatedata(){
    this.data={id:this.sl};
    this.mainservice.getupdatedbirdservice(this.data).subscribe((response)=>{
      this.gettedupdatedata=response.result[0];
      this.updatedata={
        id:this.sl,
        numberofchicks:this.gettedupdatedata.NoofChicks,
        amount:this.gettedupdatedata.Amount,
        date:this.gettedupdatedata.Date
      };
    },
    (error)=>{
      alert(error.err);
    });
  }

  Updateeggsales(){
    this.mainservice.Updatebirdsalesservice(this.updatedata).subscribe((response)=>{
      if(response.submit==true){
        alert("Updated Successfully");
        this.router.navigate(['/navbar/BirdsSales']);

      }
      else{
        alert("Not Updated")
      }
    },
    (error)=>{
      alert(error.err);
    });
  }*/
}
 
