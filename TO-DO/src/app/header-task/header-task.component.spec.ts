import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTaskComponent } from './header-task.component';

describe('HeaderTaskComponent', () => {
  let component: HeaderTaskComponent;
  let fixture: ComponentFixture<HeaderTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
