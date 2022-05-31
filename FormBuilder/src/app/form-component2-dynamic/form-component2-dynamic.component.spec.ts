import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent2DynamicComponent } from './form-component2-dynamic.component';

describe('FormComponent2DynamicComponent', () => {
  let component: FormComponent2DynamicComponent;
  let fixture: ComponentFixture<FormComponent2DynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent2DynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent2DynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
