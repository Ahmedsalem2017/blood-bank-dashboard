import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermiessionsDeniedComponent } from './permiessions-denied.component';

describe('PermiessionsDeniedComponent', () => {
  let component: PermiessionsDeniedComponent;
  let fixture: ComponentFixture<PermiessionsDeniedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermiessionsDeniedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermiessionsDeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
