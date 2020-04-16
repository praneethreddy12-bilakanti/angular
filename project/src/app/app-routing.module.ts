import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component'
import {StudentsComponent} from './students/students.component';
import{AboutusComponent} from './aboutus/aboutus.component'
import{ StudentDetailsComponent }  from './student-details/student-details.component'
import { from } from 'rxjs';
import { AddStudentComponent } from './add-student/add-student.component';
import { LibraryComponent } from './library/library.component';
import{LogoutComponent} from './login/logout/logout.component';
import{LoginComponent} from './login/login/login.component';

const appRoutes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'student',component:StudentsComponent
  },
  {
    path:'student-details',component:StudentDetailsComponent
  },
  {
    path:'add-student',component:AddStudentComponent
  },
  {
    path:'about',component:AboutusComponent
  },
  {
    path:'library',component:LibraryComponent

  },
  {
    path:'logout',component:LogoutComponent

  },
  {
    path:' /*',component:LoginComponent

  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { 


}
export const routingComponent=[HomeComponent,StudentsComponent,AboutusComponent,AddStudentComponent,StudentDetailsComponent]
