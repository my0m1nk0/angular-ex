import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWaybindingComponent } from './two-waybinding.component';

describe('TwoWaybindingComponent', () => {
  let component: TwoWaybindingComponent;
  let fixture: ComponentFixture<TwoWaybindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoWaybindingComponent]
    });
    fixture = TestBed.createComponent(TwoWaybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
