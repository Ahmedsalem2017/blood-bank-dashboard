import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedarchivedComponent } from './feedarchived.component';

describe('FeedarchivedComponent', () => {
  let component: FeedarchivedComponent;
  let fixture: ComponentFixture<FeedarchivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedarchivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedarchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
