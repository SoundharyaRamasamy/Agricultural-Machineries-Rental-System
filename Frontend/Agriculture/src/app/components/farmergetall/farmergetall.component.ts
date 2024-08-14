import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FarmergetallService } from 'src/app/farmergetall.service';
@Component({
  selector: 'app-farmergetall',
  templateUrl: './farmergetall.component.html',
  styleUrls: ['./farmergetall.component.css']
})
export class FarmergetallComponent implements OnInit {
  public farmerFilterFG = this.fb.group({
    'requireddate': this.fb.control(''),
    'district': this.fb.control('')
  })
  FarmerList: any = [];
  FarmerInitialList: any = [];
  ngOnInit(): void {
    this.loadFarmersList()
  }
  constructor(
    public farmergetallService: FarmergetallService,
    public fb: FormBuilder
  ) { }
  loadFarmersList() {
    return this.farmergetallService.GetFarmers().subscribe((data: {}) => {
      this.FarmerList = data;
      this.FarmerInitialList = this.FarmerList;
      console.log(this.loadFarmersList);
    })
  }
  public onFilter() {
    this.FarmerList = this.FarmerInitialList;
    // Movie Name filter
    if(this.farmerFilterFG?.get('requireddate')?.value) {
      this.FarmerList = this.FarmerInitialList.filter((FarmerList) => {
        return this.farmerFilterFG.get('requireddate').value == FarmerList.requireddate;
      })
    }
    // Subscriber Name filter
    if(this.farmerFilterFG?.get('district')?.value) {
      this.FarmerList = this.FarmerInitialList.filter((FarmerList) => {
        let listSName = FarmerList.district.toLowerCase()
        let fcSName = this.farmerFilterFG.get('district')?.value.toLowerCase()
        return listSName.includes(fcSName);
      })
    }
    if(this.farmerFilterFG?.get('requireddate')?.value && this.farmerFilterFG?.get('district')?.value) {
      this.FarmerList = this.FarmerInitialList;
      this.FarmerList = this.FarmerInitialList.filter((FarmerList) => {
        let listSName = FarmerList.district.toLowerCase()
        let fcSName = this.farmerFilterFG.get('district')?.value.toLowerCase()
        return this.farmerFilterFG.get('requireddate').value == FarmerList.requireddate && listSName.includes(fcSName);
      })
    }
  }

  

}
