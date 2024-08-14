import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FertilizerallService } from 'src/app/fertilizerall.service';

@Component({
  selector: 'app-fertilizerall',
  templateUrl: './fertilizerall.component.html',
  styleUrls: ['./fertilizerall.component.css']
})
export class FertilizerallComponent implements OnInit {
  public fertilizerFilterFG = this.fb.group({
    'date': this.fb.control(''),
    'availableproducts': this.fb.control('')
    })
  FertilizerInitialList: any = [];
  FertilizerList : any = [];
  ngOnInit(): void {
    this.loadFertilizers()
  }
  
  constructor(
    public fertilizerallService: FertilizerallService,
    public fb: FormBuilder
  ){}
  loadFertilizers() {
    return this.fertilizerallService.GetFertilizer().subscribe((data: {}) => {
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
  
    if(this.fertilizerFilterFG?.get('availableproducts')?.value) {
      this.FertilizerList = this.FertilizerInitialList.filter((FertilizerList) => {
        let listSName = FertilizerList.availableproducts.toLowerCase()
        let fcSName = this.fertilizerFilterFG.get('availableproducts')?.value.toLowerCase()
        return listSName.includes(fcSName);
      })
    }
    if(this.fertilizerFilterFG?.get('date')?.value && this.fertilizerFilterFG?.get('areas')?.value) {
      this.FertilizerList = this.FertilizerInitialList;
      this.FertilizerList = this.FertilizerInitialList.filter((FertilizerList) => {
        let listSName = FertilizerList.availableproducts.toLowerCase()
        let fcSName = this.fertilizerFilterFG.get('availableproducts')?.value.toLowerCase()
        return this.fertilizerFilterFG.get('date').value == FertilizerList.date && listSName.includes(fcSName);
      })
    }
  }

}
