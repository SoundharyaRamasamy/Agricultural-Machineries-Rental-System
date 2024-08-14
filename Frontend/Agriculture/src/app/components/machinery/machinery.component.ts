import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MachineryService } from 'src/app/machinery.service';
@Component({
  selector: 'app-machinery',
  templateUrl: './machinery.component.html',
  styleUrls: ['./machinery.component.css']
})
export class MachineryComponent implements OnInit {
  MachineryDetail = null;
  constructor(public machineryService : MachineryService,
    private route: ActivatedRoute,
    private router: Router) { }
  
  ngOnInit(): void {
    this.loadmachineryById(this.route.snapshot.paramMap.get('id'));
  }
  loadmachineryById(id) {
    return this.machineryService.GetMachinery(id).subscribe((data: {}) =>{
      this.MachineryDetail=data;
console.log(this.MachineryDetail);
    })
  }
  deletemachinery() {
    this.machineryService.delete(this.MachineryDetail.machineid)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['Admin-Machinerygetall-list']);
        },
        error => {
          console.log(error);
        });
  }
}
