import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  captcha: string;

  constructor(private fb: FormBuilder, private router: Router) {
    this.captcha = this.generateCaptcha();
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      captcha: ['', Validators.required]
    });
  }

  ngOnInit() {}

  generateCaptcha(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  }

  onLogin() {
    this.submitted = true;

    if (this.loginForm.controls['captcha'].value !== this.captcha) {
      alert('Incorrect Captcha');
      return;
    }

    if (this.loginForm.valid) {
      const username = this.loginForm.controls['username'].value;
      const password = this.loginForm.controls['password'].value;

      if (username === 'atharvakamble64@gmail.com' && password === 'Atharva@22') { 
        alert('Login successful');
        this.router.navigate(['/fir-form']);
      } else {
        alert('Invalid Username or Password');
      }
    }
  }
}

