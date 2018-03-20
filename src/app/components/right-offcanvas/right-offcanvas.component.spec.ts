import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightOffcanvasComponent } from './right-offcanvas.component';

describe('RightOffcanvasComponent', () => {
  let component: RightOffcanvasComponent;
  let fixture: ComponentFixture<RightOffcanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightOffcanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightOffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
