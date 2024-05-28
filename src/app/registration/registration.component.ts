import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  submitted = false;
  photoError = '';
  fullName = '';
  loginForm: any;

  constructor(private fb: FormBuilder,private http: HttpClient, private router: Router) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNumber: ['', [Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
    this.registrationForm.get('firstName')?.valueChanges.subscribe(() => this.updateFullName());
    this.registrationForm.get('middleName')?.valueChanges.subscribe(() => this.updateFullName());
    this.registrationForm.get('lastName')?.valueChanges.subscribe(() => this.updateFullName());
  }
  

  ngOnInit() {}

  updateFullName() {
    const firstName = this.registrationForm.get('firstName')?.value || '';
    const middleName = this.registrationForm.get('middleName')?.value || '';
    const lastName = this.registrationForm.get('lastName')?.value || '';

    this.fullName = `${firstName} ${middleName} ${lastName}`.trim(); 
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { mismatch: true };
  }

  

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file.size > 1024 * 1024) {
      this.photoError = 'File size should be under 1 MB';
    } else {
      this.photoError = '';
    }
  }

  onRegister() {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }

    const user = this.registrationForm.value;

    this.http.post('http://localhost:8080/api/users/register', user).subscribe(
      (response) => {
        console.log('User registered successfully:', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error registering user:', error);
      }
    );
  }

  onLogin() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const credentials = this.loginForm.value;

    this.http.post('http://localhost:8080/api/users/login', credentials).subscribe(
      (response) => {
        console.log('Login successful:', response);
      },
      (error) => {
        console.error('Error during login:', error);
      }
    );
  }
    
}




