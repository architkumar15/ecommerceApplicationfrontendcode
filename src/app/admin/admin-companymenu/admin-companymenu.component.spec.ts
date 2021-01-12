import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanymenuComponent } from './admin-companymenu.component';

describe('AdminCompanymenuComponent', () => {
  let component: AdminCompanymenuComponent;
  let fixture: ComponentFixture<AdminCompanymenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompanymenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompanymenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
