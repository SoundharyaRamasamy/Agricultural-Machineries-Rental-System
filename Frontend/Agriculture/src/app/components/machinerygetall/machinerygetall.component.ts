import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MachinerygetallService } from 'src/app/machinerygetall.service';
@Component({
  selector: 'app-machinerygetall',
  templateUrl: './machinerygetall.component.html',
  styleUrls: ['./machinerygetall.component.css']
})
export class MachinerygetallComponent implements OnInit {
  public machineryFilterFG = this.fb.group({
    'machine': this.fb.control('')
    
  })
Machinery :any = [];
  MachineryList: {};
  MachineryInitialList: any = [];
 ngOnInit(): void {
  this.loadMachineriesList()
  }
  constructor(
    public machinerygetallService : MachinerygetallService,
    public fb: FormBuilder
  ) { }
  loadMachineriesList() {
    return this.machinerygetallService.GetMachineries().subscribe((data: {}) => {
      this.MachineryList = data;
      this.MachineryInitialList = this.MachineryList;
      console.log(this.loadMachineriesList);
    })
  }

  public onFilter() {
    this.MachineryList = this.MachineryInitialList;
    // Movie Name filter
    
    // Subscriber Name filter
    if(this.machineryFilterFG?.get('machine')?.value) {
      this.MachineryList = this.MachineryInitialList.filter((MachineryList) => {
        let listSName = MachineryList.machine.toLowerCase()
        let fcSName = this.machineryFilterFG.get('machine')?.value.toLowerCase()
        return listSName.includes(fcSName);
      })
    }
   
  }


}
