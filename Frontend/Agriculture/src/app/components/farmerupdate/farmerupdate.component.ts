import { Component, OnInit, NgZone } from '@angular/core';
import { FarmerService } from 'src/app/farmer.service';  
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MachineryService } from 'src/app/machinery.service';
@Component({
  selector: 'app-farmerupdater',
  templateUrl: './farmerupdate.component.html',
  styleUrls: ['./farmerupdate.component.css']
})
export class FarmerupdateComponent implements OnInit {
  MachineryDetail = null;
  issueForm: FormGroup;
  FarmerList: any = [];
  UpdateFarmerForm: FormGroup;
  
  ngOnInit() {
    this.updateForm()
  }
  constructor(
    private machineryService : MachineryService,
    private actRoute: ActivatedRoute,    
    public farmerservice: FarmerService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.farmerservice.GetFarmer(id).subscribe((data) => {
      this.UpdateFarmerForm = this.fb.group({
        farmerid:[id],
        farmername: [data.farmername],
        mobileno: [data.mobileno],
        district: [data.district],
        area:[data.area],
        village:[data.village],
        requireddate:[data.requireddate],
        machineid:[data.machineid],
        rent:[data.rent],
        hours:[data.hours],
        totalrent:[data.area],
    })
    })
  }
  updateForm(){
    this.UpdateFarmerForm = this.fb.group({
      farmerid:['null'],
      farmername: [''],
      mobileno: [''],
      district: [''],
      area: [''],
      village: [''],
      requireddate: [''],
      machineid: [''],
      rent: [''],
      hours: [''],
      totalrent: [''],
    })    
  }
  submitForm(){ 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.UpdateFarmerForm.value.totalrent=this.UpdateFarmerForm.value.rent*this.UpdateFarmerForm.value.hours;
    this.farmerservice.UpdateFarmer(id, this.UpdateFarmerForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/Admin-Farmergetall-list'))
    })
  }
  SearchMachinery(){
    return this.machineryService.GetMachinery(this.issueForm.value.machineid).subscribe((data: {}) => {
      //this.MachineryDetail.rent = data.rent;
      this.MachineryDetail=data;
      console.log(this.MachineryDetail);
    })
  }
}