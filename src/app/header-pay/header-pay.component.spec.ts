import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPayComponent } from './header-pay.component';

describe('HeaderPayComponent', () => {
  let component: HeaderPayComponent;
  let fixture: ComponentFixture<HeaderPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
