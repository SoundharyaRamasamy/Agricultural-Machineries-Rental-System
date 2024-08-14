import { Component } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Agriculture';
  constructor(
    private route :ActivatedRoute,
    private router:Router ){}
    HOME(){
      this.router.navigate(['/Home']);
    }
    ABOUTUS(){
      this.router.navigate(['/Aboutus']);
    }
    OURSERVICES(){
      this.router.navigate(['/Ourservices']);
    }
    AVAILABILITY(){
      this.router.navigate(['/Fertilizergetall-list']);
    }
    CONTACTUS(){
      this.router.navigate(['/Contactus']);
    }
    LOGIN(){
      this.router.navigate(['/Login']);
    }
}

  