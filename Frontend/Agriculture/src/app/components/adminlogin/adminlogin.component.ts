import { Component, OnInit, NgZone } from '@angular/core';
import { AdminloginService } from 'src/app/adminlogin.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  issueForm: FormGroup;
  IssueArr: any = [];
  ngOnInit() {
    this.addLogin();
  }
  LoginDetail = null;
  constructor (public adminloginService : AdminloginService,
    private route :ActivatedRoute,
    private router:Router,
    public fb: FormBuilder,
    private ngZone: NgZone,
   ){ }
   addLogin() {
    this.issueForm = this.fb.group({
      username:[''],
      pwd:[''],
      
    });
  }

  
  login(){
    console.log(this.issueForm)
    return this.adminloginService.GetLogin(this.issueForm.value).subscribe((data: {}) => {
      this.LoginDetail = data;
      if (this.LoginDetail != null&&this.LoginDetail.username==this.issueForm.value.username && this.LoginDetail.pwd==this.issueForm.value.pwd){
         this.router.navigateByUrl('/Dashboard');
         alert("Welcome");
      }else{
        alert("Invalid user id and password")
      }
       
     })
  
  }
 
}