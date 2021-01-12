import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySaleComponent } from './company-sale.component';

describe('CompanySaleComponent', () => {
  let component: CompanySaleComponent;
  let fixture: ComponentFixture<CompanySaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
