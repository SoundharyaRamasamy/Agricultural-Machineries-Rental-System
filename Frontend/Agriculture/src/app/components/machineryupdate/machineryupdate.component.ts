import { Component, OnInit, NgZone } from '@angular/core';
import { MachineryService } from 'src/app/machinery.service'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-machineryupdater',
  templateUrl: './machineryupdate.component.html',
  styleUrls: ['./machineryupdate.component.css']
})
export class MachineryupdateComponent implements OnInit {
  MachineryDetail = null;
  IssueArray: any = [];
  MachineryList: any = [];
  UpdateMachineryForm: FormGroup;
  
  ngOnInit() {
    this.updateForm()
  }
  constructor(
    private actRoute: ActivatedRoute,    
    public machineryservice: MachineryService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.machineryservice.GetMachinery(id).subscribe((data) => {
      this.UpdateMachineryForm = this.fb.group({
        machineid:[id],
        holder: [data.holder],
        machine: [data.machine],
        rent:[data.rent],
        phoneno:[data.phoneno]
    })
    })
  }
  updateForm(){
    this.UpdateMachineryForm = this.fb.group({
      machineid:['null'],
      holder: [''],
      machine: [''],
      rent: [''],
      phoneno: ['']
    })    
  }
  submitForm(){ 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.machineryservice.UpdateMachinery(id, this.UpdateMachineryForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/Admin-Machinerygetall-list'))
    })
  }

  searchMachinery(){
    return this.machineryservice.GetMachinery(this.UpdateMachineryForm.value.machineid).subscribe((data: {}) => {
      //this.MachineryDetail.shopid = data.machine;
      this.MachineryDetail=data;
      console.log (this.MachineryDetail);
     })
  }
  BACK(){
    this.router.navigate(['/dashboard'])
  }
}