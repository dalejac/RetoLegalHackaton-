import { Injectable } from '@angular/core';
import {ContractGenerator} from './contract-generator';
import {achievements, education, experiences, skills} from './contract-data';

import { Packer } from 'docx';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ContractGeneratorService {

  constructor() { }

  downloadContract(): void {
    const contractGenerator = new ContractGenerator();
    const doc = contractGenerator.create([
      experiences,
      education,
      skills,
      achievements
    ]);

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, 'example.docx');
      console.log('Document created successfully');
    });
  }
}
