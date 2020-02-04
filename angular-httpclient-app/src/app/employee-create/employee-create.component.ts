import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  Employee: any = [];

  @Input() employeeDetails = { id:'', name: '', email: '', phone: 0 }
  
  constructor(
    private http: HttpClient,
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit() {}

  addEmployee(dataEmployee) {

    this.restApi.createEmployee(this.employeeDetails).subscribe((data) => {
      console.log(data);
      this.Employee = data;
    },error => {
      alert(1)
      console.log(error)
    })
  }

}
