import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';
import { Observable,Subject } from "rxjs";  
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
students:any;

  constructor(private _service:StudentServiceService) { }
  ngOnInit() {
  let resp=this._service.getStudents();
  console.log("response:"+resp);
  resp.subscribe(data=>this.students=data);
  }




}