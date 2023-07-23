import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private http:HttpClient) { }
  public gget():Observable<any>{
    console.log("working");
    return this.http.get("http://localhost:5000/getdataapi");
  }
  public get():Observable<any>{
    console.log("working");
    return this.http.get("http://localhost:5000/dapi");
  }
  public deletservice(data:any):Observable<any>{
    console.log(data)
    return this.http.post("http://localhost:5000/deleteapi",data)
  }
  public registerpost(regdata:any):Observable<any>{
    console.log(regdata)
    return this.http.post("http://localhost:5000/registerapi",regdata)
  }
  public appointmentpost(appointdata:any):Observable<any>{
    return this.http.post("http://localhost:5000/appointmentapi",appointdata)
  }
  public appointmentget():Observable<any>{
    return this.http.get("http://localhost:5000/appgetapi")
  }
  public login(lid:any):Observable<any>{
    return this.http.post("http://localhost:5000/loginad",lid)
  }
  public userlogin(ulid:any):Observable<any>{
    return this.http.post("http://localhost:5000/userloginad",ulid)
  }
  public doctorpost(doctordata:any):Observable<any>{
    console.log(doctordata)
    return this.http.post("http://localhost:5000/dapi",doctordata) 

}
//profile data deleted
public delseller(pid:any):Observable<any>{
  return this.http.delete("http://localhost:5000/deluser"+"/"+pid);
 }
//appointment updayed
public apupdate(newdata:any,id:any):Observable<any>{
  return this.http.put("http://localhost:3000/update"+"/"+id,newdata);
 }
 public delapp(aid:any):Observable<any>{
  return this.http.delete("http://localhost:5000/delappointapi"+"/"+aid);
 }
public adminpost(admindata:any):Observable<any>{
  console.log(admindata)
  return this.http.post("http://localhost:5000/adminapi",admindata) 

}
public uprofile(updata:any):Observable<any>{
  console.log(updata)
  return this.http.post("http://localhost:5000/updateapi",updata)
}
public auprofile(aupdata:any):Observable<any>{
  console.log(aupdata)
  return this.http.post("http://localhost:5000/aupdateapi",aupdata)
}
}