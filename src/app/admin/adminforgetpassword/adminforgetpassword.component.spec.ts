import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminforgetpasswordComponent } from './adminforgetpassword.component';

describe('AdminforgetpasswordComponent', () => {
  let component: AdminforgetpasswordComponent;
  let fixture: ComponentFixture<AdminforgetpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminforgetpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminforgetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
