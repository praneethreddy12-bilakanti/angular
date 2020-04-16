import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { StudentsComponent } from './students/students.component';
import{RouterLink,RouterLinkActive,RouterOutlet} from '@angular/router'
import { from } from 'rxjs';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { LibraryComponent } from './library/library.component';
import { HttpClient, HttpClientModule ,HttpHeaders} from '@angular/common/http';
import{StudentServiceService} from './student-service.service';
import { LoginComponent } from './login/login/login.component';
import { LogoutComponent } from './login/logout/logout.component'
@NgModule({
  declarations: [
    AppComponent,
   routingComponent,
   StudentDetailsComponent,
   AddStudentComponent,
   LibraryComponent,
    HomeComponent,
    AboutusComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,


    
    
  ],
  providers: [
    AppRoutingModule,
    StudentServiceService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
