import { Injectable } from '@angular/core';
import {ContractGenerator} from './contract-generator';

import { Packer } from 'docx';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ContractGeneratorService {

  constructor() { }

  downloadContract(contractInfo: any): void {
    const contractGenerator = new ContractGenerator();
    const doc = contractGenerator.create([
      contractInfo
    ]);

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, 'Contrato.docx');
      console.log('Document created successfully');
    });
  }
}
