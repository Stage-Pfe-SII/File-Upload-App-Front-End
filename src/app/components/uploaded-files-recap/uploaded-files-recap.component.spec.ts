import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadedFilesRecapComponent } from './uploaded-files-recap.component';

describe('UploadedFilesRecapComponent', () => {
  let component: UploadedFilesRecapComponent;
  let fixture: ComponentFixture<UploadedFilesRecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadedFilesRecapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadedFilesRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
