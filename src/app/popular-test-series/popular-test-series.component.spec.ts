import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTestSeriesComponent } from './popular-test-series.component';

describe('PopularTestSeriesComponent', () => {
  let component: PopularTestSeriesComponent;
  let fixture: ComponentFixture<PopularTestSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularTestSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularTestSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
