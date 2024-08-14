import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmerService } from 'src/app/farmer.service'; 
@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {
  FarmerDetail = null;
  constructor(public farmerService : FarmerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.loadfarmerById(this.route.snapshot.paramMap.get('id'));
  }
  loadfarmerById(id) {
    return this.farmerService.GetFarmer(id).subscribe((data: {}) =>{
      this.FarmerDetail=data;
console.log(this.FarmerDetail);
    })
  }

}
