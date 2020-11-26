import {
    DynamicFormGroupModel,
    DynamicFormModel,
    DynamicInputModel,
    DynamicRadioGroupModel,
    DynamicSelectModel
} from '@ng-dynamic-forms/core';

export const contractFormModel: DynamicFormModel = [
    new DynamicFormGroupModel({
        id: 'generalInfoSection',
        legend: 'Datos Generales',
        group: [
            new DynamicSelectModel({
                id: 'interestedArea',
                label: 'Área interna interesada en el proceso',
                options: [
                    {
                        label: 'Option 1',
                        value: 'option-1',
                    },
                    {
                        label: 'Option 2',
                        value: 'option-2'
                    },
                    {
                        label: 'Option 3',
                        value: 'option-3'
                    }
                ]
            }),
            new DynamicSelectModel({
                id: 'contractType',
                label: 'Tipo de Contrato',
                options: [
                    {
                        label: 'Option 1',
                        value: 'option-1',
                    },
                    {
                        label: 'Option 2',
                        value: 'option-2'
                    },
                    {
                        label: 'Option 3',
                        value: 'option-3'
                    }
                ]
            }),
            new DynamicSelectModel({
                id: 'personType',
                label: 'Tipo de Person',
                options: [
                    {
                        label: 'Natural',
                        value: 'natural',
                    },
                    {
                        label: 'Jurídico',
                        value: 'legal'
                    }
                ]
            }),
            new DynamicInputModel({
                id: 'legalRepresentative',
                label: 'Representante Legal',
                maxLength: 42,
            }),
            new DynamicInputModel({
                id: 'legalRepresentativeId',
                label: 'N° de cédula de identificación',
                maxLength: 42,
            }),
            new DynamicInputModel({
                id: 'roleDefinition',
                label: 'En su calidad de:',
                maxLength: 42
            }),
            new DynamicInputModel({
                id: 'providerName',
                label: 'Nombre del Proveedor',
                maxLength: 42
            }),
            new DynamicInputModel({
                id: 'providerId',
                label: 'N° de cédula de identificación (NIT)',
                maxLength: 42
            }),
            new DynamicInputModel({
                id: 'providerMainAddress',
                label: 'Domicilio Principal en',
                maxLength: 42
            }),
            new DynamicInputModel({
                id: 'chamberOfCommerce',
                label: 'Cámara de Comercio',
                maxLength: 42
            }),
        ]
    }),
    new DynamicFormGroupModel({
        id: 'contractPriceSection',
        legend: 'Precio del Contrato',
        group: [
            new DynamicRadioGroupModel<boolean>({
                id: 'isIvaApplied',
                label: '¿Aplica IVA?',
                options: [
                    {
                        label: 'Si',
                        value: true,
                    },
                    {
                        label: 'No',
                        value: false,
                    }
                ]
            }),
            new DynamicInputModel({
                id: 'contractPrice',
                label: 'Precio del Contrato',
                maxLength: 42
            }),
            new DynamicInputModel({
                id: 'contractPriceInLetters',
                label: 'Precio en letras',
                maxLength: 42
            }),
            new DynamicInputModel({
                id: 'contractPricePerUnit',
                label: 'Precio de cada unidad',
                maxLength: 42
            }),
            new DynamicInputModel({
                id: 'contractPricePerUnitInLetters',
                label: 'Precio en Letras',
                maxLength: 42
            }),
        ]
    }),
    new DynamicFormGroupModel({
        id: 'payMethodSection',
        legend: 'Forma de Pago',
        group: [
            new DynamicRadioGroupModel<boolean>({
                id: 'retainer',
                label: 'Anticipo',
                options: [
                    {
                        label: 'Aplica',
                        value: true,
                    },
                    {
                        label: 'No Aplica',
                        value: false,
                    }
                ]
            }),
            new DynamicInputModel({
                id: 'pricePerUnit',
                label: 'Precio de cada unidad',
                maxLength: 42
            }),
        ]
    })
];

export const contractFormLayout = {
    interestedArea: {
        element: {
            label: 'create-contract-form-label'
        },
        grid: {
            label: 'flex-col',
            control: 'flex-col form-control',
        }
    },
    contractType: {
        element: {
            label: 'create-contract-form-label'
        },
        grid: {
            label: 'flex-col',
            control: 'flex-col form-control',
        }
    },
    personType: {
        element: {
            label: 'create-contract-form-label'
        },
        grid: {
            label: 'flex-col',
            control: 'flex-col form-control',
        }
    },
    legalRepresentative: {
        element: {
            label: 'create-contract-form-label'
        },
        grid: {
            label: 'flex-col',
            control: 'flex-col form-control',
        }
    },
    legalRepresentativeId: {
        element: {
            label: 'create-contract-form-label'
        },
        grid: {
            label: 'flex-col',
            control: 'flex-col form-control',
        }
    },
    roleDefinition: {
        element: {
            label: 'create-contract-form-label'
        },
        grid: {
            label: 'flex-col',
            control: 'flex-col form-control',
        }
    },
    providerName: {
        element: {
            label: 'create-contract-form-label'
        },
        grid: {
            label: 'flex-col',
            control: 'flex-col form-control',
        }
    },
    providerId: {
        element: {
            label: 'create-contract-form-label'
        },
        grid: {
            label: 'flex-col',
            control: 'flex-col form-control',
        }
    },
    providerMainAddress: {
        element: {
            label: 'create-contract-form-label'
        },
        grid: {
            label: 'flex-col',
            control: 'flex-col form-control',
        }
    },
    chamberOfCommerce: {
        element: {
            label: 'create-contract-form-label'
        },
        grid: {
            label: 'flex-col',
            control: 'flex-col form-control',
        }
    },
    isIvaApplied: {
        element: {
            label: 'create-contract-form-label'
        },
        grid: {
            label: 'flex-col',
            control: 'flex-col form-control',
        }
    },
    contractPrice: {
        element: {
            label: 'create-contract-form-label'
        },
        grid: {
            label: 'flex-col',
            control: 'flex-col form-control',
        }
    },
    contractPriceInLetters: {
        element: {
            label: 'create-contract-form-label'
        },
        grid: {
            label: 'flex-col',
            control: 'flex-col form-control',
        }
    },
    contractPricePerUnit: {
        element: {
            label: 'create-contract-form-label'
        },
        grid: {
            label: 'flex-col',
            control: 'flex-col form-control',
        }
    },
    contractPricePerUnitInLetters: {
        element: {
            label: 'create-contract-form-label'
        },
        grid: {
            label: 'flex-col',
            control: 'flex-col form-control',
        }
    },
    retainer: {
        element: {
            label: 'create-contract-form-label'
        },
        grid: {
            label: 'flex-col',
            control: 'flex-col form-control',
        }
    },
    pricePerUnit: {
        element: {
            label: 'create-contract-form-label'
        },
        grid: {
            label: 'flex-col',
            control: 'flex-col form-control',
        }
    }
};

