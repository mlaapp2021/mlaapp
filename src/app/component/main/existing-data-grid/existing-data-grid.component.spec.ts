import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingDataGridComponent } from './existing-data-grid.component';

describe('ExistingDataGridComponent', () => {
  let component: ExistingDataGridComponent;
  let fixture: ComponentFixture<ExistingDataGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingDataGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
