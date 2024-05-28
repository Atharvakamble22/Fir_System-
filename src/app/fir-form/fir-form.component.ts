import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fir-form',
  templateUrl: './fir-form.component.html',
  styleUrls: ['./fir-form.component.css'],
})
export class FirFormComponent implements OnInit {
  firForm: FormGroup;
  submitted = false;
  firId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute 
  ) {
    this.firForm = this.fb.group({
      district: ['', Validators.required],
      policeStation: ['', Validators.required],
      act: ['', Validators.required],
      firNumber: [{ value: this.generateFirNumber(), disabled: true }], 
      dateAndTimeOfFIR: ['', Validators.required],
      generalDiaryReferenceNumber: ['', Validators.required],
      typeOfInformation: ['', Validators.required],
      placeOfOccurrence: ['', Validators.required],
      complainantFullName: ['', Validators.required],
      complainantDOB: ['', Validators.required],
      complainantNationality: ['', Validators.required],
      complainantAadhaarNumber: ['', [Validators.pattern(/^\d{12}$/)]], 
      complainantOccupation: ['', Validators.required],
      complainantMobileNumber: ['', [Validators.pattern(/^\d{10}$/)]],
      complainantAddress: ['', Validators.required],
      suspectName: ['', Validators.required],
      suspectAddress: ['', Validators.required],
      enquiryOfficerName: ['', Validators.required],
      enquiryOfficerRank: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.firId = params.get('id');
      if (this.firId) {
        this.loadFIRById(this.firId);
      }
    });
  }

  loadFIRById(firId: string) {
    this.http.get(`http://localhost:8080/api/fir/findById/${firId}`).subscribe(
      (response: any) => {
        this.firForm.patchValue(response); 
      },
      (error) => {
        console.error('Error loading FIR:', error);
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.firForm.invalid) {
      return;
    }

    const url = this.firId
      ? `http://localhost:8080/api/fir/update/${this.firId}`
      : `http://localhost:8080/api/fir/addFIR`;

    this.http.post(url, this.firForm.getRawValue()).subscribe(
      (response) => {
        console.log('FIR saved:', response);
        this.router.navigate(['/fir-report']);
      },
      (error) => {
        console.error('Error saving FIR:', error);
      }
    );
  }

  generateFirNumber(): string {
    return 'FIR-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  }
}
