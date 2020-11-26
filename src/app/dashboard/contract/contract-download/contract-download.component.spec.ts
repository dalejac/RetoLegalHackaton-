import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractDownloadComponent } from './contract-download.component';

describe('ContractDownloadComponent', () => {
  let component: ContractDownloadComponent;
  let fixture: ComponentFixture<ContractDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractDownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
