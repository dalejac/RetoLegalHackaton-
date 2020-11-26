import { TestBed } from '@angular/core/testing';

import { ContractGeneratorService } from './contract-generator.service';

describe('WordGeneratorService', () => {
  let service: ContractGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
