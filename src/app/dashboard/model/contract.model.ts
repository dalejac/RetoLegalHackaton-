export interface Contract {
    supplierAssumeDelivery?: boolean;
    generalInfoSection: {
        interestedArea: string;
        contractType: string;
        personType: string;
        personFullName: string;
        personId: string;
        personMainAddress: string;
        chamberOfCommerce: string;
    };
    contractPriceSection:
    {
        ivaIsApplied: boolean;
        contractPrice: string;
        contractPriceInLetters: string;
        unitPrice: string;
        unitPriceInLetters: string;
    };
    payMethodSection: {
        anotherPaymentMethodDescr: string;
        withRetainer: boolean;
        retainerPrice: string;
        retainerPriceInLetters: string;
        retainerPrc: string;
        retainerDate: string;
        withMonthlyPaymentUponDelivery: boolean;
        withOnlyPaymentUponDelivery: boolean;
        uponDeliveryPrice: string;
        uponDeliveryPriceInLetters: string;
        uponDeliveryPricePrc: string;
        anotherPaymentMethod: boolean;
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
            tradingOf: string;
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
        supplierAssumeWarehousing: boolean;
        arePeriodicReportsAgreed: boolean;
        periodicReportAgreement: string;
        returnMaxTimeAgreement: string;
        supplierHaveToPresentDisinfectionCertificate: boolean;
        isWorkScheduleAgreedWithSupplier: boolean;
        supplierNeedAccessToConfidentialInfo: boolean;
        coordinationAndFollowingSection: {
            supplierInfo: {
                name: string;
            },
            lastname: string;
            telephone: string;
            telephoneExt: string;
            phoneNumber: string;
            email: string;
            address: string;
            city: string;
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
        },
    };
    adjunctSection: {
        requireContentOfDeliveryLocations: boolean;
    };
}
