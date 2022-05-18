import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadStepperComponent } from './file-upload-stepper.component';

describe('FileUploadStepperComponent', () => {
  let component: FileUploadStepperComponent;
  let fixture: ComponentFixture<FileUploadStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
