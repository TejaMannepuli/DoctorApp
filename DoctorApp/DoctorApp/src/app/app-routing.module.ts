import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PatientpageComponent } from './patientpage/patientpage.component';
import { PappointmentComponent } from './pappointment/pappointment.component';
import { DoctorviewComponent } from './doctorview/doctorview.component';
import { ErrorComponent } from './error/error.component';
import { UpdateComponent } from './update/update.component';
import { AdddoctorComponent } from './adddoctor/adddoctor.component';
import { AboutsComponent } from './abouts/abouts.component';
import { securityGuard } from './security.guard';
import { DoctorsComponent } from './doctors/doctors.component';
const routes: Routes = [
  {path:"",redirectTo:"/homepage",pathMatch:"full"},
  {path:"homepage",component:HomepageComponent},
  {path:"login",component:LoginComponent,canActivate:[securityGuard]},
  {path:"register",component:RegisterComponent},
  {path:"abouts",component:AboutsComponent},
  {path:"update",component:UpdateComponent},
  {path:"mainpage",component:MainpageComponent,
  
children:[
  {path:"dashboard",component:DashboardComponent},
  {path:"bookappointment",component:BookappointmentComponent},
  {path:"appointments",component:AppointmentsComponent},
  {path:"profiles",component:ProfilesComponent},
 {path:"adddoctor",component:AdddoctorComponent},
 {path:"doctors",component:DoctorsComponent}
]},
{path:"patientpage",component:PatientpageComponent,
children:[
  {path:"pappointment",component:PappointmentComponent},
  {path:"doctorview",component:DoctorviewComponent},
]},
{path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
