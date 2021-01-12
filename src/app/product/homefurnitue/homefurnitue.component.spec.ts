import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomefurnitueComponent } from './homefurnitue.component';

describe('HomefurnitueComponent', () => {
  let component: HomefurnitueComponent;
  let fixture: ComponentFixture<HomefurnitueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomefurnitueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomefurnitueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
