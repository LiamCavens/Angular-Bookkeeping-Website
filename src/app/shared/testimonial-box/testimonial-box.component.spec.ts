import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialBoxComponent } from './testimonial-box.component';

describe('TestimonialBoxComponent', () => {
  let component: TestimonialBoxComponent;
  let fixture: ComponentFixture<TestimonialBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
