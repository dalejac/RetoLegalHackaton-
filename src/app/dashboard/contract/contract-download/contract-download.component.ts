import { Component, OnInit } from '@angular/core';
// import * as htmlDocx from 'html-docx-js/dist/html-docx'; 
// import { saveAs } from 'file-saver';

@Component({
  selector: 'app-contract-download',
  templateUrl: './contract-download.component.html',
  styleUrls: ['./contract-download.component.scss']
})
export class ContractDownloadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // public download(): void {
  //   let htmlDocument = '<!DOCTYPE html><html><head><meta charset="utf-8"><title></title>';
  //   htmlDocument = htmlDocument + '</head><body>' + 'soy un texto' + '</body></html>';
  //   const converted = htmlDocx.asBlob(htmlDocument);
  //   saveAs(converted, 'SOY el titulo del texto' + '.docx');
  // }

}
