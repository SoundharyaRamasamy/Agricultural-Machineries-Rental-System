import { Component, OnInit } from '@angular/core';
import { FertilizerallService } from 'src/app/fertilizerall.service';
@Component({
  selector: 'app-fertilizerall',
  templateUrl: './fertilizerall.component.html',
  styleUrls: ['./fertilizerall.component.css']
})
export class FertilizerallComponent implements OnInit {
  FertilizerallList : any = [];
  ngOnInit(): void {
    this.loadFertilizer()
  }
  
  constructor(
    public fertilizerallService: FertilizerallService
  ){}
  loadFertilizer() {
    return this.fertilizerallService.GetFertilizer().subscribe((data: {}) => {
      this.FertilizerallList = data;
      console.log(this.FertilizerallList);
    })
  }
}
