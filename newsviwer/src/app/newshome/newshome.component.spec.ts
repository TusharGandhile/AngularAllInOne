import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewshomeComponent } from './newshome.component';

describe('NewshomeComponent', () => {
  let component: NewshomeComponent;
  let fixture: ComponentFixture<NewshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
