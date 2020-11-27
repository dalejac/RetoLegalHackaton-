import { Injectable } from '@angular/core';
import {ContractGenerator} from './contract-generator';

import { Packer } from 'docx';
import { saveAs } from 'file-saver';
import {Contract} from '../../../dashboard/model/contract.model';

@Injectable({
  providedIn: 'root'
})
export class ContractGeneratorService {

  constructor() { }

  downloadContract(contract: Contract): void {
    const contractGenerator = new ContractGenerator();
    const doc = contractGenerator.create(contract);

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, 'Contrato.docx');
      console.log('Document created successfully');
    });
  }
}
