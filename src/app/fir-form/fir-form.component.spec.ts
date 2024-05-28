import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirFormComponent } from './fir-form.component';

describe('FirFormComponent', () => {
  let component: FirFormComponent;
  let fixture: ComponentFixture<FirFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
