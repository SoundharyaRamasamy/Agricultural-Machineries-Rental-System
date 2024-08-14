import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-centerpart',
  templateUrl: './centerpart.component.html',
  styleUrls: ['./centerpart.component.css']
})
export class CenterpartComponent implements OnInit {

  constructor(public _router:Router) { }

  ngOnInit(): void {
  }

}
