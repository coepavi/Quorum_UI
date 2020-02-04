import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})

export class EmployeeEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  employeeData: any = [];
  empid: any;

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() {}

  // Update employee data
  findEmployee() {
    {
      this.restApi.getEmployee(this.empid).subscribe(data => {
        console.log(data);
	this.employeeData = data[0];
	//this.router.navigate(['/employees-list'])
      })
    }
  }

}
