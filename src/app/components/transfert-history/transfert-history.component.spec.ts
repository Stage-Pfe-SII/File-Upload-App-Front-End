import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertHistoryComponent } from './transfert-history.component';

describe('TransfertHistoryComponent', () => {
  let component: TransfertHistoryComponent;
  let fixture: ComponentFixture<TransfertHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfertHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfertHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
