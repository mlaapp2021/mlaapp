import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalAndRegulatoryComponent } from './legal-and-regulatory.component';

describe('LegalAndRegulatoryComponent', () => {
  let component: LegalAndRegulatoryComponent;
  let fixture: ComponentFixture<LegalAndRegulatoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalAndRegulatoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalAndRegulatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
