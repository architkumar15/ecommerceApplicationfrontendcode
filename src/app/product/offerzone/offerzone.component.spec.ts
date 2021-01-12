import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferzoneComponent } from './offerzone.component';

describe('OfferzoneComponent', () => {
  let component: OfferzoneComponent;
  let fixture: ComponentFixture<OfferzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
