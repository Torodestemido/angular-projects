import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToroComponent } from './toro.component';

describe('ToroComponent', () => {
  let component: ToroComponent;
  let fixture: ComponentFixture<ToroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
