import { Component, OnInit, NgZone } from '@angular/core';
import { FertilizerService } from 'src/app/fertilizer.service'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fertilizerupdater',
  templateUrl: './fertilizerupdate.component.html',
  styleUrls: ['./fertilizerupdate.component.css']
})
export class FertilizerupdateComponent implements OnInit {
  FertilizerDetail = null;
  IssueArray: any = [];
  FertilizerList: any = [];
  UpdateFertilizerForm: FormGroup;
  
  ngOnInit() {
    this.updateForm()
  }
  constructor(
    private actRoute: ActivatedRoute,    
    public fertilizerservice: FertilizerService,
  
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.fertilizerservice.GetFertilizer(id).subscribe((data) => {
      this.UpdateFertilizerForm = this.fb.group({
        shopid:[id],
        areas: [data.areas],
        shopname: [data.shopname],
        date: [data.date],
        availableproducts:[data.availableproducts],
        contact:[data.contact]
    })
    })
  }
  updateForm(){
    this.UpdateFertilizerForm = this.fb.group({
      shopid:['null'],
      areas: [''],
      shopname: [''],
      date: [''],
      availableproducts: [''],
      contact: ['']
    })    
  }
  submitForm(){ 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.fertilizerservice.Updatefertilizer(id, this.UpdateFertilizerForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/Admin-Fertilizergetall-list'))
    })
  }

  searchFertilizer(){
    return this.fertilizerservice.GetFertilizer(this.UpdateFertilizerForm.value.shopid).subscribe((data: {}) => {
      //this.FertilizerDetail.shopid = data.shopname;
      this.FertilizerDetail=data;
      console.log (this.FertilizerDetail);
     })
  }
  BACK(){
    this.router.navigate(['/dashboard'])
  }

}