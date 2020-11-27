export interface Contract {
    id?: string;
    userCanEdit: boolean;
    supplierAssumeDelivery?: boolean;
    generalInfoSection: {
        interestedArea: string;
        contractType: string;
        personType: string;
        personFullName: string;
        personId: string;
        personMainAddress: string;
        chamberOfCommerce: string;
        supplierName: string;
        supplierId: string;
        legalRepresentativeId: string;
        legalRepresentativeName: string;
    };
    contractPriceSection:
    {
        ivaIsApplied: boolean;
        contractPrice: number;
        contractPriceInLetters: string;
        unitPrice: number;
        unitPriceInLetters: string;
    };
    payMethodSection: {
        anotherPaymentMethodDescr: string;
        isWithRetainer: boolean;
        isWithMonthlyPaymentUponDelivery: boolean;
        isWithOnlyPaymentUponDelivery: boolean;
        isAnotherPaymentMethod: boolean;
        retainerPrice: number;
        retainerPriceInLetters: string;
        retainerPrc: number;
        retainerDate: string;
        uponDeliveryPrice: number;
        uponDeliveryPriceInLetters: string;
        uponDeliveryPricePrc: number;
        isPriceInUsd: boolean;
    };
    durationSection: {
        contractDuration: string;
    };
    guaranteeSection: {
        isGuaranteeApplied: boolean;
        guaranteeAppliedOptions: {
                salariesAndSocialBenefits: boolean;
                contractualCivilLiability: boolean;
                goodHandlingOfTheAdvance: boolean;
                complianceWithTheContract: boolean;
                qualityOfTheGoodOrService: boolean;
            }
        };
    dateSection: {
        contractSubscription: string;
    };
    filesSection: {
        generateConfidentialityAgreement: boolean;
    };
    contractObjectiveSection:
        {
            purposeOfTheContract: string;
            tradingOf?: string;
            tradingAndDistributionOf?: string;
            unitNumbers: number;
            requireCommercialOffer: boolean;
            commercialOfferDate: string;
        };
    deliverySection: {
        requireDeliveryDate: boolean;
        deliveryDate: string;
    };
    clausesSection: {
        requirePersonalDataTreatmentClause: boolean;
        requireCyberSecurityClause: boolean;
    };
    obligationsSection: {
        isSupplierDirectManufacturer: boolean;
        supplierGuaranteeDelivery: boolean;
        isSupplierAssumeWarehousing: boolean;
        arePeriodicReportsAgreed: boolean;
        periodicReportAgreement: string;
        returnMaxTimeAgreement: string;
        supplierHaveToPresentDisinfectionCertificate: boolean;
        isWorkScheduleAgreedWithSupplier: boolean;
        supplierNeedAccessToConfidentialInfo: boolean;
    };
    coordinationAndFollowingSection: {
        supplierInfo: {
            name: string;
            lastname: string;
            telephone: string;
            telephoneExt: string;
            phoneNumber: string;
            email: string;
            address: string;
            city: string;
        },
        interCoordinatorInfo: {
            name: string;
            lastname: string;
            telephone: string;
            telephoneExt: string;
            phoneNumber: string;
            email: string;
            address: string;
            city: string;
        }
    };
    adjunctSection: {
        requireContentOfDeliveryLocations: boolean;
    };
}
