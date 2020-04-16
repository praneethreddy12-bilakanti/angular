import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  userDetails:Student=new Student(0," "," ");
  message:any;


  constructor(private _service:StudentServiceService) { }
  ngOnInit() {
  }
addstudent()
{

console.log("userdetails"+this.userDetails);
let message=this._service.addStudent(this.userDetails);
message.subscribe(data=>this.message=data);
console.log("message"+this.message);
}
}
