import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevlSelectComponent } from './devl-select.component';

describe('DevlSelectComponent', () => {
  let component: DevlSelectComponent;
  let fixture: ComponentFixture<DevlSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevlSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevlSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
