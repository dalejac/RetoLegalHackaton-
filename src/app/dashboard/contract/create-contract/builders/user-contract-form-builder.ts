import {FormlyFieldConfig} from '@ngx-formly/core';

export const UserContractFormBuilder: FormlyFieldConfig[] = [
    {
        key: 'contractObjectiveSection',
        wrappers: ['form-field'],
        className: 'form-section',
        templateOptions: {
            label: 'Sección Objeto del Contrato',
        },
        fieldGroup: [
            {
                key: 'purposeOfTheContract',
                type: 'radio',
                className: 'form-section-row',
                templateOptions: {
                    label: ' Objeto del contrato',
                    required: true,
                    options: [
                        {
                            label: 'Compraventa',
                            value: 'trading',
                        },
                        {
                            label: 'Compraventa y distribución',
                            value: 'tradingAndDistribution'
                        },
                    ]
                }
            },
            {
                key: 'tradingOf',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Compraventa de',
                    required: true,
                },
                hideExpression: 'model.purposeOfTheContract !== "trading"'
            },
            {
                key: 'unitNumbers',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Número de unidades',
                    required: true,
                },
                hideExpression: 'model.purposeOfTheContract !== "trading"'
            },
            {
                key: 'tradingAndDistributionOf',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Compraventa y distribución de',
                    required: true,
                },
                hideExpression: 'model.purposeOfTheContract !== "tradingAndDistribution"'
            },
            {
                key: 'unitNumbers',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Unidades',
                    required: true,
                },
                hideExpression: 'model.purposeOfTheContract !==  "tradingAndDistribution"'
            },
            {
                key: 'requireCommercialOffer',
                type: 'radio',
                className: 'form-section-row',
                templateOptions: {
                    label: ' Oferta Comercial',
                    required: true,
                    options: [
                        {
                            label: 'Si',
                            value: true,
                        },
                        {
                            label: 'No',
                            value: false
                        },
                    ]
                }
            },
            {
                key: 'commercialOfferDate',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Fecha',
                    required: true,
                },
                hideExpression: 'model.requireCommercialOffer !== true'
            },
        ]
    },
    {
        key: 'deliverySection',
        wrappers: ['form-field'],
        className: 'form-section',
        templateOptions: {
            label: 'Sección Entrega',
        },
        fieldGroup: [
            {
                key: 'requireDeliveryDate',
                type: 'radio',
                className: 'form-section-row',
                templateOptions: {
                    label: ' Fecha exacta de entrega',
                    required: true,
                    options: [
                        {
                            label: 'Aplica',
                            value: true,
                        },
                        {
                            label: 'No Aplica',
                            value: false,
                        },
                    ]
                }
            },
            {
                key: 'deliveryDate',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Fecha',
                    required: true,
                },
                hideExpression: 'model.requireDeliveryDate !== true'
            },
        ]
    },
    {
        key: 'clausesSection',
        wrappers: ['form-field'],
        className: 'form-section',
        templateOptions: {
            label: 'Sección Cláusulas | Otras consideraciones',
        },
        fieldGroup: [
            {
                key: 'requirePersonalDataTreatmentClause',
                type: 'radio',
                className: 'form-section-row',
                templateOptions: {
                    label: '¿El contrato requiere tener cláusula de tratamiento de Datos Personales?',
                    required: true,
                    options: [
                        {
                            label: 'Sí',
                            value: true,
                        },
                        {
                            label: 'No',
                            value: false,
                        },
                    ]
                }
            },
            {
                key: 'requireCyberSecurityClause',
                type: 'radio',
                className: 'form-section-row',
                templateOptions: {
                    label: '¿El contrato requiere de tener cláusula de ciberseguridad?',
                    required: true,
                    options: [
                        {
                            label: 'Sí',
                            value: true,
                        },
                        {
                            label: 'No',
                            value: false,
                        },
                    ]
                }
            },
        ]
    },
    {
        key: 'obligationsSection',
        wrappers: ['form-field'],
        className: 'form-section',
        templateOptions: {
            label: 'Sección Obligaciones',
        },
        fieldGroup: [
            {
                key: 'isSupplierDirectManufacturer',
                type: 'radio',
                className: 'form-section-row',
                templateOptions: {
                    label: '¿El proveedor es el fabricante directo del producto que se adquiere?',
                    required: true,
                    options: [
                        {
                            label: 'Sí',
                            value: true,
                        },
                        {
                            label: 'No',
                            value: false,
                        },
                    ]
                }
            },
            {
                key: 'supplierGuaranteeDelivery',
                type: 'radio',
                className: 'form-section-row',
                templateOptions: {
                    label: '¿El proveedor garantiza la entrega del producto en las instalaciones de Porvenir? ',
                    required: true,
                    options: [
                        {
                            label: 'Sí',
                            value: true,
                        },
                        {
                            label: 'No',
                            value: false,
                        },
                    ]
                }
            },
            {
                key: 'isSupplierAssumeWarehousing',
                type: 'radio',
                className: 'form-section-row',
                templateOptions: {
                    label: '¿El proveedor asumirá el bodegaje de los productos y entregará a demanda de Porvenir?',
                    required: true,
                    options: [
                        {
                            label: 'Sí',
                            value: true,
                        },
                        {
                            label: 'No',
                            value: false,
                        },
                    ]
                }
            },
            {
                key: 'arePeriodicReportsAgreed',
                type: 'radio',
                className: 'form-section-row',
                templateOptions: {
                    label: '¿Se acuerdan reportes periódicos para garantizar el cumplimiento del contrato?',
                    required: true,
                    options: [
                        {
                            label: 'Sí',
                            value: true,
                        },
                        {
                            label: 'No',
                            value: false,
                        },
                    ]
                }
            },
            {
                key: 'periodicReportAgreement',
                type: 'select',
                className: 'form-section-row',
                templateOptions: {
                    label: '¿En qué periodicidad?',
                    required: true,
                    options: [
                        {
                            label: 'Mensuales',
                            value: 'Mensuales'
                        },
                        {
                            label: 'Quincenales',
                            value: 'Quincenales'
                        },
                        {
                            label: 'Semanales',
                            value: 'Semanales'
                        },
                    ]
                }
            },
            {
                key: 'returnMaxTimeAgreement',
                type: 'select',
                className: 'form-section-row',
                templateOptions: {
                    label: 'En caso de recibir productos defectuosos se acuerda con el proveedor el cambio dentro de un término no superior a:',
                    required: true,
                    options: [
                        {
                            label: '1 día',
                            value: '1 día'
                        },
                        {
                            label: '5 días',
                            value: '5 días'
                        },
                        {
                            label: '1 semana',
                            value: '1 semana'
                        },
                        {
                            label: '2 semanas',
                            value: '2 semanas'
                        },
                        {
                            label: '1 mes',
                            value: '1 mes'
                        },
                        {
                            label: 'Otro',
                            value: 'otro'
                        },
                    ]
                }
            },
            {
                key: 'returnMaxTimeAgreementOther',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: '',
                    required: true,
                },
                hideExpression: 'model.returnMaxTimeAgreement !== "otro"'
            },
            {
                key: 'supplierHaveToPresentDisinfectionCertificate',
                type: 'radio',
                className: 'form-section-row',
                templateOptions: {
                    label: '¿El proveedor debe presentar el certificado de desinfección de los productos adquiridos? ',
                    required: true,
                    options: [
                        {
                            label: 'Sí',
                            value: true,
                        },
                        {
                            label: 'No',
                            value: false,
                        },
                    ]
                }
            },
            {
                key: 'isWorkScheduleAgreedWithSupplier',
                type: 'radio',
                className: 'form-section-row',
                templateOptions: {
                    label: '¿Se tiene un cronograma de trabajo acordado con el proveedor que debe cumplir?',
                    required: true,
                    options: [
                        {
                            label: 'Sí',
                            value: true,
                        },
                        {
                            label: 'No',
                            value: false,
                        },
                    ]
                }
            },
            {
                key: 'supplierNeedAccessToConfidentialInfo',
                type: 'radio',
                className: 'form-section-row',
                templateOptions: {
                    label: '¿El proveedor del contrato, debe tener acceso a información confidencial de Porvenir?',
                    required: true,
                    options: [
                        {
                            label: 'Sí',
                            value: true,
                        },
                        {
                            label: 'No',
                            value: false,
                        },
                    ]
                }
            },
        ]
    },
    {
        key: 'coordinationAndFollowingSection',
        wrappers: ['form-field'],
        className: 'form-section',
        templateOptions: {
            label: 'Sección de Coordinación, seguimiento y comunicaciones',
        },
        fieldGroup: [
            {
                key: 'supplierInfo',
                wrappers: ['form-field'],
                className: 'form-section',
                templateOptions: {
                    label: 'Datos del Proveedor'
                },
                fieldGroup: [
                    {
                        key: 'name',
                        type: 'input',
                        className: 'form-section-row',
                        templateOptions: {
                            label: 'Nombre',
                            required: true,
                        }
                    },
                    {
                        key: 'lastname',
                        type: 'input',
                        className: 'form-section-row',
                        templateOptions: {
                            label: 'Apellidos',
                            required: true,
                        }
                    },
                    {
                        key: 'telephone',
                        type: 'input',
                        className: 'form-section-row',
                        templateOptions: {
                            label: 'Teléfono',
                        }
                    },
                    {
                        key: 'telephoneExt',
                        type: 'input',
                        className: 'form-section-row',
                        templateOptions: {
                            label: 'Ext',
                        }
                    },
                    {
                        key: 'phoneNumber',
                        type: 'input',
                        className: 'form-section-row',
                        templateOptions: {
                            label: 'Celular',
                            required: true,
                        }
                    },
                    {
                        key: 'email',
                        type: 'input',
                        className: 'form-section-row',
                        templateOptions: {
                            label: 'Correo electrónico',
                            required: true,
                        }
                    },
                    {
                        key: 'address',
                        type: 'input',
                        className: 'form-section-row',
                        templateOptions: {
                            label: 'Dirección física',
                            required: true,
                        }
                    },
                    {
                        key: 'city',
                        type: 'input',
                        className: 'form-section-row',
                        templateOptions: {
                            label: 'Ciudad',
                            required: true,
                        }
                    },
                ]
            },
            {
                key: 'interCoordinatorInfo',
                wrappers: ['form-field'],
                className: 'form-section',
                templateOptions: {
                    label: 'Datos Coordinador Interno'
                },
                fieldGroup: [
                    {
                        key: 'name',
                        type: 'input',
                        className: 'form-section-row',
                        templateOptions: {
                            label: 'Nombre',
                            required: true,
                        }
                    },
                    {
                        key: 'lastname',
                        type: 'input',
                        className: 'form-section-row',
                        templateOptions: {
                            label: 'Apellidos',
                            required: true,
                        }
                    },
                    {
                        key: 'telephone',
                        type: 'input',
                        className: 'form-section-row',
                        templateOptions: {
                            label: 'Teléfono',
                        }
                    },
                    {
                        key: 'telephoneExt',
                        type: 'input',
                        className: 'form-section-row',
                        templateOptions: {
                            label: 'Ext',
                        }
                    },
                    {
                        key: 'phoneNumber',
                        type: 'input',
                        className: 'form-section-row',
                        templateOptions: {
                            label: 'Celular',
                            required: true,
                        }
                    },
                    {
                        key: 'email',
                        type: 'input',
                        className: 'form-section-row',
                        templateOptions: {
                            label: 'Correo electrónico',
                            required: true,
                        }
                    },
                    {
                        key: 'address',
                        type: 'input',
                        className: 'form-section-row',
                        templateOptions: {
                            label: 'Dirección física',
                            required: true,
                        }
                    },
                    {
                        key: 'city',
                        type: 'input',
                        className: 'form-section-row',
                        templateOptions: {
                            label: 'Ciudad',
                            required: true,
                        }
                    },
                ]
            }
        ]
    },
    {
        key: 'adjunctSection',
        wrappers: ['form-field'],
        className: 'form-section',
        templateOptions: {
            label: 'Sección Anexos',
        },
        fieldGroup: [
            {
                key: 'requireContentOfDeliveryLocations',
                type: 'radio',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Documento que referencia los lugares de entrega',
                    required: true,
                    options: [
                        {
                            label: 'Si',
                            value: true,
                        },
                        {
                            label: 'No',
                            value: false
                        },
                    ]
                }
            },
            {
                key: 'requireContentOfDeliveryLocations',
                type: 'radio',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Acuerdo Niveles de Servicio',
                    required: true,
                    options: [
                        {
                            label: 'Si',
                            value: true,
                        },
                        {
                            label: 'No',
                            value: false
                        },
                    ]
                }
            },
            {
                key: 'contentOfDeliveryLocationsFile',
                type: 'file',
                className: 'form-section-row',
                templateOptions: {
                    label: '',
                },
                hideExpression: 'model.requireContentOfDeliveryLocations !== true'
            },
        ]
    }
];

export const UserMessage = 'Información complementaria para generar contrato de la solicitud creada';
