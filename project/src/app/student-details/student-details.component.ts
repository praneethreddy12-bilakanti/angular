import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  students:any;

  constructor(private _service:StudentServiceService) { }
  ngOnInit() {
  let resp=this._service.getStudents();
  console.log("response:"+resp);
  resp.subscribe(data=>this.students=data);
  }



}
