import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSuccessDialogComponent } from './message-success-dialog.component';

describe('MessageSuccessDialogComponent', () => {
  let component: MessageSuccessDialogComponent;
  let fixture: ComponentFixture<MessageSuccessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageSuccessDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
