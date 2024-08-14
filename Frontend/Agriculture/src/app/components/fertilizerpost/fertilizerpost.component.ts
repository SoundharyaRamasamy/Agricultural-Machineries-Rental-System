import { Component, NgZone, OnInit } from '@angular/core';
import { FertilizergetallService } from 'src/app/fertilizergetall.service';  
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fertilizerpost',
  templateUrl: './fertilizerpost.component.html',
  styleUrls: ['./fertilizerpost.component.css']
})
export class FertilizerpostComponent implements OnInit {
  submitted = false;
  issueForm: FormGroup;
  IssueArr: any = [];
  fertilizerService: any;
  ngOnInit() {
    this.addFertilizer();
  }
  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public fertilizergetallService: FertilizergetallService
  ) {}
  addFertilizer() {
    this.issueForm = this.fb.group({
      areas: ['',Validators.required],
      shopname: ['',Validators.required],
      date:['',Validators.required],
      availableproducts: ['',Validators.required],
      contact: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.minLength(10), Validators.maxLength(10)]],
    });
  }
  submitForm() {
    this.fertilizergetallService.CreateFertilizer(this.issueForm.value).subscribe((res) => {
      console.log('Issue added!');
      this.ngZone.run(() => this.router.navigateByUrl('Admin-Fertilizergetall-list'));
    });
  }
 
 // onSubmit() {
   // this.submitted = true;
   // console.log(this.issueForm.value);
  //  }

  onSubmit() {
    this.submitted = true;
    if (!this.issueForm.valid) {
      alert("Please fill all the required fields");
      return false;
    } else {
      return console.log(this.issueForm.value);
    }
  

  }
  
 
}
