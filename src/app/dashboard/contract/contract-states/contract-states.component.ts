import { Component, OnInit } from '@angular/core';
import { Packer } from 'docx';
import { saveAs } from 'file-saver';

import { buildContract } from './contract-data';
import { DocumentCreator } from './contract-generator';

@Component({
  selector: 'app-contract-states',
  templateUrl: './contract-states.component.html',
  styleUrls: ['./contract-states.component.scss']
})
export class ContractStatesComponent {

  download(): void{
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create([
      buildContract,
    ]);

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, 'contract.docx');
    });
  }


}
