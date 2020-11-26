import { Component, OnInit } from '@angular/core';
import * as htmlDocx from 'html-docx-js/dist/html-docx'; 
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-contract-states',
  templateUrl: './contract-states.component.html',
  styleUrls: ['./contract-states.component.scss']
})
export class ContractStatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public download(): void {
    let htmlDocument = '<!DOCTYPE html><html><head><meta charset="utf-8"><title></title>';
    htmlDocument = htmlDocument + '</head><body>' + 'CONTRATO' + '</body></html>';
    const converted = htmlDocx.asBlob(htmlDocument);
    saveAs(converted, 'TITULO DE CONTRATO' + '.docx');
  }
}
