import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmerComponent } from './components/farmer/farmer.component';
import { FarmerService } from './farmer.service';
import { FertilizerComponent } from './components/fertilizer/fertilizer.component';
import { MachineryComponent } from './components/machinery/machinery.component';
import { FertilizerService } from './fertilizer.service';
import { MachineryService } from './machinery.service';
import { FarmergetallComponent } from './components/farmergetall/farmergetall.component';
import { FertilizergetallComponent } from './components/fertilizergetall/fertilizergetall.component';
import { FarmergetbyidComponent } from './components/farmergetbyid/farmergetbyid.component';
import { MachinerygetallComponent } from './components/machinerygetall/machinerygetall.component';
import { FarmerpostComponent } from './components/farmerpost/farmerpost.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FertilizerallComponent } from './copmponents/fertilizerall/fertilizerall.component';
import { FertilizerpostComponent } from './components/fertilizerpost/fertilizerpost.component';
import { MachinerypostComponent } from './components/machinerypost/machinerypost.component';
import { CenterpartComponent } from './components/centerpart/centerpart.component';
import { CenterComponent } from './components/center/center.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OuservicesComponent } from './components/ouservices/ouservices.component';
import { FertilizerupdateComponent } from './components/fertilizerupdate/fertilizerupdate.component';
import { MachineryupdateComponent } from './components/machineryupdate/machineryupdate.component';
import { FarmerupdateComponent } from './components/farmerupdate/farmerupdate.component';
import { AvailabilityComponent } from './components/availability/availability.component';
import { ContactusComponent } from './components/contactus/contactus.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminloginService } from './adminlogin.service';
import { ReportComponent } from './components/report/report.component';


@NgModule({
  declarations: [
    AppComponent,
    FarmerComponent,
    FertilizerComponent,
    MachineryComponent,
    FarmergetallComponent,
    FertilizergetallComponent,
    FarmergetbyidComponent,
    MachinerygetallComponent,
    FarmerpostComponent,
    FertilizerallComponent,
    FertilizerpostComponent,
    MachinerypostComponent,
    CenterpartComponent,
    CenterComponent,
    AboutusComponent,
    HomepageComponent,
    OuservicesComponent,
    FertilizerupdateComponent,
    MachineryupdateComponent,
    FarmerupdateComponent,
    AvailabilityComponent,
    ContactusComponent,
   
    DashboardComponent,
    AdminloginComponent,
    ReportComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FarmerService,FertilizerService,MachineryService,AdminloginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
