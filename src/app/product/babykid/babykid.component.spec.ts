import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabykidComponent } from './babykid.component';

describe('BabykidComponent', () => {
  let component: BabykidComponent;
  let fixture: ComponentFixture<BabykidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabykidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabykidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
