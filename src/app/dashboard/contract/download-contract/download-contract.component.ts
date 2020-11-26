import { Component, OnInit } from '@angular/core';
// import { Packer } from 'docx';
// import { saveAs } from 'file-saver';

// import { buildContract } from './contract-data';
// import { DocumentCreator } from './contract-generator';

@Component({
  selector: 'app-download-contract',
  templateUrl: './download-contract.component.html',
  styleUrls: ['./download-contract.component.scss']
})
export class DownloadContractComponent implements OnInit {

    // download(): void{
  //   const documentCreator = new DocumentCreator();
  //   const doc = documentCreator.create([
  //     tittle,
  //     summary
  //   ]);

  //   Packer.toBlob(doc).then(blob => {
  //     saveAs(blob, 'contract.docx');
  //   });
  // }


  constructor() { }

  ngOnInit(): void {
  }

}
