import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchPipe } from './search.pipe';
import { PappointmentComponent } from './pappointment/pappointment.component';
import { PatientpageComponent } from './patientpage/patientpage.component';
import { DoctorviewComponent } from './doctorview/doctorview.component';
import { ErrorComponent } from './error/error.component';
import { UpdateComponent } from './update/update.component';
import { FormsService } from './forms.service';
import { AdddoctorComponent } from './adddoctor/adddoctor.component';
import { AboutsComponent } from './abouts/abouts.component';
import { ContactComponent } from './contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DoctorsComponent } from './doctors/doctors.component';
@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    DashboardComponent,
    BookappointmentComponent,
    AppointmentsComponent,
    ProfilesComponent,
    PatientpageComponent,
    PappointmentComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    SearchPipe,
    DoctorviewComponent,
    ErrorComponent,
    UpdateComponent,
    AdddoctorComponent,
    AboutsComponent,
    ContactComponent,
    DoctorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [FormsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
