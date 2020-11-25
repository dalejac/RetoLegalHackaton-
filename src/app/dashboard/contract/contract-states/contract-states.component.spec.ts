import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractStatesComponent } from './contract-states.component';

describe('ContractStatesComponent', () => {
  let component: ContractStatesComponent;
  let fixture: ComponentFixture<ContractStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractStatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
