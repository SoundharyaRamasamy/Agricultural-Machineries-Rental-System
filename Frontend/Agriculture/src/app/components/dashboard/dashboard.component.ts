import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
title='Agriculture';
  constructor(
    private route :ActivatedRoute,
    private router:Router
  ) { }
Farmer(){
  this.router.navigate(['/Admin-Farmergetall-list']);
}
Fertilizer(){
  this.router.navigate(['/Admin-Fertilizergetall-list']);
}
Machinery(){
  this.router.navigate(['/Admin-Machinerygetall-list']);
}
Back(){
  this.router.navigate(['/Home']);
}
}
