import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmergetbyidService } from 'src/app/farmergetbyid.service';
@Component({
  selector: 'app-farmergetbyid',
  templateUrl: './farmergetbyid.component.html',
  styleUrls: ['./farmergetbyid.component.css']
})
export class FarmergetbyidComponent implements OnInit {
  FarmergetbyidDetail = null;
  constructor(public farmergetbyidService : FarmergetbyidService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.loadfarmergetbyidById(this.route.snapshot.paramMap.get('id'));
  }
  loadfarmergetbyidById(id) {
    return this.farmergetbyidService.GetFarmergetbyid(id).subscribe((data: {}) =>{
      this.FarmergetbyidDetail=data;
console.log(this.FarmergetbyidDetail);
    })
  }

}
