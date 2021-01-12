import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProductstockComponent } from './company-productstock.component';

describe('CompanyProductstockComponent', () => {
  let component: CompanyProductstockComponent;
  let fixture: ComponentFixture<CompanyProductstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProductstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProductstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
