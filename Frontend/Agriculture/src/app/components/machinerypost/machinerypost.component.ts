import { Component, NgZone, OnInit } from '@angular/core';
import { MachinerygetallService } from 'src/app/machinerygetall.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-machinerypost',
  templateUrl: './machinerypost.component.html',
  styleUrls: ['./machinerypost.component.css']
})
export class MachinerypostComponent implements OnInit {
  submitted = false;
  issueForm: FormGroup;
 
  IssueArr: any = [];
  ngOnInit() {
    this.addMachinery();
  }
  MachineDetail = null;
    constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public machinerygetallService: MachinerygetallService,
  ) {}
  addMachinery() {
    this.issueForm = this.fb.group({
      holder: ['',Validators.required],
      machine: ['',Validators.required],
      rent: ['',Validators.required],
      phoneno: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.minLength(10), Validators.maxLength(10)]],
    });
  }
  submitForm() {
    this.machinerygetallService.CreateMachinery(this.issueForm.value).subscribe((res) => {
      console.log('Issue added!');
      this.ngZone.run(() => this.router.navigateByUrl('Admin-Machinerygetall-list'));
    });
  }


  //onSubmit() {
   // this.submitted = true;
    
    //   console.log(this.issueForm.value);
    //}
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