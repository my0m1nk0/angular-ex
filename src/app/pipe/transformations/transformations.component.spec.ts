import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationsComponent } from './transformations.component';

describe('TransformationsComponent', () => {
  let component: TransformationsComponent;
  let fixture: ComponentFixture<TransformationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransformationsComponent]
    });
    fixture = TestBed.createComponent(TransformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
