import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
class DashboardComponent implements OnInit {


  constructor(
    private router: Router) {
  }

  ngOnInit(): void {

  }

  gotoDetail(): void {

  }
}

export default DashboardComponent