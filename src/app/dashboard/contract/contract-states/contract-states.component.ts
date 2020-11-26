import { Component, OnInit } from '@angular/core';
import * as htmlDocx from 'html-docx-js/dist/html-docx'; 
import { saveAs } from 'file-saver';
import {ContractGeneratorService} from '../../../core/services/files/contract-generator.service';

@Component({
  selector: 'app-contract-states',
  templateUrl: './contract-states.component.html',
  styleUrls: ['./contract-states.component.scss']
})
export class ContractStatesComponent implements OnInit {

  constructor(private contractGeneratorService: ContractGeneratorService) { }

  ngOnInit(): void {
  }

  public download(): void {
    this.contractGeneratorService.downloadContract();
  }
}
