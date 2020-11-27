import { Component, OnInit } from '@angular/core';
import {ContractGeneratorService} from '../../../core/services/files/contract-generator.service';
import {Contract} from '../../model/contract.model';

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
    const contractTest: Contract = {
    generalInfoSection: {
      interestedArea: 'Lorem',
        contractType: 'Lorem',
        personType: 'legal',
        personFullName: 'Mayra Rodriguez',
        personId: '202020202020',
        personMainAddress: 'Barrio Gilmar',
        chamberOfCommerce: 'Bogotá',
        legalRepresentativeName: 'Laura Sanchez',
        legalRepresentativeId: '123456',
        supplierName: 'Laboratoria',
        supplierId: '99999999'
    },
    contractPriceSection:
    {
        ivaIsApplied: false,
        contractPrice: 10000,
        contractPriceInLetters: 'Diez Millones',
        unitPrice: 100,
        unitPriceInLetters: 'Cien',
    },
    payMethodSection: {
      anotherPaymentMethodDescr: '25 % del valor del CONTRATO, correspondiente a la suma de Millon  M/cte ($ 10000000) IVA incluido, por concepto de Lorem. ',
      isWithRetainer: false,
        isWithMonthlyPaymentUponDelivery: false,
        isAnotherPaymentMethod: true,
        isWithOnlyPaymentUponDelivery: false,
      retainerPrice: 45,
      retainerPriceInLetters: 'Cuarenta y cinto',
      retainerPrc: 20,
      retainerDate: '20 de Diciembre del 2020',
      uponDeliveryPrice: 78,
      uponDeliveryPriceInLetters: 'Setenta y Ocho',
      uponDeliveryPricePrc: 10,
      isPriceInUsd: true,
    },
    durationSection: {
      contractDuration: '5 meses',
    },
    guaranteeSection: {
      isGuaranteeApplied: true,
        guaranteeAppliedOptions: {
            salariesAndSocialBenefits: false,
            contractualCivilLiability: true,
            goodHandlingOfTheAdvance: false,
            complianceWithTheContract: true,
            qualityOfTheGoodOrService: false,
        }
    },
    dateSection: {
      contractSubscription: 'Lorem',
    },
    filesSection: {
      generateConfidentialityAgreement: true,
    },
    contractObjectiveSection:
    {
        purposeOfTheContract: 'trading',
        tradingOf: 'Carros',
        tradingAndDistributionOf: 'Pañuelos',
        unitNumbers: 2000,
        requireCommercialOffer: false,
        commercialOfferDate: '24 de Diciembre, del 2020',
    },
    deliverySection: {
      requireDeliveryDate: true,
          deliveryDate: 'Lorem',
    },
    clausesSection: {
      requirePersonalDataTreatmentClause: true,
      requireCyberSecurityClause: true,
    },
    obligationsSection: {
      isSupplierDirectManufacturer: false,
          supplierGuaranteeDelivery: true,
          isSupplierAssumeWarehousing: false,
          arePeriodicReportsAgreed: true,
          periodicReportAgreement: '5 meses',
          returnMaxTimeAgreement: '1 año',
          supplierHaveToPresentDisinfectionCertificate: false,
          isWorkScheduleAgreedWithSupplier: false,
          supplierNeedAccessToConfidentialInfo: false,
    },
        coordinationAndFollowingSection: {
            supplierInfo: {
                name: 'Mayra',
                lastname: 'Rodriguez',
                telephone: '321313',
                telephoneExt: '545',
                phoneNumber: 'Lore55m',
                email: 'mayra@gmail.com',
                address: 'Gilmar',
                city: 'Bogota',
            },
            interCoordinatorInfo: {
                name: 'Paula',
                lastname: 'Lenis',
                telephone: '545156',
                telephoneExt: '4545',
                phoneNumber: '456456',
                email: 'pau@gmail.com',
                address: 'Chico',
                city: 'Bogota',
            }
        },
      adjunctSection: {
        requireContentOfDeliveryLocations: true,
      }
    };
    this.contractGeneratorService.downloadContract(contractTest);
  }
}
