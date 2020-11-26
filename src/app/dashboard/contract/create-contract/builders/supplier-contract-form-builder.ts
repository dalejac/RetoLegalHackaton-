import {FormlyFieldConfig} from '@ngx-formly/core';

export const SupplierContractFormBuilder: FormlyFieldConfig[] = [
    {
        key: 'generalInfoSection',
        wrappers: ['form-field'],
        className: 'form-section',
        templateOptions: {
            label: 'Datos Generales',
        },
        fieldGroup: [
            {
                key: 'interestedArea',
                type: 'select',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Área interna interesada en el proceso',
                    required: true,
                    options: [
                        {
                            label: 'Gerencia de Servicios Tecnológicos',
                            value: 'Gerencia de Servicios Tecnológicos',
                        },
                        {
                            label: 'Gerencia de Talento y Servicios Administrativos',
                            value: 'Gerencia de Talento y Servicios Administrativos'
                        },
                        {
                            label: 'Gerencia de Innovación y Transformación Digital',
                            value: 'Gerencia de Innovación y Transformación Digital'
                        },
                        {
                            label: 'Gerencia de Mercadeo',
                            value: 'Gerencia de Mercadeo'
                        },
                        {
                            label: 'Gerencias Regionales (5)',
                            value: 'Gerencias Regionales (5)'
                        },
                        {
                            label: 'Gerencia Nacional Porvenir Inversiones',
                            value: 'Gerencia Nacional Porvenir Inversiones'
                        },
                        {
                            label: 'Gerencia Desarrollo Comercial',
                            value: 'Gerencia Desarrollo Comercial'
                        },
                        {
                            label: 'Gerencia Sector Público / VEX – PO/PI',
                            value: 'Gerencia Sector Público / VEX – PO/PI'
                        },
                        {
                            label: 'Gerencia de Beneficios Pensionales',
                            value: 'Gerencia de Beneficios Pensionales'
                        },
                        {
                            label: 'Gerencia de Integración Operativa',
                            value: 'Gerencia de Integración Operativa'
                        },
                        {
                            label: 'Gerencia de Clientes',
                            value: 'Gerencia de Clientes'
                        },
                        {
                            label: 'Gerencia de Portafolio PO y CES',
                            value: 'Gerencia de Portafolio PO y CES'
                        },
                        {
                            label: 'Gerencia de Estrategia',
                            value: 'Gerencia de Estrategia'
                        },
                        {
                            label: 'Gerencia de Portafolio PV y PA',
                            value: 'Gerencia de Portafolio PV y PA'
                        },
                        {
                            label: 'Gerencia de Análisis de Inversiones',
                            value: 'Gerencia de Análisis de Inversiones'
                        },
                        {
                            label: 'Gerencia de Actuación Judicial',
                            value: 'Gerencia de Actuación Judicial'
                        },
                        {
                            label: 'Gerencia Jurídica Corporativa',
                            value: 'Gerencia Jurídica Corporativa'
                        },
                        {
                            label: 'Gerencia de Contabilidad',
                            value: 'Gerencia de Contabilidad'
                        },
                        {
                            label: 'Gerencia de Operaciones Financieras',
                            value: 'Gerencia de Operaciones Financieras'
                        },
                        {
                            label: 'Gerencia de Planeación',
                            value: 'Gerencia de Planeación'
                        },
                        {
                            label: 'Gerencia de Riesgo de Negocio',
                            value: 'Gerencia de Riesgo de Negocio'
                        },
                        {
                            label: 'Gerencia de Riesgo de Financiero',
                            value: 'Gerencia de Riesgo de Financiero'
                        }
                    ]
                }
            },
            {
                key: 'contractType',
                type: 'select',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Tipo de Contrato',
                    required: true,
                    options: [
                        {
                            label: 'Arrendamiento',
                            value: 'Arrendamiento',
                        },
                        {
                            label: 'Consultoría',
                            value: 'Consultoría'
                        },
                        {
                            label: 'Cesión de Espacio',
                            value: 'Cesión de Espacio'
                        },
                        {
                            label: 'Compraventa',
                            value: 'Compraventa'
                        },
                        {
                            label: 'Prestación de Servicios',
                            value: 'Prestación de Servicios'
                        }
                    ]
                }
            },
            {
                key: 'personType',
                type: 'select',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Tipo de Persona',
                    required: true,
                    options: [
                        {
                            label: 'Natural',
                            value: 'natural',
                        },
                        {
                            label: 'Jurídico',
                            value: 'legal'
                        }
                    ],
                }
            },
            {
                key: 'personFullName',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Nombre y Apellido',
                    required: true,
                },
                hideExpression: 'model.personType !== "natural"'
            },
            {
                key: 'personId',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'N° de cédula de identificación',
                    required: true,
                },
                hideExpression: 'model.personType !== "natural"'
            },
            {
                key: 'personMainAddress',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Domicilio Principal en',
                    required: true,
                },
                hideExpression: 'model.personType !== "natural"'
            },
            {
                key: 'chamberOfCommerce',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Cámara de Comercio',
                    required: true,
                },
                hideExpression: 'model.personType !== "natural"'
            },
            {
                key: 'legalRepresentative',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Representante Legal',
                    required: true,
                },
                hideExpression: 'model.personType !== "legal"'
            },
            {
                key: 'roleDefinition',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'En su calidad de',
                    required: true,
                },
                hideExpression: 'model.personType !== "legal"'
            },
            {
                key: 'legalRepresentativeName',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Nombre del Proveedor',
                    required: true,
                },
                hideExpression: 'model.personType !== "legal"'
            },
            {
                key: 'legalRepresentativeId',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'N° de cédula de identificación (NIT)',
                    required: true,
                },
                hideExpression: 'model.personType !== "legal"'
            },
        ]
    },
    {
        key: 'contractPriceSection',
        wrappers: ['form-field'],
        className: 'form-section',
        templateOptions: {
            label: 'Precio del Contrato (por producto)',
        },
        fieldGroup: [
            {
                key: 'ivaIsApplied',
                type: 'radio',
                className: 'form-section-row',
                templateOptions: {
                    label: '¿Aplica IVA?',
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
                key: 'contractPrice',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Precio del Contrato',
                    required: true,
                },
                hideExpression: 'model.ivaIsApplied !== true'
            },
            {
                key: 'contractPriceInLetters',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Precio del Contrato (en letras)',
                    required: true,
                },
                hideExpression: 'model.ivaIsApplied !== true'
            },
            {
                key: 'unitPrice',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Precio de cada unidad',
                    required: true,
                },
                hideExpression: 'model.ivaIsApplied !== true'
            },
            {
                key: 'unitPriceInLetters',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Precio de cada unidad (en letras)',
                    required: true,
                },
                hideExpression: 'model.ivaIsApplied !== true'
            },
        ]
    },
    {
        key: 'payMethodSection',
        wrappers: ['form-field'],
        className: 'form-section',
        templateOptions: {
            label: 'Forma de Pago',
        },
        fieldGroup: [
            {
                key: 'withRetainer',
                type: 'radio',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Anticipo',
                    required: true,
                    options: [
                        {
                            label: 'Aplica',
                            value: true,
                        },
                        {
                            label: 'No Aplica',
                            value: false
                        },
                    ]
                }
            },
            {
                key: 'retainerPrice',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Valor',
                    required: true,
                },
                hideExpression: 'model.withRetainer !== true'
            },
            {
                key: 'retainerPriceInLetters',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Valor en letras',
                    required: true,
                },
                hideExpression: 'model.withRetainer !== true'
            },
            {
                key: 'retainerPrc',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Porcentaje',
                    required: true,
                },
                hideExpression: 'model.withRetainer !== true'
            },
            {
                key: 'retainerDate',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Fecha de Pago del anticipo',
                    required: true,
                },
                hideExpression: 'model.withRetainer !== true'
            },
            {
                key: 'withMonthlyPaymentUponDelivery',
                type: 'radio',
                className: 'form-section-row',
                templateOptions: {
                    label: '¿Pago mensual contra entrega?',
                    required: true,
                    options: [
                        {
                            label: 'Aplica',
                            value: true,
                        },
                        {
                            label: 'No Aplica',
                            value: false
                        },
                    ]
                }
            },
            {
                key: 'withOnlyPaymentUponDelivery',
                type: 'radio',
                className: 'form-section-row',
                templateOptions: {
                    label: '¿Es un solo pago contra entrega?',
                    required: true,
                    options: [
                        {
                            label: 'Aplica',
                            value: true,
                        },
                        {
                            label: 'No Aplica',
                            value: false
                        },
                    ]
                }
            },
            {
                key: 'uponDeliveryPrice',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Valor',
                    required: true,
                },
                hideExpression: 'model.withOnlyPaymentUponDelivery !== true'
            },
            {
                key: 'uponDeliveryPriceInLetters',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Valor en letras',
                    required: true,
                },
                hideExpression: 'model.withOnlyPaymentUponDelivery !== true'
            },
            {
                key: 'uponDeliveryPricePrc',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Porcentaje',
                    required: true,
                },
                hideExpression: 'model.withOnlyPaymentUponDelivery !== true'
            },
            {
                key: 'anotherPaymentMethod',
                type: 'radio',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Otra forma de pago',
                    required: true,
                    options: [
                        {
                            label: 'Aplica',
                            value: true,
                        },
                        {
                            label: 'No Aplica',
                            value: false
                        },
                    ]
                }
            },
            {
                key: 'anotherPaymentMethodDescr',
                type: 'textarea',
                className: 'form-section-row',
                defaultValue: 'xx % del valor del CONTRATO, correspondiente a la suma de xxxxxxxxxxx  M/cte ($ xxxxxx) IVA incluido, por concepto de _______. ',
                templateOptions: {
                    label: '',
                    required: true,
                    rows: 5,
                },
                hideExpression: 'model.anotherPaymentMethod !== true'
            },
            {
                key: 'isPriceInUsd',
                type: 'radio',
                className: 'form-section-row',
                templateOptions: {
                    label: '¿Precio fijado en Dólares US?',
                    required: true,
                    options: [
                        {
                            label: 'Aplica',
                            value: true,
                        },
                        {
                            label: 'No Aplica',
                            value: false
                        },
                    ]
                }
            },
        ]
    },
    {
        key: 'durationSection',
        wrappers: ['form-field'],
        className: 'form-section',
        templateOptions: {
            label: 'Sección Duración',
        },
        fieldGroup: [{
            key: 'contractDuration',
            type: 'input',
            className: 'form-section-row',
            templateOptions: {
                label: 'Término de duración del Contrato',
                required: true,
            },
        }]
    },
    {
        key: 'guaranteeSection',
        wrappers: ['form-field'],
        className: 'form-section',
        templateOptions: {
            label: 'Sección Garantía',
        },
        fieldGroup: [
            {
                key: 'isGuaranteeApplied',
                type: 'radio',
                className: 'form-section-row',
                templateOptions: {
                    label: '¿Aplica garantía?',
                    required: true,
                    options: [
                        {
                            label: 'Aplica',
                            value: true,
                        },
                        {
                            label: 'No Aplica',
                            value: false
                        },
                    ]
                },
            },
            {
                key: 'guaranteeAppliedOptions',
                type: 'multicheckbox',
                className: 'form-section-row',
                templateOptions: {
                    required: true,
                    options: [
                        {
                            label: 'Cumplimiento del Contrato',
                            value: 'Cumplimiento del Contrato',
                        },
                        {
                            label: 'Buen manejo de anticipo',
                            value: 'Buen manejo de anticipo',
                        },
                        {
                            label: 'Salarios y prestaciones sociales',
                            value: 'Salarios y prestaciones sociales',
                        },
                        {
                            label: 'De calidad del bien o servicio',
                            value: 'De calidad del bien o servicio',
                        },
                        {
                            label: 'Responsabilidad civil contractual',
                            value: 'Responsabilidad civil contractual',
                        },
                    ],
                },
                hideExpression: 'model.isGuaranteeApplied !== true'
            }
        ]
    },
    {
        key: 'dateSection',
        wrappers: ['form-field'],
        className: 'form-section',
        templateOptions: {
            label: 'Sección Fechas',
        },
        fieldGroup: [
            {
                key: 'contractSubscription',
                type: 'input',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Suscripción del contrato',
                    required: true,
                }
            }
        ]
    },
    {
        key: 'filesSection',
        wrappers: ['form-field'],
        className: 'form-section',
        templateOptions: {
            label: 'Sección Adjuntos',
        },
        fieldGroup: [
            {
                key: 'certificatedOfExistence',
                type: 'file',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Certificados de existencia y representación legal de Porvenir',
                }
            },
            {
                key: 'certificatedOfExistenceContractor',
                type: 'file',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Certificados de existencia y representación legal del Contratista',
                }
            },
            {
                key: 'proposalByContractor',
                type: 'file',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Contentivo de la propuesta presentada por el  Contratista',
                }
            },
            {
                key: 'generateConfidentialityAgreement',
                type: 'checkbox',
                className: 'form-section-row',
                templateOptions: {
                    label: 'Generar Acuerdo de Confidencialidad',
                    required: true
                }
            },
        ]
    }
];

export const SupplierMessage = 'Genera un nuevo contrato según solicitud del área usuaria';
