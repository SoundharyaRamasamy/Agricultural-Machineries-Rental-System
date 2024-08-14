import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FertilizerService } from 'src/app/fertilizer.service';
@Component({
  selector: 'app-fertilizer',
  templateUrl: './fertilizer.component.html',
  styleUrls: ['./fertilizer.component.css']
})
export class FertilizerComponent implements OnInit {
  FertilizerDetail = null;
  constructor(public fertilizerService : FertilizerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.loadfertilizerById(this.route.snapshot.paramMap.get('id'));
  }
  loadfertilizerById(id) {
    return this.fertilizerService.GetFertilizer(id).subscribe((data: {}) =>{
      this.FertilizerDetail=data;
console.log(this.FertilizerDetail);
    })
  }
  deletefertilizer() {
    this.fertilizerService.delete(this.FertilizerDetail.shopid)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['Admin-Fertilizergetall-list']);
        },
        error => {
          console.log(error);
        });
  }
}
