import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxSizeReachedComponent } from './max-size-reached.component';

describe('MaxSizeReachedComponent', () => {
  let component: MaxSizeReachedComponent;
  let fixture: ComponentFixture<MaxSizeReachedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxSizeReachedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxSizeReachedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
