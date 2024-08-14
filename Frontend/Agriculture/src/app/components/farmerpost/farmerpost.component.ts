import { Component, NgZone, OnInit } from '@angular/core';
import { FarmergetallService } from 'src/app/farmergetall.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MachineryService } from 'src/app/machinery.service';
@Component({
  selector: 'app-farmerpost',
  templateUrl: './farmerpost.component.html',
  styleUrls: ['./farmerpost.component.css']
})
export class FarmerpostComponent implements OnInit {
  submitted = false;
  MachineryDetail = null;
  issueForm: FormGroup;
  IssueArr: any = [];
  ngOnInit() {
    this.addFarmer();
  }
  constructor(
    public machineryService : MachineryService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public farmergetallService: FarmergetallService
  ) {}
  addFarmer() {
    this.issueForm = this.fb.group({
      farmername: ['',Validators.required],
      mobileno: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      district: ['',Validators.required],
      area: ['',Validators.required],
      village: ['',Validators.required],
      requireddate: ['',Validators.required],
      machineid: ['',Validators.required],
      rent: ['',Validators.required],
      hours: ['',Validators.required],
      totalrent: ['']
    });
  }
  submitForm() {
    this.issueForm.value.totalrent=this.issueForm.value.rent*this.issueForm.value.hours;
    this.farmergetallService.CreateFarmer(this.issueForm.value).subscribe((res) => {
      console.log('Issue added!');
      this.ngZone.run(() => this.router.navigateByUrl('Home'));
      alert("Request successfully sent");
    });
  }
  SearchMachinery(){
    return this.machineryService.GetMachinery(this.issueForm.value.machineid).subscribe((data: {}) => {
      //this.MachineryDetail.rent = data.rent;
      this.MachineryDetail=data;
      console.log(this.MachineryDetail);
    })
  }

  onSubmit() {
    this.issueForm.value.totalrent=this.issueForm.value.rent*this.issueForm.value.hours;
    this.submitted = true;
    if (!this.issueForm.valid) {
      alert("Please fill all the required fields");
      return false;
    } 
    
    else {
      return console.log(this.issueForm.value);
    }
  

  }
  

}
