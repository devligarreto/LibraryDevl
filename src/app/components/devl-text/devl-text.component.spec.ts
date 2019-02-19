import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevlTextComponent } from './devl-text.component';

describe('DevlTextComponent', () => {
  let component: DevlTextComponent;
  let fixture: ComponentFixture<DevlTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevlTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevlTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
