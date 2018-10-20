import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchUpcomingComponent } from './launch-upcoming.component';

describe('LaunchUpcomingComponent', () => {
  let component: LaunchUpcomingComponent;
  let fixture: ComponentFixture<LaunchUpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchUpcomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
