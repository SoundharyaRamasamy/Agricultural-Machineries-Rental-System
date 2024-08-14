import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmergetbyidComponent } from './components/farmergetbyid/farmergetbyid.component';
import { FarmerComponent } from './components/farmer/farmer.component';
import { FarmergetallComponent } from './components/farmergetall/farmergetall.component';
import { FertilizerComponent } from './components/fertilizer/fertilizer.component';
import { FertilizerallComponent } from './copmponents/fertilizerall/fertilizerall.component';
import { FertilizergetallComponent } from './components/fertilizergetall/fertilizergetall.component';
import { MachineryComponent } from './components/machinery/machinery.component';
import { MachinerygetallComponent } from './components/machinerygetall/machinerygetall.component';
import { FarmerpostComponent } from './components/farmerpost/farmerpost.component';
import { FertilizerpostComponent } from './components/fertilizerpost/fertilizerpost.component';
import { FertilizerupdateComponent } from './components/fertilizerupdate/fertilizerupdate.component';
import { MachinerypostComponent } from './components/machinerypost/machinerypost.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OuservicesComponent } from './components/ouservices/ouservices.component';
import { MachineryupdateComponent } from './components/machineryupdate/machineryupdate.component';
import { FarmerupdateComponent } from './components/farmerupdate/farmerupdate.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReportComponent } from './components/report/report.component';

const routes: Routes = [
   
  { path : 'Farmer-list/:id', component : FarmerComponent },
  { path : 'Admin-Farmer-list/:id', component : FarmergetbyidComponent},
  { path : 'Admin-Fertilizer-list/:id', component : FertilizerComponent},
  { path : 'Admin-Machinery-list/:id', component : MachineryComponent},

  { path : 'Admin-Farmergetall-list', component: FarmergetallComponent },
  { path : 'Fertilizergetall-list', component: FertilizerallComponent},
  { path : 'Admin-Fertilizergetall-list', component: FertilizergetallComponent },
  { path : 'Admin-Machinerygetall-list', component: MachinerygetallComponent },

  { path : 'Farmer-create', component: FarmerpostComponent },
  { path : 'Admin-Fertilizer-create', component: FertilizerpostComponent },
  { path : 'Admin-Machinery-create', component: MachinerypostComponent},

  { path : 'Admin-Fertilizerupdate-list/:id', component: FertilizerupdateComponent},
  { path : 'Admin-Machineryupdate-list/:id', component: MachineryupdateComponent},
  { path : 'Admin-Farmerupdate-list/:id', component: FarmerupdateComponent},
  
  { path : 'Aboutus', component: AboutusComponent},
  { path : 'Home', component: HomepageComponent},
  { path : 'Ourservices', component: OuservicesComponent},
  { path : 'Contactus', component: ContactusComponent},

  { path : 'Login', component: AdminloginComponent},
  { path : 'Dashboard', component: DashboardComponent},

  { path : 'Report', component: ReportComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
