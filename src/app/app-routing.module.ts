import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FirFormComponent } from './fir-form/fir-form.component';
import { FirReportComponent } from './fir-report/fir-report.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'fir-form', component: FirFormComponent },
  { path: 'fir-report', component: FirReportComponent },
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
  { path: '**', redirectTo: '/registration' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
