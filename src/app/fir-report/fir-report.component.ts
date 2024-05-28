import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-fir-report',
  templateUrl: './fir-report.component.html',
  styleUrls: ['./fir-report.component.css'],
})
export class FirReportComponent implements OnInit {
  firList: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadFIRs();
  }

  loadFIRs() {
    this.http.get<any[]>('http://localhost:8080/api/fir/findAll').subscribe(
      (response) => {
        this.firList = response;
      },
      (error) => {
        console.error('Error fetching FIRs:', error);
      }
    );
  }

  editFIR(fir: any) {
    this.router.navigate(['/fir-form', { id: fir.id }]);
  }

  deleteFIR(fir: any) {
    if (confirm(`Are you sure you want to delete FIR with number ${fir.firNumber}?`)) {
      this.http.delete(`http://localhost:8080/api/fir/deleteByFirNumber/${fir.firNumber}`).subscribe(
        () => {
          this.loadFIRs();
        },
        (error) => {
          console.error('Error deleting FIR:', error);
        }
      );
    }
  }

  exportToExcel() {
    const worksheet = XLSX.utils.json_to_sheet(this.firList);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'FIR Report');
    XLSX.writeFile(workbook, 'FIR_Report.xlsx');
  }
}
