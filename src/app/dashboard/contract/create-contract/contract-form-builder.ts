import {FormlyFieldConfig} from '@ngx-formly/core';

export const createContractFields: FormlyFieldConfig[] = [
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
                    className: 'option-abc',
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
    }
];
