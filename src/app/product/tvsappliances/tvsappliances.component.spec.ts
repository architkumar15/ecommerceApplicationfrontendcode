import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvsappliancesComponent } from './tvsappliances.component';

describe('TvsappliancesComponent', () => {
  let component: TvsappliancesComponent;
  let fixture: ComponentFixture<TvsappliancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvsappliancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvsappliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
