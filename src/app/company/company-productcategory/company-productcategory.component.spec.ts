import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProductcategoryComponent } from './company-productcategory.component';

describe('CompanyProductcategoryComponent', () => {
  let component: CompanyProductcategoryComponent;
  let fixture: ComponentFixture<CompanyProductcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProductcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProductcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
