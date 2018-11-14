import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCropComponent } from './single-crop.component';

describe('SingleCropComponent', () => {
  let component: SingleCropComponent;
  let fixture: ComponentFixture<SingleCropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
