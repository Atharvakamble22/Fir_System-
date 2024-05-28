import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirReportComponent } from './fir-report.component';

describe('FirReportComponent', () => {
  let component: FirReportComponent;
  let fixture: ComponentFixture<FirReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
