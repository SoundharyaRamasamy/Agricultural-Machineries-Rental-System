import { Component, VERSION } from '@angular/core';
import { OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from 'src/app/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  FarmerList: any = [];
  constructor(private papa: Papa,
    private reportService: ReportService,
    private route: ActivatedRoute,
    private router: Router) { }
  download() {
    const Farmerdata = [{
    farmername: String['farmername'],
    mobileno: Number['mobileno'],
    district: String['district'],
    area: String['area'],
    village: String['village'],
    machineid: Number['machineid'],
    rent: Number['rent'],
    hours: Number['hours'],
    totalrent: Number['totalrent'],
      }];
  
     var csv = this.papa.unparse(Farmerdata);
    var csvData = new Blob(['\uFEFF' + csv], {
      type: 'text/csv;charset=utf-8;',
    });
    var downloadUrl = document.createElement('a');
    downloadUrl.download = 'Report sample.csv';
    downloadUrl.href = window.URL.createObjectURL(csvData);
    downloadUrl.click();
  }
  ngOnInit(): void {
    this.loadFarmerList();
  }
  loadFarmerList() {
    return this.reportService.GetFarmers().subscribe((data: {}) => {
      this.FarmerList = data;
      console.log(this.FarmerList);
    })
  }
}