import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticMarketComponent } from './analytic-market.component';

describe('AnalyticMarketComponent', () => {
  let component: AnalyticMarketComponent;
  let fixture: ComponentFixture<AnalyticMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
