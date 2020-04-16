import { Injectable, NgModule } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Observable, pipe } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  configUrl:string = 'http://localhost:9090/students';
  
  constructor(private _http:HttpClient) {
     console.log(this.configUrl)
  }
   getStudents()
     {
      return this._http.get("http://localhost:9090/students");
    }
 addStudent(student)
 {
   console.log("student"+student)
   return this._http.post("http://localhost:9090/addstudent",student,{responseType:'text ' as 'json'});
   
 }


}
