import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FertilizergetallService } from 'src/app/fertilizergetall.service';
@Component({
  selector: 'app-fertilizergetall',
  templateUrl: './fertilizergetall.component.html',
  styleUrls: ['./fertilizergetall.component.css']
})
export class FertilizergetallComponent implements OnInit {
  
  public fertilizerFilterFG = this.fb.group({
    'date': this.fb.control(''),
    'areas': this.fb.control('')
    })
  FertilizerList : any = [];
 FertilizerInitialList: any = [];
  ngOnInit(): void {
    this.loadFertilizers()
  }
constructor(
  public fertilizergetallService: FertilizergetallService,
  public fb: FormBuilder
){}
loadFertilizers(){
  return this.fertilizergetallService.GetFertilizers().subscribe((data: {}) => {
    this.FertilizerList = data;
    this.FertilizerInitialList = this.FertilizerList;
    console.log(this.FertilizerList);
  })
}

public onFilter() {
  this.FertilizerList = this.FertilizerInitialList;
  // Movie Name filter
  if(this.fertilizerFilterFG?.get('date')?.value) {
    this.FertilizerList = this.FertilizerInitialList.filter((FertilizerList) => {
      return this.fertilizerFilterFG.get('date').value == FertilizerList.date;
    })
  }

  if(this.fertilizerFilterFG?.get('areas')?.value) {
    this.FertilizerList = this.FertilizerInitialList.filter((FertilizerList) => {
      let listSName = FertilizerList.areas.toLowerCase()
      let fcSName = this.fertilizerFilterFG.get('areas')?.value.toLowerCase()
      return listSName.includes(fcSName);
    })
  }
  if(this.fertilizerFilterFG?.get('date')?.value && this.fertilizerFilterFG?.get('areas')?.value) {
    this.FertilizerList = this.FertilizerInitialList;
    this.FertilizerList = this.FertilizerInitialList.filter((FertilizerList) => {
      let listSName = FertilizerList.areas.toLowerCase()
      let fcSName = this.fertilizerFilterFG.get('areas')?.value.toLowerCase()
      return this.fertilizerFilterFG.get('date').value == FertilizerList.date && listSName.includes(fcSName);
    })
  }
}

}
