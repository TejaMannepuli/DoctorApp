import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
constructor(){}
display=false;
show(){
  this.display=true;
}
closeform(){
  this.display=false;
}
showform=false;
show1(){
  this.showform=true;
}
closeform1(){
  this.showform=false;
}
images=[
  {name:"1282799.webp"},
  {name:"22308960-Doctor-leading-a-medical-team-at-the-hospital-Stock-Photo-doctors.jpg"},
  {name:"full.jpg"},
  {name:"slide 5.jpg"},
  {name:"Emergency-and-Urgent-Care-Centre-2.jpg"}
]
}
