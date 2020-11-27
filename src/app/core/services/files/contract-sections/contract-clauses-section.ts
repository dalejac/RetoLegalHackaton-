import {Contract} from '../../../../dashboard/model/contract.model';
import {
    boldAllCapsText,
    bulletText,
    contractorWord,
    contractWord,
    paragraphNumber,
    paragraphNumberText,
    porvenirWord,
    sectionTitle,
    simpleParagraph,
    simpleText,
    subTitle
} from '../file-helpers';
import {Paragraph} from 'docx';

export const contractClausesSection  = (contract: Contract) => {
    return [
        sectionTitle('Claúsulas'),
        objectAndScopeClause(contract),
        ...priceClause(contract),
        ...paymentMethodClause(contract),
        durationClause(contract),
        ...contractorObligationsClause(contract),
        finishReasonsClause(contract),
        ...confidentialityClause(contract),
        ...noEmploymentRelationship(contract),
        securityAndHealthClause(contract),
        autonomyAndAccountabilityClause(contract),
        ...guaranteeClause(contract),
        penaltyFeeClause(),
        ...penaltyClause(),
        interventoriesClause(),
        conflictsOfInterestClause(),
        contractorDeclarations(),
        antiFraudAndAntiCorruptionClause(),
        ...personalDataTreatmentClause(contract),
        ...cyberSecurityClause(contract),
        indemnityClause(),
        fortuitousEventClause(),
        guaranteeClause2(),
        transferClause(),
        modificationsClause(),
        coordinationClause(),
        ...contractorInformationSection(contract),
        ...porvenirInformationSection(contract),
        taxesClause(),
        authorizationClause(),
        suspensionClause(),
        conflictsResolutionClause(),
        noWaiverClause(),
        domicileClause(),
        ...annexesClause(contract),
        prevalenceClause(),
        finalSection(),
        ...signaturesSection()
    ];
};


export const objectAndScopeClause = (contract: Contract) => {
    const isTrading = contract?.contractObjectiveSection?.purposeOfTheContract === 'trading';
    const tradingOf = contract?.contractObjectiveSection?.tradingOf;
    const tradingAndDistributionOf = contract?.contractObjectiveSection?.tradingAndDistributionOf;
    const unitNumbers = contract?.contractObjectiveSection?.unitNumbers;
    const tradingMessage = ` a título de compraventa, a la venta de (${unitNumbers}) unidades del producto “${tradingOf}” de conformidad con la `;
    const tradingAndDistributionMessage = ` a título de compraventa, a la venta y distribución de (${unitNumbers}) unidades del producto “${tradingAndDistributionOf}” de conformidad con la `;
    const message = isTrading ? tradingMessage : tradingAndDistributionMessage;

    const defaultMessage = [
        contractorWord,
        simpleText(', y en contraprestación por la compraventa '),
        porvenirWord,
        simpleText(' se obliga a pagar el precio convenido.')
    ];

    const requireCommercialOffer = contract?.contractObjectiveSection?.requireCommercialOffer;
    const commercialOfferMessage =
        requireCommercialOffer
        ?
            [
                boldAllCapsText('Oferta Comercial'),
                simpleText(` de fecha ${contract?.contractObjectiveSection?.commercialOfferDate}  presentada   por `),
                ...defaultMessage
            ]
        :   [...defaultMessage];

    return new Paragraph({
        style: 'section',
        children: [
            boldAllCapsText('PRIMERA. - OBJETO Y ALCANCE: EL CONTRATISTA '),
            simpleText('actuando con sus propios medios, bajo su cuenta y riesgo, con autonomía técnica y administrativa, se obliga para con '),
            porvenirWord,
            simpleText(message),
            ...commercialOfferMessage
        ]
    });
};

export const priceClause = (contract: Contract) => {

    const isTrading = contract?.contractObjectiveSection?.purposeOfTheContract === 'trading';
    const tradingOf = contract?.contractObjectiveSection?.tradingOf;
    const tradingAndDistributionOf = contract?.contractObjectiveSection?.tradingAndDistributionOf;
    const unitNumbers = contract?.contractObjectiveSection?.unitNumbers;
    const unitPriceMessage = ` ${contract?.contractPriceSection?.unitPriceInLetters.toUpperCase()} M/ cte ($ ${contract?.contractPriceSection?.unitPrice})`;
    const contractPriceMessage = ` ${contract?.contractPriceSection?.contractPriceInLetters.toUpperCase()} M/ cte ($ ${contract?.contractPriceSection?.contractPrice})`;
    const ivaIsApplied = contract?.contractPriceSection?.ivaIsApplied;

    const ivaParagraph = new Paragraph(
        {
            children: [
                boldAllCapsText('Paragráfo Primero '),
                simpleText('Los productos solicitados a '),
                contractorWord,
                simpleText(' se realizarán a demanda y de acuerdo a las necesidades de '),
                porvenirWord
            ]
        });
    const restOfParagraph = [
            new Paragraph(
                {
                    children: [
                        boldAllCapsText('Paragráfo Segundo '),
                        simpleText('Dentro del precio se encuentran incluidos la totalidad de los gastos requeridos por '),
                        contractorWord,
                        simpleText(' para la ejecución del objeto contractual. En consecuencia, todos los gastos e impuestos que se generen en desarrollo del '),
                        contractWord,
                        simpleText(' serán asumidos por '),
                        contractorWord
                    ]
                }),
            new Paragraph(
                {
                    children: [
                        boldAllCapsText('Paragráfo Tercero '),
                        simpleText('El valor del '),
                        contractorWord,
                        simpleText('quedará inalterable durante el periodo de duración,  sin  que pueda invocarse ningún tipo de alza o costo para un eventual ajuste. '),
                        porvenirWord,
                        simpleText(' podrá reducir el monto de la cuota respectiva, en caso que '),
                        contractorWord,
                        simpleText(' no acredite la ejecución de la totalidad del objeto del '),
                        contractWord,
                        simpleText(' a que se ha comprometido, quedando '),
                        porvenirWord,
                        simpleText(' obligado a pagar el monto de lo efectivamente ejecutado.'),
                    ]
                }),
            new Paragraph(
                {
                    children: [
                        boldAllCapsText('Paragráfo Cuarto '),
                        simpleText('Los recibos parciales de las tareas ejecutadas que se hagan al'),
                        contractorWord,
                        simpleText('no implican aceptación final por parte de '),
                        porvenirWord,
                        simpleText(' como quiera que la obligación principal del '),
                        contractorWord,
                        simpleText(' es la de ejecutar completamente el objeto del'),
                        contractWord,
                        simpleText(' aquí convenido en su integridad y en la forma y tiempo debidos'),
                    ]
                })
        ];

    const defaultMessage = [
        boldAllCapsText('SEGUNDA. - VALOR: PORVENIR '),
        simpleText('se obliga a pagar al '),
        boldAllCapsText('Contratista'),
        simpleText(' la suma de'),
        boldAllCapsText(unitPriceMessage),
    ];

    return ivaIsApplied
        ? [
            new Paragraph({
                style: 'section',
                children: [
                    ...defaultMessage,
                    simpleText(` IVA incluido, por cada ${isTrading ? tradingOf : tradingAndDistributionOf} vendido y entregado, para un total de`),
                    boldAllCapsText(contractPriceMessage),
                    simpleText(`  IVA incluido, por ${unitNumbers} unidades del producto “${isTrading ? tradingOf : tradingAndDistributionOf}”.`)
                ]
            }),
            ivaParagraph,
            ...restOfParagraph
        ] : [
            new Paragraph({
                style: 'section',
                children: [
                    ...defaultMessage,
                    simpleText(` por cada ${isTrading ? tradingOf : tradingAndDistributionOf} vendido y entregado, para un total de`),
                    boldAllCapsText(contractPriceMessage),
                    simpleText(` por ${unitNumbers} unidades del producto “${isTrading ? tradingOf : tradingAndDistributionOf}”.`)
                ]
            }),
            ...restOfParagraph
        ];
};

const paymentMethodClause = (contract: Contract) => {
    const isWithRetainer = contract?.payMethodSection?.isWithRetainer;
    const isWithMonthlyPaymentUponDelivery = contract?.payMethodSection?.isWithMonthlyPaymentUponDelivery;
    const isWithOnlyPaymentUponDelivery = contract?.payMethodSection?.isWithOnlyPaymentUponDelivery;
    const isAnotherPaymentMethod = contract?.payMethodSection?.isAnotherPaymentMethod;

    const ivaIsApplied = contract?.contractPriceSection?.ivaIsApplied;
    let message = '';

    if (isWithRetainer) {
        message = `${message} ${contract?.payMethodSection?.retainerPrc} % del valor del CONTRATO, correspondiente a la suma de ${contract?.payMethodSection?.retainerPriceInLetters} M/cte ($ ${contract?.payMethodSection?.retainerPrice}) ${ivaIsApplied ? 'IVA incluido' : ''}, por concepto de anticipo el ${contract?.payMethodSection?.retainerDate}.`;
    }

    if (isWithMonthlyPaymentUponDelivery) {
        message = `${message} Pagos mensuales por las unidades de producto entregados y recibidos a satisfacción de PORVENIR durante el mes inmediatamente anterior.`;
    }

    if (isWithOnlyPaymentUponDelivery) {
        message = `${message} Un único pago por la suma de ${contract?.payMethodSection?.uponDeliveryPriceInLetters} Mcte (${contract?.payMethodSection?.uponDeliveryPrice}) correspondiente al ${contract?.payMethodSection?.uponDeliveryPricePrc} % del CONTRATO, previa entrega y recibo a satisfacción de PORVENIR de los bienes objeto de compraventa `;
    }

    if (isAnotherPaymentMethod) {
        message = `${message} ${contract?.payMethodSection?.anotherPaymentMethodDescr}`;
    }

    return [
        new Paragraph(
            {
                style: 'section',
                children: [
                    boldAllCapsText('Tercera. - Forma de Pago: '),
                    simpleText('El valor será pagado por '),
                    boldAllCapsText('Porvenir '),
                    simpleText('de la siguiente manera: '),
                    simpleText(`- ${message}`),
                ]
            }),
        new Paragraph(
            {
                children: [
                    boldAllCapsText('Parágrafo Primero: '),
                    simpleText('La Tasa representativa del Mercado -TRM que aplicará para los pagos corresponderá al de la fecha de radicación de la factura'),
                ]
            }),
        new Paragraph(
            {
                children: [
                    boldAllCapsText('Parágrafo Segunda: '),
                    simpleText('Para cada uno de los pagos '),
                    boldAllCapsText('El Contratista '),
                    simpleText('deberá presentar la correspondiente factura, junto con el presente documento. Para el primer pago, adicionalmente, '),
                    boldAllCapsText('El Contratista '),
                    simpleText('deberá encontrarse inscrito como proveedor de '),
                    boldAllCapsText('Porvenir '),
                    simpleText('y allegar las pólizas de seguros que se mencionan más adelante, junto con la certificación de la compañía de seguros sobre el pago de la prima. Queda acordado que sin el cumplimiento de los requisitos aquí señalado '),
                    boldAllCapsText('Porvenir '),
                    simpleText('no estará obligado a efectuar los pagos correspondientes.')
                ]
            }),
        new Paragraph(
            {
                children: [
                    boldAllCapsText('Parágrafo Tercero: '),
                    boldAllCapsText('Porvenir '),
                    simpleText('efectuará los pagos, en moneda local corriente mediante abono en cuenta, dentro de los treinta (30) días calendario siguientes a la presentación de la correspondiente factura. '),
                ]
            })
    ];
};

const durationClause = (contract: Contract) => {
    const duration = contract?.durationSection?.contractDuration;
    return new Paragraph(
        {
            style: 'section',
            children: [
                boldAllCapsText('Cuarta. - Duración: '),
                simpleText(`El término de duración es de ${duration}, contados a partir de la firma del `),
                contractWord,
            ]
        });
};

const contractorObligationsClause = (contract: Contract) => {
    const isSupplierDirectManufacturer = contract?.obligationsSection?.isSupplierDirectManufacturer;
    const isSupplierAssumeWarehousing = contract?.obligationsSection?.isSupplierAssumeWarehousing;
    const isTrading = contract?.contractObjectiveSection?.purposeOfTheContract === 'trading';
    const tradingOf = contract?.contractObjectiveSection?.tradingOf;
    const tradingAndDistributionOf = contract?.contractObjectiveSection?.tradingAndDistributionOf;
    const message = isTrading ? tradingOf : tradingAndDistributionOf;
    const requireDeliveryDate = contract?.deliverySection?.requireDeliveryDate;

    const obligations =  [
        new Paragraph(
            {
                style: 'justified',
                children: [
                    boldAllCapsText('Quinta. - Obligaciones del Contratista: El Contratista '),
                    simpleText('se obliga para con '),
                    boldAllCapsText('Porvenir '),
                    simpleText('a '),
                ]
            }),
        new Paragraph({
            style: 'justified',
            children: [
                simpleText('Cumplir con el objeto del '),
                boldAllCapsText('Contrato '),
                simpleText('dentro de los términos y especificaciones en cuanto a la cantidad, calidad y características pactadas.')
            ],
            bullet: {
                level: 0,
            },
        }),
        new Paragraph({
            style: 'justified',
            children: [
                simpleText('Transferir a título de compraventa los bienes muebles descritos en el objeto del '),
                boldAllCapsText('Contrato.'),
            ],
            bullet: {
                level: 0,
            },
        }),
        new Paragraph({
            style: 'justified',
            children: [
                simpleText(`Remplazar dentro de ${contract?.obligationsSection?.returnMaxTimeAgreement}, los bienes defectuosos o que no se ajusten a la referencia solicitada por `),
                porvenirWord,
            ],
            bullet: {
                level: 0,
            },
        }),
        new Paragraph({
            style: 'justified',
            children: [
                simpleText('Contar con los correspondientes permisos y autorizaciones para la comercialización, y venta del producto. '),
            ],
            bullet: {
                level: 0,
            },
        }),
        new Paragraph({
            style: 'justified',
            children: [
                simpleText('Proveer los bienes objeto de compraventa, en las condiciones establecidas en el '),
                contractWord,
                simpleText(', atendiendo las necesidades de '),
                porvenirWord,
                simpleText(' para el adecuado cumplimiento del objeto del'),
                contractWord
            ],
            bullet: {
                level: 0,
            },
        }),
        new Paragraph({
            style: 'justified',
            children: [
                simpleText('Brindar a los funcionarios que '),
                porvenirWord,
                simpleText(' designe, el soporte para lograr el correcto funcionamiento del objeto contractual.'),
            ],
            bullet: {
                level: 0,
            },
        }),
        new Paragraph({
            style: 'justified',
            children: [
                simpleText('Las demás obligaciones inherentes a la naturaleza del, '),
                contractWord
            ],
            bullet: {
                level: 0,
            },
        })
    ];

    if (!isSupplierDirectManufacturer) {
        obligations.push(
            new Paragraph({
                style: 'justified',
                children: [
                    simpleText('Asegurarse y garantizar a '),
                    porvenirWord,
                    simpleText(` que el “${message}” provenga directamente del fabricante para garantizar la vida útil del producto.`)
                ],
                bullet: {
                    level: 0,
                },
            })
        );
    }

    if (isSupplierAssumeWarehousing) {
        obligations.push(
            new Paragraph({
                style: 'justified',
                children: [
                    simpleText('Asumir por su cuenta los costos de bodegaje.'),
                ],
                bullet: {
                    level: 0,
                },
            })
        );
    }

    if (requireDeliveryDate) {
        obligations.push(
            new Paragraph({
                style: 'justified',
                children: [
                    simpleText('Entregar los bienes  objeto de compraventa en buen estado y libres de defectos, así como responder por vicios ocultos y de evicción.'),
                ],
                bullet: {
                    level: 0,
                },
            })
        );
    }

    if (contract?.obligationsSection?.arePeriodicReportsAgreed) {
        obligations.push(
            new Paragraph({
                style: 'justified',
                children: [
                    simpleText(`Remitir reportes ${contract?.obligationsSection?.periodicReportAgreement} a solicitud de `),
                    boldAllCapsText('Porvenir'),
                    simpleText(' para corroborar el cumplimiento de la ejecución del '),
                    contractWord
                ],
                bullet: {
                    level: 0,
                },
            })
        );
    }

    if (contract?.obligationsSection?.supplierGuaranteeDelivery) {
        obligations.push(
            new Paragraph({
                style: 'justified',
                children: [
                    simpleText('Entregar los bienes objeto del presente '),
                    contractWord,
                    simpleText(' en los lugares y fechas que '),
                    porvenirWord,
                    simpleText(' le indique.'),
                ],
                bullet: {
                    level: 0,
                },
            })
        );

        obligations.push(
            new Paragraph({
                style: 'justified',
                children: [
                    simpleText('Asumir el valor requerido para el embalaje y transporte de los bienes hasta el lugar que indique'),
                    boldAllCapsText('Porvenir.'),
                ],
                bullet: {
                    level: 0,
                },
            })
        );
    }

    if (contract?.obligationsSection?.supplierHaveToPresentDisinfectionCertificate) {
        obligations.push(
            new Paragraph({
                style: 'justified',
                children: [
                    simpleText('Presentar a '),
                    porvenirWord,
                    simpleText(' el correspondiente certificado de desinfección de los productos objeto de compraventa.'),
                ],
                bullet: {
                    level: 0,
                },
            })
        );
    }

    if (contract?.obligationsSection?.isWorkScheduleAgreedWithSupplier) {
        obligations.push(
            new Paragraph({
                style: 'justified',
                children: [
                    simpleText('Asegurar  la ejecución del '),
                    contractWord,
                    simpleText(' dentro  de los  tiempos establecidos en el cronograma.'),
                ],
                bullet: {
                    level: 0,
                },
            })
        );
    }

    if (contract?.obligationsSection?.supplierNeedAccessToConfidentialInfo) {
        obligations.push(
            new Paragraph({
                style: 'justified',
                children: [
                    simpleText('Guardar la reserva y confidencialidad en relación con cualquier tipo de información, política, procedimiento y en general cualquier secreto que en razón del '),
                    contractWord,
                    simpleText(' '),
                    porvenirWord,
                    simpleText(' le dé a conocer o al cual llegue a tener acceso o conocimiento '),
                    contractorWord,
                    simpleText(' que participen en las labores necesarias para el desarrollo del objeto contractual, deberán suscribir un documento de confidencialidad para el mantenimiento y reserva de los secretos industriales de'),
                    porvenirWord,
                    simpleText(' a los cuales tengan acceso en tal virtud o con ocasión de su participación en las labores de capacitación y asistencia técnica.'),
                ],
                bullet: {
                    level: 0,
                },
            })
        );
        obligations.push(
            new Paragraph({
                style: 'justified',
                children: [
                    simpleText('Una vez terminada la labor encomendada bajo cualquier circunstancia, '),
                    contractorWord,
                    simpleText(' deberá devolver a '),
                    porvenirWord,
                    simpleText(' , dentro de los cinco (5) días hábiles contados a partir de la finalización del '),
                    contractWord,
                    simpleText(' , todos los documentos e información que en forma escrita o impresa en cualquier medio magnético o mecánico que '),
                    porvenirWord,
                    simpleText(' le haya suministrado con ocasión del '),
                    contractWord,
                    simpleText(', información acerca de la cual no podrá realizar ninguna copia duplicado sin la notificación previa y autorización escrita por parte de'),
                    porvenirWord
                ],
                bullet: {
                    level: 0,
                },
            })
        );
    }

    return obligations;
};

const finishReasonsClause = (contract: Contract) => {
    return new Paragraph(
        {
            style: 'section',
            children: [
                boldAllCapsText('Sexta. - Clausales de Terminación'),
                simpleText('Además de las causales establecidas en la ley, y en otras cláusulas del presente documento, el '),
                contractWord,
                simpleText(' se dará por terminado en los siguientes casos:'),
                paragraphNumber(1),
                simpleText(' Por mutuo acuerdo entre las partes.'),
                paragraphNumber(2),
                simpleText('Por el incumplimiento de cualesquiera de las obligaciones previstas en el presente '),
                contractWord,
                simpleText('. En estos casos, la parte cumplida notificará el incumplimiento a la parte incumplida, la cual tendrá un término de quince (15) días calendario, contados a partir del día siguiente de la notificación, para resolver el incumplimiento.Pasado   éste   término   sin   resolver   el   incumplimiento,   la   parte   cumplida   podrá   tomar   la determinación de dar por terminado definitivamente el'),
                contractWord,
                simpleText(', de lo cual dará noticia por escrito a la otra parte. '),
                paragraphNumber(3),
                simpleText('En caso de liquidación obligatoria, toma de posesión para liquidar, liquidación forzosa administrativa, disolución o liquidación de alguna de las partes.'),
                paragraphNumber(4),
                simpleText('Unilateralmente por'),
                porvenirWord,
                simpleText(', mediante comunicación escrita dirigida al'),
                contractorWord,
                simpleText(' con quince (15) días calendario de anticipación a la fecha en que se desea hacer efectiva ladecisión, sin que por este hecho se entienda que se ha incumplido el '),
                contractWord,
                simpleText(' y sin lugar al pago de sanción o indemnización alguna. En este caso '),
                contractorWord,
                simpleText(' terminará de ejecutar el objeto del '),
                contractWord,
                simpleText(' que haya sido requerido y por su parte '),
                porvenirWord,
                simpleText(' pagará al '),
                contractorWord,
                simpleText(' el valor de los productos o servicios efectivamente recibidos. '),
                paragraphNumber(5),
                simpleText(' En caso queGrupo Aval Acciones y Valores S.A suscriba un Convenio Corporativo que tenga el mismo objeto del '),
                contractWord,
                simpleText(' ,y al cual '),
                porvenirWord,
                simpleText(' pueda mismoobjetoadherirse, ésta última podrá dar por terminado en cualquier momento el '),
                contractWord,
                simpleText(' , mediante comunicación escrita dirigida a la otra parte, con una antelación de quince (15) días calendario a la fecha en que se pretende hacer efectiva su decisión, sin que se entienda que ha incumplido el '),
                contractWord,
                simpleText(' y sin que por este hecho haya lugar al pago de suma alguna a título de sanción o indemnización.')
            ]
        });
};

const confidentialityClause = (contract: Contract) => {
    return [
        new Paragraph(
            {
                style: 'justified',
                children: [
                    boldAllCapsText('SÉPTIMA.-   CONFIDENCIALIDAD:  EL   CONTRATISTA '),
                    simpleText('se   obliga   para   con '),
                    porvenirWord,
                    simpleText(' aguardar absoluta confidencialidad sobre toda la información, política, procedimiento, know how,bases de datos, entre otras, y que llegare a tener conocimiento con ocasión del '),
                    contractWord,
                    simpleText(' Para efectos de la presente cláusula '),
                    contractorWord,
                    simpleText(' se obliga a: '),
                    paragraphNumberText('i'),
                    simpleText('Dar precisas instrucciones a sus empleados y/o contratistas en relación con el deber de confidencialidadpactado, a quienes la obligación aquí prevista les es extensiva, y '),
                    paragraphNumberText('ii'),
                    simpleText('No copiar o reproducir losdocumentos suministrados por'),
                    porvenirWord,
                    simpleText('para la ejecución del objeto pactado, así como devolver la totalidad de los documentos suministrados por '),
                    porvenirWord,
                    simpleText(' a partir del momento enque éstos no sean necesarios para la ejecución del objeto convenido. '),
                ]
            }),
        new Paragraph(
            {
                style: 'justified',
                children: [
                    boldAllCapsText('PARÁGRAFO  PRIMERO:EL CONTRATISTA'),
                    simpleText('declara que conoce  que la totalidad  de lainformación relacionada con los clientes de PORVENIR está sometida a reserva bancaria y porlo cual, la obligación aquí prevista se hace extensiva a dicha información.')
                ]}),
        new Paragraph(
            {
                style: 'justified',
                children: [
                    boldAllCapsText('PARÁGRAFO SEGUNDO'),
                    simpleText(': La obligación aquí prevista estará vigente por el término de duracióndel CONTRATO y dos (2) años más, no obstante en tratándose de la información sometida areserva bancaria esta obligación no cesará.')
                ]}),
        new Paragraph(
            {
                style: 'justified',
                children: [
                    boldAllCapsText('PARÁGRAFO TERCERO:EL CONTRATISTA'),
                    simpleText(': será responsable por los daños y perjuicios quele ocasionen con ocasión del incumplimiento de la obligación de confidencialidad aquí prevista.')
                ]})
    ];
};

const noEmploymentRelationship = (contract: Contract) => {
    return [
        new Paragraph(
            {
                style: 'justified',
                children: [
                    boldAllCapsText('OCTAVA.-  NO VINCULACIÓN LABORAL: '),
                    simpleText('En razón a que  EL CONTRATISTA  actúa endesarrollo del  CONTRATO como persona especializada en la ejecución del objeto del mismo,por sus propios medios y bajo su cuenta y riesgo, no está obligada a contratar en formaexclusiva con PORVENIR y por consiguiente, es el único empleador del personal que utilicepara  el  cumplimiento   del   objeto   pactado,   motivo   por  el   cual   entre  EL   CONTRATISTA  yPORVENIR  y entre PORVENIR  y el personal del  CONTRATISTA no existe relación laboralalguna, en consecuencia  EL CONTRATISTA  deberá salir a la defensa de  PORVENIR, encualquier tiempo en que se llegare a presentar una acción judicial o extrajudicial en su contra,por alguno de los empleados y/o contratistas del CONTRATISTA. ')
                ]}),
        new Paragraph(
            {
                style: 'justified',
                children: [
                    boldAllCapsText('PARÁGRAFO  PRIMERO: EL CONTRATISTA '),
                    simpleText('cumplirá con todas las obligaciones legales yextralegales de carácter laboral, de seguridad social y fiscales. ')
                ]}),
        new Paragraph(
            {
  style: 'justified',
  children: [
                    boldAllCapsText('PARÁGRAFO SEGUNDO: PORVENIR '),
                    simpleText('podrá exigir al CONTRATISTA en cualquier momentola comprobación efectiva de tales pagos y aportes, al efecto EL CONTRATISTA podrá entregarcertificación firmada por el Revisor Fiscal que acredite el cumplimiento de dichas obligaciones. ')
                ]}),
        new Paragraph(
            {
  style: 'justified',
  children: [
                    boldAllCapsText('PARÁGRAFO  TERCERO'),
                    simpleText('Ninguna de las obligaciones contenidas en las cláusulas de esteContrato generarán en ningún caso, vínculo adicional entre LAS PARTES, ni habilitarán a ELCONTRATISTA a representar a PORVENIR a ningún título. EL CONTRATISTA declara que nolos une ni ha unido ningún contrato de mandato, comisión ni agencia comercial y que, enconsecuencia, carece de autorización o vínculo contractual que le faculte para representar ocomprometer de alguna manera a  PORVENIR, por cuanto en desarrollo de su gestión denegocios ha actuado y lo seguirá haciendo como comerciante independiente, por su propiacuenta y en su propio nombre. ')
                ]})
    ];
};

const securityAndHealthClause =  (contract: Contract) => {
    return new Paragraph(
        {
  style: 'justified',
  children: [
                boldAllCapsText('NOVENA. - SEGURIDAD Y SALUD EN EL TRABAJO:'),
                simpleText('se compromete acumplir con lo establecido en los decretos 1072 de 2015, el 52 de 2017 y la Resolución 1111de2017, todas ellas expedidas por el Ministerio del Trabajo y demás normas que la adicionen,deroguen modifiquen o complementen, de igual manera, entiende y acepta el contenido delmanual de contratistas de PORVENIR, siendo una de sus obligaciones principales atender a lodispuesto en dicho documento, el cual hace parte del CONTRATO.')
            ]});
};

const autonomyAndAccountabilityClause =  (contract: Contract) => {
    return new Paragraph(
        {
            style: 'justified',
            children: [
                boldAllCapsText('DÉCIMA. - AUTONOMÍA Y RESPONSABILIDAD ANTE TERCEROS: '),
                simpleText(' En la prestación de losservicios contratados,  EL CONTRATISTA  actúa por su propia cuenta y riesgo; posee plenaautonomía   directiva,   administrativa   y   técnica.   En   ningún   caso  EL   CONTRATISTA  estarálegitimado  para  invocar  algún   tipo  de  solidaridad  PORVENIR  en  el  cumplimiento   de  susobligaciones. En el evento en que PORVENIR sea obligado a pagar perjuicios en razón o con ocasión de la ejecución de este CONTRATO y por culpa de EL CONTRATISTA, PORVENIRrepetirá contra éste o compensará el total de los perjuicios de los saldos que deba a  ELCONTRATISTA, sin perjuicio de las acciones legales pertinentes.')
            ]
    });
};

const guaranteeClause = (contract: Contract) => {
    const contractualCivilLiability = contract?.guaranteeSection?.guaranteeAppliedOptions?.contractualCivilLiability;
    const goodHandlingOfTheAdvance = contract?.guaranteeSection?.guaranteeAppliedOptions?.goodHandlingOfTheAdvance;
    const complianceWithTheContract = contract?.guaranteeSection?.guaranteeAppliedOptions?.complianceWithTheContract;
    const qualityOfTheGoodOrService = contract?.guaranteeSection?.guaranteeAppliedOptions?.qualityOfTheGoodOrService;
    const salariesAndSocialBenefits = contract?.guaranteeSection?.guaranteeAppliedOptions?.salariesAndSocialBenefits;

    const guarantees = [
        new Paragraph(
            {
  style: 'justified',
  children: [
                    boldAllCapsText('DÉCIMA   PRIMERA. - GARANTÍAS: '),
                    simpleText('  EL   CONTRATISTA  se   obliga   a   constituir   con   unacompañía de seguros legalmente autorizada para desarrollar su objeto social en Colombia y enfavor y a satisfacción de PORVENIR, las siguientes pólizas de seguros:'),
                ]
            })
    ];

    if (contractualCivilLiability) {
        guarantees.push(
            bulletText('De responsabilidad civil extracontractual:que ampare los posibles perjuicioscausados a terceros, por el veinte por ciento (20%)del valor estimado del CONTRATO,con una vigencia igual a la del mismo y seis (6) meses más.'),
        );
    }

    if (complianceWithTheContract) {
        guarantees.push(
            bulletText('Cumplimiento del CONTRATO: Por el treinta por ciento (30%) del valor del CONTRATO y con una vigencia igual a la de su duración y seis (6) meses más;')
        );
    }

    if (salariesAndSocialBenefits) {
        guarantees.push(
            bulletText('De Salarios y prestaciones sociales:  Por el veinte por ciento (20%) del valor del CONTRATO con una vigencia igual a la de su duración y tres (3) años más;')
        );
    }

    if (qualityOfTheGoodOrService) {
        guarantees.push(
            bulletText('De calidad del bien o servicio: Por el treinta por ciento (30%) del valor del CONTRATO y con una vigencia de un (1) año contado a partir de la entrega final de los bienes o lostrabajos a satisfacción de PORVENIR;')
        );
    }

    if (goodHandlingOfTheAdvance) {
        guarantees.push(
            bulletText('Buen Manejo del Anticipo: Por el cien por ciento (100%) del valor del anticipo, con una vigencia igual a la de su duración y seis (6) meses más')
        );
    }

    guarantees.push(
        new Paragraph(
            {
                text: 'La presentación de las pólizas y de la constancia de pago de la(s) prima(s) de seguros, es requisito para la realización del primer pago. En caso de efectuarse la prórroga o modificacióndel valor del CONTRATOEL CONTRATISTA se obliga a presentar el anexo de renovación delas pólizas y pago de las primas, dentro de los cinco (5)días siguientes a la prórroga o lasuscripción del correspondiente otrosí'
            })
    );

    return guarantees;
};

const penaltyFeeClause = () => {
    return new Paragraph(
        {
                style: 'justified',
                children: [
                boldAllCapsText('DÉCIMA SEGUNDA.-  MULTAS: '),
                simpleText('En caso de mora o incumplimiento parcial de cualesquiera delas obligaciones que  EL CONTRATISTA  contrae con  PORVENIR, ésta   podrá imponer alCONTRATISTA, multas sucesivas equivalente al uno por ciento (1%) del valor del CONTRATO,por cada día de retardo o incumplimiento, a menos que este se halle motivado por fuerza mayoro caso fortuito debidamente comprobado.  PORVENIR  podrá hacer efectivo el valor de lasmultas sobre cualquier suma que adeude al CONTRATISTA. Las multas con un tope máximodel diez (10%) del valor total del mismo, por lo cual si el valor de las multas excediere esteporcentaje PORVENIR dará aplicación a la cláusula penal. EL CONTRATISTA expresamenterenuncia a cualquier requerimiento judicial o extrajudicial para constituirse en mora.')
            ]});
};

const penaltyClause = () => {
    return [
        new Paragraph(
            {
  style: 'justified',
  children: [
                    boldAllCapsText('DÉCIMA TERCERA.-  CLAUSULA  PENAL: '),
                    simpleText(' En caso de incumplimiento total o parcial decualesquiera de las obligaciones a cargo del  CONTRATISTA  y que se derivan del presenteCONTRATO  o  en  caso en  que  el   valor  de  las  multas ascendiere   al  10%  del  valor  delCONTRATO, se causará a favor de PORVENIR y a cargo del CONTRATISTA la obligación depagar a título de pena una suma equivalente al treinta por ciento (30%) del valor total delCONTRATO, como estimación anticipada de perjuicios, sin que esto impida la posibilidad deexigir el reconocimiento de los demás perjuicios que se hubieren causado y que no alcancen aestar   cubiertos   con   el   porcentaje   mencionado   o   exigir   el   cumplimiento   de   la   obligación incumplida.')
                ]}),
        new Paragraph(
            {
  style: 'justified',
  children: [
                    boldAllCapsText('PARÁGRAFO PRIMERO: '),
                    simpleText(' El monto de la cláusula penal será exigible privada o judicialmentesin necesidad de requerimientos  previos.  PORVENIR  podrá hacer efectivo el valor de lacláusula penal, con cargo a cualquier suma que debiere a EL CONTRATISTA.')
                ]})
    ];
};


const interventoriesClause = () => {
    return new Paragraph(
        {
  style: 'justified',
  children: [
                boldAllCapsText('DÉCIMA CUARTA.- INTERVENTORIAS: 1.  PORVENIR '),
                simpleText(' podrá hacer en cualquier momentoreclamos, objeciones o sugerencias por escrito para que EL CONTRATISTA corrija deficiencias en el desarrollo del objeto del  CONTRATO, y  EL CONTRATISTA  se obliga a dar precisasinstrucciones a sus empleados para que el   objeto de este  CONTRATO  sea desarrollado asatisfacción de PORVENIR.2. PORVENIR se reserva el derecho de inspeccionar y/o auditar alCONTRATISTA  a fin de revisar los procesos y procedimientos utilizados por éste para lacorrecta ejecución del CONTRATO.PARÁGRAFO: Las facultades aquí previstas se ejerceránpor  PORVENIR  por   ministerio   del   presente  CONTRATO  y   en   consecuencia,   ni   aúnaccidentalmente para ningún efecto legal, podrá equipararse a la autoridad patronal por cuantono encierra la facultad de impartir órdenes, dar instrucciones en cuanto el modo, el tiempo ocantidad de trabajo, ni imponer reglamentos internos frente al CONTRATISTA ni frente a losempleados de los que este se valga para el cumplimiento de los compromisos contractuales.')
            ]});
};


const conflictsOfInterestClause = () => {
    return new Paragraph(
        {
  style: 'justified',
  children: [
                boldAllCapsText('DÉCIMA QUINTA. - CONFLICTOS DE INTERÉS '),
                simpleText('EL CONTRATISTA declara que a la fechade la firma del CONTRATO, no se encuentra incurso en una situación generadora de conflictosde interés con PORVENIR y que no ha iniciado, ni iniciará durante la vigencia del CONTRATO,en nombre propio o por cuenta de un tercero, una acción jurídica, judicial o extrajudicial encontra de PORVENIR y/o de los fondos por esta administrados. Así mismo, manifiesta que encaso en que llegare a presentarse o en caso de duda sobre la existencia o no de un conflictodeberá revelarlo de manera inmediata a PORVENIR a efectos de que se pueda determinar laviabilidad o no de administrarlo y la forma de hacerlo, lo cual puede implicar la terminaciónunilateral del  CONTRATO, por parte de  PORVENIR  sin que por este hecho haya lugar asanción alguna. En este caso, será necesario que EL CONTRATISTA adelante las gestionestendientes a la sustitución de cualquier poder que PORVENIR le hubiere conferido a quien estale indique y la entrega de la totalidad de los documentos que sean necesarios para darcontinuidad con los mismos, o que PORVENIR le hubiere entregado, en un término no mayorde cinco (5) días hábiles, contados a partir de la notificación que le hiciere PORVENIR de ladecisión adoptada.')
            ]});
};

const contractorDeclarations = () => {
    return new Paragraph(
        {
  style: 'justified',
  children: [
                boldAllCapsText('DÉCIMA SEXTA. - DECLARACIONES DEL CONTRATISTA:'),
                simpleText('1.EL CONTRATISTAdeclaraque su negocio y los recursos que utilizará para la ejecución del CONTRATO, no provienen deninguna actividad ilícita de las contempladas en el Código Penal Colombiano o en cualquiernorma que lo modifique o adicione. Así mismo se compromete a entregar toda la informaciónque le sea solicitada para dar cumplimiento a las disposiciones relacionadas con la Prevencióndel Lavado de Activos y Financiación del Terrorismo y declara que la misma es veraz yverificable.  En  el evento  en que  EL CONTRATISTA  no  cumpla con  las  declaraciones  yobligaciones   que   adquiere   en   virtud  de  la   presente   cláusula,  PORVENIR,   podrá   dar   porterminado el CONTRATO de manera inmediata, sin que por este hecho haya lugar al pago desanción o indemnización alguna, bastará la comunicación por escrito, incluyendo el correoelectrónico, que sobre esta decisión haya tomado PORVENIR. 2. EL CONTRATISTA autoriza aPORVENIR, y a quien en el futuro represente sus derechos, de manera irrevocable, paraconsultar y reportar a cualquier entidad que maneje o administre bases de datos que tenganfines   de   información,   financieros,   estadísticos,   de   control,   supervisión,   gerenciales   y   deconsolidación de información, todos mis datos económicos, incluyendo la información referentea mi (nuestro) comportamiento comercial y crediticio. Como consecuencia de esta autorizaciónPORVENIR podrá consultar e incluir mis datos financieros y comerciales en las bases de datosantes mencionadas, en las cuales se verá reflejado nuestro actual y pasado comportamiento enrelación   con   el   cumplimiento   o   incumplimiento   de   mis   obligaciones,   información   quepermanecerá reportada por los términos previstos en la Ley o en su defecto en los reglamentosde dichas sociedades.  3.  EL CONTRATISTA  autoriza a  PORVENIR, y a quien en el futurorepresente sus derechos, de manera expresa e irrevocable, para que PORVENIR o el GrupoAval   Acciones   y   Valores   S.A.,   así   como   cualquiera   de   sus   vinculadas   (Las   Empresas Cubiertas), tenga acceso a toda la información y documentación que tenga relación con el CONTRATO.')
            ]});
};

const antiFraudAndAntiCorruptionClause = () => {
    return new Paragraph(
        {
  style: 'justified',
  children: [
                boldAllCapsText('DÉCIMA SÉPTIMA.- POLÍTICA ANTIFRAUDE Y ANTICORRUPCIÓN:'),
                simpleText('1. EL CONTRATISTAdeclara que conoce que PORVENIRcuenta con una política antifraude y anticorrupción, a lacual tuvo acceso y se adhirió en el proceso de vinculación como proveedor de PORVENIR. Envirtud de esta política se pretende desarrollar acciones coordinadas para prevenir el fraude y lacorrupción, promover la transparencia en la gestión de la administración, disuadir las conductasindebidas e incentivar el compromiso de sus grupos de interés contra el fraude y la corrupción.EL CONTRATISTA se obliga para con PORVENIR a cumplir con esta política, a informarle decualquier circunstancia que pudiere ir en contra de la misma y evitar cualquier práctica indebida,fraudulenta   o   corrupta.    2.  Las   partes   declaran   conocer   que   de   conformidad   con   lasdisposiciones locales e internacionales anti-corrupción y anti-soborno, se encuentra prohibidopagar, prometer o autorizar el pago directo o indirecto de dinero o cualquier otro elemento devalor a cualquier servidor público o funcionario de gobierno, partido político, candidato, o acualquiera persona actuando a nombre de una entidad pública cuando dicho pago comporta laintención corrupta de obtener, retener  o direccionar negocios a alguna persona para obteneruna ventaja ilícita (“Normas Anti-Soborno y Anti-Corrupción del Sector Público”). Así mismo,LAS PARTES reconocen la existencia de regulación similar en materia de soborno en el sectorprivado, entendido como el soborno de cualquier persona particular o empresa privada paraobtener una ventaja indebida (“Normas Anti-Soborno y Anti-Corrupción del Sector Privado” yjunto con las Normas Anti-Soborno y Anti-Corrupción del Sector Público, las “Normas Anti-Soborno y Anti-Corrupción”). En consideración de lo anterior, las partes se obligan a acatar lasNormas Anti-Soborno y Anti-Corrupción absteniéndose de efectuar conductas que atentencontra   las   referidas   Normas  Anti-Soborno   y   Anti-Corrupción   a   nivel   local   o   internacional.PARÁGRAFO:  Será  causal   de  terminación   con  justa  causa  del  presente  CONTRATO  elincumplimiento de cualesquiera de las obligaciones relacionadas en esta cláusula.  En esteevento PORVENIR dará por terminado el CONTRATO de manera inmediata, sin que por estehecho haya lugar al pago de sanción o indemnización alguna, bastará la comunicación porescrito, incluyendo el correo electrónico, que sobre esta decisión haya tomado PORVENIR.')
            ]});
};

const personalDataTreatmentClause = (contract: Contract) => {
    const requirePersonalDataTreatmentClause = contract?.clausesSection?.requirePersonalDataTreatmentClause;
    return requirePersonalDataTreatmentClause
        ? [
        new Paragraph(
            {
  style: 'justified',
  children: [
                    boldAllCapsText('DÉCIMA  OCTAVA.-  TRATAMIENTO DE DATOS:'),
                    simpleText('Toda la información relativa a los datospersonales,   que  EL   CONTRATISTA  y/o   sus   empleados   recolecte,   reciba   y   obtenga   dePORVENIR  y/o de los clientes de  EL CONTRATISTA  o de terceros, de manera directa oindirecta, en forma verbal, escrita, gráfica, en medio magnético o bajo cualquier otra forma queno sea del dominio público, de la que sean titulares los clientes de PORVENIR, sus empleadosy en general que PORVENIR tenga la calidad de RESPONSABLE DEL TRATAMIENTO DE LAINFORMACIÓN   en   los   términos   de   la   Ley   1581   de   2012,   deberá   ser   tratada   por  ELCONTRATISTA, en calidad de  ENCARGADO DEL TRATAMIENTO, de conformidad con elalcance   del   artículo   2.2.2.25.5.2   del   Decreto   Único   Reglamentario   del   Sector   Comercio,Industria y Turismo – 1074 de 2015 1074 de 2015 (el cual incorporó al Decreto 1377 de 2013)y/o   cualquier   norma   que   lo   modifique,   adicione   y   complemente,   y   tal   información   seráconsiderada   información   confidencial   y   reservada   en   los   términos   de   la   cláusula   deconfidencialidad  del presente CONTRATO.')
                ]}),
        new Paragraph(
            {
                text: 'En desarrollo de lo anterior, EL CONTRATISTA deberá:'
            }),
        bulletText('a) Garantizar al Titular, en todo tiempo, el pleno y efectivo ejercicio del derecho de hábeasdata;'),
        bulletText('b) Conservar la información bajo las condiciones de seguridad necesarias para impedir suadulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento;'),
        bulletText('c) Realizar oportunamente la actualización, rectificación o supresión de los datos en lostérminos de la presente ley;'),
        bulletText('d) Actualizar la información reportada por los Responsables del Tratamiento dentro de loscinco (5) días hábiles contados a partir de su recibo;'),
        bulletText('e) Tramitar las consultas y los reclamos formulados por los Titulares en los términosseñalados en la presente ley;'),
        bulletText('f) Adoptar un manual interno de políticas y procedimientos para garantizar el adecuadocumplimiento de la presente ley y, en especial, para la atención de consultas y reclamospor parte de los Titulares'),
        bulletText('g) Registrar en la base de datos las leyendas “reclamo en trámite” en la forma en que seregula en la presente ley;'),
        bulletText('h) Insertar en la base de datos la leyenda “información en discusión judicial” una veznotificado por parte de la autoridad competente sobre procesos judiciales relacionadoscon la calidad del dato personal;'),
        bulletText('i) Abstenerse de circular información que esté siendo controvertida por el Titular y cuyobloqueo haya sido ordenado por la Superintendencia de Industria y Comercio;'),
        bulletText('j) Permitir el acceso a la información únicamente a las personas que pueden tener accesoa ella;'),
        bulletText('k) Informar a la Superintendencia de Industria y Comercio cuando se presenten violacionesa los códigos de seguridad y existan riesgos en la administración de la información delos Titulares;'),
        bulletText('l) Cumplir las instrucciones y requerimientos que imparta la Superintendencia de Industriay Comercio'),
        bulletText('m) Salvaguardar la seguridad de las bases de datos que contengan datos personales.'),
        bulletText('n) Salvo autorización previa, expresa y escrita de  PORVENIR,  EL CONTRATISTA  nopodrá modificar, eliminar, compartir y circular a terceros ni utilizar la información y losdatos de carácter personal recibidos en ejecución del CONTRATO, con alcances o parafines diferentes a los previstos en el CONTRATO.'),
        bulletText('o) Una vez cumplida la prestación contractual, los datos de carácter personal deberán serdevueltos a  PORVENIR, al igual que cualquier soporte o documentos en que constealgún dato de carácter personal objeto del tratamiento.'),
        bulletText('p) Dar a tal información el tratamiento (según la definición dada por el artículo 3 de la Ley1581 de 2012) de acuerdo con la finalidad señalada en el CONTRATO; y siempre deconformidad con los principios establecidos en la ley para el tratamiento de datospersonales'),
        bulletText('q) Dar aplicación de las obligaciones a cargo de PORVENIR establecidas en la Política deTratamiento   de   Datos   Personales   de  PORVENIR,   y   acoger   las   instrucciones   quePORVENIR brinde en cada momento, como responsable del tratamiento, para la estrictaprestación de los servicios encomendados al amparo del CONTRATO.'),
        bulletText('r) Dar cumplimiento a las obligaciones establecidas para los Encargados de tratamiento dedatos personales en el artículo 18 de la Ley 1581 de 2012 y las normas que lamodifiquen o sustituyan.'),
        bulletText('s) Adoptar un manual interno de políticas y procedimientos para el tratamiento de datospersonales.'),
        bulletText('t) Dar cumplimiento a las obligaciones señaladas por la Ley 1581 de 2012, el Decreto1074 y el Capítulo 25 del Título 2 del Decreto Único Reglamentario del Sector Comercio,Industria y Turismo – 1074 de 2015 (compilatorio del Decreto 1377 de 2013). Respectotanto a la información personal de los clientes de PORVENIR, como de sus empleados yen general terceros, como titulares de la información de los cuales  PORVENIR  searesponsable.'),
        bulletText('u) Adoptar las medidas de índole técnica y organizativas necesarias para garantizar laseguridad y la reserva de los datos de carácter personal y evitar su alteración, pérdida,tratamiento o acceso no autorizado, en todo caso, no podrá manipular la informaciónalmacenada, respetando su integridad, autenticidad y confidencialidad de conformidadcon lo establecido en los literales del artículo 4 de la Ley 1581 de 2012 y demás normasque le sean aplicables. Estas obligaciones debe EL CONTRATISTA a su vez exigirla asus dependientes, que tengan acceso a la información, y estará vigente aún después dela terminación del CONTRATO o de las labores que forman parte del tratamiento de losdatos personales.'),
        bulletText('v) Dar tratamiento, a nombre del responsable, a los datos personales conforme a losprincipios que los tutelan.'),
        bulletText('w) Salvaguardar   la   seguridad   de   las   bases   de   datos   en   los   que   se   contenga   datospersonales.'),
        bulletText('x) Guardar la confidencialidad respecto del Tratamiento. De los datos personales.'),
        bulletText('y) Dar cumplimiento a la Política de Tratamiento de Datos Personales de Porvenir y demásnormas       internas       respecto       a       Tratamiento       de       Datos(https://www.porvenir.com.co/documents/64086/0/PDF_manual_proteccion_datos.pdf/f504e045-a96e-1062-db39-981ab134fae8).')
    ] : [];
};

const cyberSecurityClause = (contract?: Contract) => {
    const requireCyberSecurityClause = contract?.clausesSection?.requireCyberSecurityClause;
    return requireCyberSecurityClause ? [
        new Paragraph(
            {
  style: 'justified',
  children: [
                    boldAllCapsText('DÉCIMA NOVENA. CLÁUSULA DE CIBERSEGURIDAD:CIBERSEGURIDAD:'),
                    simpleText('Para efectosde dar cumplimiento a las políticas de  PORVENIR  y a las normas sobre Seguridad de laInformación y Ciberseguridad aplicables a la relación contractual, EL CONTRATISTA se obligaa:')
                ]}),
        bulletText('1. Implementar  políticas  y  procedimientos   para   gestionar  los   riesgos   y  amenazas  deseguridad   de   la   información   y   Ciberseguridad   inherentes   al   servicio   objeto   de   sunegocio,   incluyendo   la   adopción   de   estándares   internacionalmente   aceptados   deconformidad con las líneas de negocio y servicios prestados por EL CONTRATISTA.'),
        bulletText('2. Cumplir el marco regulatorio aplicable, así como las políticas y requisitos que en materiade seguridad de la información y Ciberseguridad sean aplicables al  CONTRATISTA,incluyendo lo dispuesto en la Circular Básica Jurídica de la Superintendencia Financierade Colombia en materia de requerimientos mínimos de seguridad y calidad para larealización de operaciones y acceso e información al consumidor financiero y uso defactores biométricos, así como lo dispuesto en materia de instrucciones relacionadascon el uso de servicios de computación en la nube.'),
        bulletText('3. EL CONTRATISTA deberá cumplir cualquier instrucción que sobre la materia se incluyaen los acuerdos de niveles de servicio que se convengan con PORVENIR.'),
        bulletText('4. En caso de que EL CONTRATISTA subcontrate los servicios de computación en la nubeo   algún   otro   servicio   de   computación   pactados   en   el   presente   contrato,  ELCONTRATISTA se obliga a que estos subcontratistas cumplan las normas, políticas yrequisitos en materia de seguridad y Ciberseguridad. Sin perjuicio de lo anterior,  ELCONTRATISTA  seguirá siendo responsable de cumplir los Acuerdos de Niveles deServicio que se convenga con PORVENIR.'),
        bulletText('5. Garantizar que los servicios ofrecidos por EL CONTRATISTAcuenten con políticas yprocedimientos en materia de seguridad de la información y Ciberseguridad, relativos ala   prevención,   protección   y   detección,   respuesta   a   Incidentes,   recuperación   yaprendizaje.'),
        bulletText('6. Conservar la información de PORVENIR, bajo las condiciones de seguridad necesariaspara impedir su adulteración, pérdida, consulta, tratamiento, uso o acceso no autorizadoo fraudulento. Esto incluye la información que sea almacenada por EL CONTRATISTA durante la ejecución del contrato, incluye la información que PORVENIR almacene sobrelas   capacidades   en   los   servicios   contratados   que   hayan   sido   asignadas   por  ELCONTRATISTA. EL CONTRATISTA no tendrá acceso a la información que PORVENIRalmacene sobrelas capacidades y servicios contratados.'),
        bulletText('7. Reportar todos los Incidentes que presente en su operación y que afecten la informaciónde PORVENIR. Los reportes de Incidentes deberán ser informados a PORVENIR con laprontitud que exija la materialidad del Incidente y en todo caso en un plazo no mayor aveinticuatro (24) horas contadas a partir del momento de la ocurrencia del Incidente odel momento en el que  EL CONTRATISTA  tenga conocimiento del Incidente, lo queocurra primero. El informe mencionado en el presente numeral deberá presentarse porescrito. Las notificaciones deberán incluir fecha y hora, detalle de lo ocurrido, recursoafectado, acciones de remediación aplicadas o pendientes de aplicación, estado delIncidente al momento del reporte y tiempo estimado de solución al Incidente.'),
        bulletText('8. PORVENIR  podrá   solicitar   información   sobre:   (a)   el   estado   del   Incidente   deCiberseguridad reportado de conformidad con lo establecido en el numeral (vii) y/o (b)los Incidentes de Ciberseguridad presentados a lo largo de la ejecución del contrato. Las   solicitudes   de   información   mencionadas   con  anterioridad   podrán   realizarse   encualquier tiempo y a través de los medios dispuestos por EL CONTRATISTA, quien seobliga a conservar la información durante el tiempo de duración de la relación comercialy diez (10) años más.”'),
        bulletText('9. Permitir a PORVENIR o a quien ésta designe, la realización de auditorías durante laejecución del presente contrato, con el fin de verificar el cumplimiento de los procesosque  EL   CONTRATISTA  ejecute   para   prevenir,   detectar,   responder,   recuperar   lainformación de EL CONTRATISTA y sus clientes ante un Evento de Ciberseguridad oun Incidente.'),
        bulletText('10. En caso que se presente un Incidente durante la ejecución de los servicios prestadospor EL CONTRATISTA en el que se puedan ver comprometidos datos de PORVENIR,EL CONTRATISTA  se obliga a dar aviso a  PORVENIR  con la prontitud que exija lamaterialidad del Incidente y en todo caso, en un plazo no mayor a veinticuatro (24) horascontadas a partir del momento de la ocurrencia del Incidente o del momento en el queEL   CONTRATISTA  tenga   conocimiento   del   Incidente,   lo   que   ocurra   primero.  ELCONTRATISTA deberá realizar todas las medidas tendientes a solucionar el Incidente ya cumplir todas las solicitudes o requerimientos que PORVENIRconsidere pertinentes.EL CONTRATISTA se obliga a conservar todos los soportes y evidencias del Incidente yde las actividades realizadas como respuesta a dicho Incidente por un término de 10años. En caso que sea requerido por una autoridad competente,  EL CONTRATISTAsuministrará la información necesaria para atender la respectiva solicitud.'),
        new Paragraph(
            {
  style: 'justified',
  children: [
                    boldAllCapsText('PARAGRÁFO PRIMERO: '),
                    simpleText('El incumplimiento de las obligaciones contenidas en la presentecláusula   constituirá   causal   de   terminación   inmediata   del   presente   contrato   por   parte   dePORVENIR, sin que hubiere lugar al pago de multas, penalidades o indemnizaciones a favor deEL CONTRATISTA.')
                ]
            }),
        new Paragraph(
            {
  style: 'justified',
  children: [
                    boldAllCapsText('PARÁGRAFO SEGUNDO: '),
                    simpleText('EL CONTRATISTA se obliga a indemnizar a PORVENIR y a susclientes   o   terceros   afectados,   por   los   perjuicios   debidamente   probados   derivados   del incumplimiento de las obligaciones establecidas en esta cláusula, en los términos del contratosuscrito.')
                ]
            }),
        new Paragraph(
            {
  style: 'justified',
  children: [
                    boldAllCapsText('PARÁGRAFO TERCERO: '),
                    simpleText('Para la lectura e interpretación   de   la   presente   cláusula   deCiberseguridad, las expresiones con mayúscula inicial que se utilizan tendrán los siguientessignificados:')
                ]
            }),
        simpleParagraph('- Ciberseguridad: Es   el   conjunto   de   políticas,   conceptos,   recursos,   salvaguardas,directrices,   métodos   de   gestión   del   riesgo,   acciones,   investigación   y   desarrollo,formación,   prácticas,   seguros   y   tecnologías   orientadas   a   defender   y   anticipar   lasamenazas cibernéticas para proteger y asegurar los datos, sistemas y aplicaciones en elCiberespacio que son esenciales para la operación de PORVENIR.'),
        simpleParagraph('- Ciberespacio: Entorno resultante de la interacción de personas, software y servicios eninternet, a través de dispositivos tecnológicos conectados a una red, propiedad demúltiples dueños con diferentes requisitos operativos y regulatorios.'),
        simpleParagraph('- Incidente: Ocurrencia de una situación que afecta la protección o el aseguramiento delos datos, sistemas y aplicaciones que son esenciales para el negocio.')
    ] : [];
};

const indemnityClause = () => {
    return new Paragraph(
        {
  style: 'justified',
  children: [
                boldAllCapsText('VIGÉSIMA. - INDEMNIDAD:'),
                simpleText('EL CONTRATISTA mantendrá indemne y defenderá a su propiocosto a  PORVENIR  de cualquier pleito, queja o demanda y responsabilidad de cualquiernaturaleza, incluyendo costos y gastos provenientes de actos y omisiones del contratista en eldesarrollo de este CONTRATO. EL CONTRATISTA se obliga a evitar que sus empleados, susacreedores, sus proveedores y/o terceros, presenten reclamaciones (judiciales o extrajudiciales)contra PORVENIR, con ocasión o por razón de acciones u omisiones suyas, relacionadas conla ejecución del  CONTRATO. Si ello no fuere posible y se presentaren reclamaciones odemandas   contra  PORVENIR,   esta   entidad   podrá   comunicar   la   situación   por   escrito   alCONTRATISTA. En cualquiera de dichas situaciones, el CONTRATISTA se obliga a acudir endefensa de los intereses de  PORVENIR, para lo cual contratará profesionales idóneos querepresenten a la entidad y asumirá el costo de los honorarios de éstos, del proceso y de lacondena,   si   la   hubiere.   Si  PORVENIR  estima   que   sus   intereses   no   están   siendoadecuadamente defendidos, lo manifestará por escrito al  CONTRATISTA, caso en el cualacordará   la   mejor   estrategia   de   defensa   o,   si  PORVENIR  lo   estima   necesario,   asumirádirectamente la misma. En este último caso, PORVENIR cobrará y descontará de los saldos afavor del CONTRATISTA en este o en otros CONTRATOS, todos los costos que implique esadefensa. Si no hubiere saldos pendientes de pago a favor del contratista, PORVENIR podráproceder, para el cobro de los valores a que se refiere este numeral, por la vía ejecutiva, para locual este  CONTRATO, junto con los documentos en los que se consignen dichos valores,prestará mérito ejecutivo.')
            ]
        }
    );
};

const fortuitousEventClause = () => {
    return new Paragraph(
        {
  style: 'justified',
  children: [
                boldAllCapsText('VIGÉSIMA PRIMERA. - CASO FORTUITO Y FUERZA MAYOR.'),
                simpleText('PORVENIR queda exoneradode cualquier tipo de responsabilidad por el incumplimiento lasobligaciones que le son propias opor la demora en la satisfacción de las mismas, cuando el incumplimiento o retardo, seaconsecuenciade   un   evento   de   caso   fortuito   o   fuerza   mayor   debidamente   constatadas   yreconocidas   en   la   Ley   o   la   Jurisprudencia.   De   manera   ilustrativa   y   no   restrictiva,seconsiderarán casos fortuitos o fuerza mayor: terremotos, maremotos, derrumbes, lluvias irregulares, inundaciones, asonadas, guerras, incendios, expedición de dispositivos legales,paralizaciones laborales y terrorismo, entre otros.')
            ]
        }
    );
};

const guaranteeClause2 = () => {
    return new Paragraph(
        {
  style: 'justified',
  children: [
                boldAllCapsText('VIGÉSIMA   SEGUNDA.-   GARANTÍA: '),
                simpleText('EL CONTRATISTA  manifiesta   expresamente   aPORVENIR que el producto ofrecido es el resultado de una actividad empresarial en la cual seha dado cumplimiento a las normas nacionales e internacionales sobre propiedad industrial. Enconsecuencia,  EL CONTRATISTA  será responsable sin limitación alguna, de los daños operjuicios ocasionados a  PORVENIR  en caso que una tercera persona demuestre ante lasautoridades judiciales, administrativas o de cualquier naturaleza, de cualquier país que elSoftware, objeto del CONTRATO infringe algún derecho de patente, derecho de autor, o marcade fábrica, y en general cualquier disposición relacionada con la propiedad intelectual delproducto vendido y/o licenciado. En tal evento, a más de la responsabilidad por los perjuicioscausados a  PORVENIR.  EL CONTRATISTA  asumirá la defensa de  PORVENIR  ante lasautoridades del país en el cual se inicien las acciones. En caso de que haya lugar a resarcirperjuicios al tercero por cualquier concepto, EL CONTRATISTA, en virtud de este CONTRATO,se obliga a pagarlos o resarcirlos, liberando a PORVENIR de cualquier responsabilidad.')
            ]
        }
    );
};

const transferClause = () => {
    return new Paragraph(
        {
  style: 'justified',
  children: [
                boldAllCapsText('VIGÉSIMA TERCERA. - CESIÓN Y SUBCONTRATACIÓN: '),
                simpleText('LAS PARTES no podrán ceder entodo o en parte el presente  CONTRATO  a ninguna persona natural o jurídica sin el previoconsentimiento por escrito de la otra. EL CONTRATISTA tampoco podrá subcontratar parcial ototalmente el objeto del CONTRATO, sin la previa autorización escrita de PORVENIR.')
            ]
        }
    );
};

const modificationsClause = () => {
    return new Paragraph(
        {
  style: 'justified',
  children: [
                boldAllCapsText('VIGÉSIMA CUARTA. - MODIFICACIONES: '),
                simpleText('Para efectos de validez todas las modificaciones oadiciones al CONTRATO deberán constar por escrito, firmado por los representantes legales delas dos partes. ')
            ]
        }
    );
};

const coordinationClause = () => {
    return new Paragraph(
        {
  style: 'justified',
  children: [
                boldAllCapsText('VIGÉSIMA   QUINTA.   -  COORDINACIÓN,   SEGUIMIENTO   Y   COMUNICACIONES: '),
                simpleText('La coordinación y seguimiento CONTRATO, así como de enviar y recibir las comunicaciones, o deentregar la información que se requiera en desarrollo del mismo, estará a cargo de laspersonas que se relacionan a continuación ')
            ]
        }
    );
};

const contractorInformationSection = (contract: Contract) => {
    return [
        subTitle('POR PARTE DE EL CONTRATISTA:'),
        simpleParagraph(`Nombre: ${contract?.coordinationAndFollowingSection?.supplierInfo?.name}`),
        simpleParagraph(`Apellidos: ${contract?.coordinationAndFollowingSection?.supplierInfo?.lastname}`),
        simpleParagraph(`Teléfono: ${contract?.coordinationAndFollowingSection?.supplierInfo?.telephone}`),
        simpleParagraph(`Ext: ${contract?.coordinationAndFollowingSection?.supplierInfo?.telephoneExt}`),
        simpleParagraph(`Celular: ${contract?.coordinationAndFollowingSection?.supplierInfo?.phoneNumber}`),
        simpleParagraph(`Correo Electrónico : ${contract?.coordinationAndFollowingSection?.supplierInfo?.email}`),
        simpleParagraph(`Bogotá: ${contract?.coordinationAndFollowingSection?.supplierInfo?.city}`)
    ];
};

const porvenirInformationSection = (contract: Contract) => {
    return [
        subTitle('POR PARTE DE Porvenir:'),
        simpleParagraph(`Nombre: ${contract?.coordinationAndFollowingSection?.interCoordinatorInfo?.name}`),
        simpleParagraph(`Apellidos: ${contract?.coordinationAndFollowingSection?.interCoordinatorInfo?.lastname}`),
        simpleParagraph(`Teléfono: ${contract?.coordinationAndFollowingSection?.interCoordinatorInfo?.telephone}`),
        simpleParagraph(`Ext: ${contract?.coordinationAndFollowingSection?.interCoordinatorInfo?.telephoneExt}`),
        simpleParagraph(`Celular: ${contract?.coordinationAndFollowingSection?.interCoordinatorInfo?.phoneNumber}`),
        simpleParagraph(`Correo Electrónico : ${contract?.coordinationAndFollowingSection?.interCoordinatorInfo?.email}`),
        simpleParagraph(`Bogotá: ${contract?.coordinationAndFollowingSection?.interCoordinatorInfo?.city}`)
    ];
};

const taxesClause = () => {
    return new Paragraph(
        {
  style: 'justified',
  children: [
                boldAllCapsText('VIGÉSIMA SEXTA. - GASTOS E IMPUESTOS '),
                simpleText('Todos los gastos e impuestos que genere lalegalización y ejecución del CONTRATO estarán a cargo del CONTRATISTA ')
            ]
        }
    );
};

const authorizationClause = () => {
    return new Paragraph(
        {
  style: 'justified',
  children: [
                boldAllCapsText('VIGÉSIMA SÉPTIMA. - AUTORIZACIÓN A GRUPO AVAL: '),
                simpleText('EL CONTRATISTA  autoriza aPORVENIR, y a quien en el futuro represente sus derechos, de manera expresa e irrevocable,para que Grupo Aval Acciones y Valores S.A., así como cualquiera de sus vinculadas, tengaacceso a toda la información y documentación que tenga relación con el CONTRATO. ')
            ]
        }
    );
};

const suspensionClause = () => {
    return new Paragraph(
        {
  style: 'justified',
  children: [
                boldAllCapsText('VIGÉSIMA OCTAVA. - SUSPENSIÓN DEL CONTRATO '),
                simpleText('En el evento en que se demuestrencausas, eventos o circunstancias que afecten la ejecución del CONTRATO, LAS PARTES demutuo acuerdo  podrán suspender  temporalmente  EL CONTRATO  mediante Acta,  por untérmino específico y se procederá a elaborar un informe del estado en que se encuentre elmismo. Superadas las condiciones por las cuales se suspendió  EL CONTRATO, este sereanudará y se ejecutará en los términos inicialmente acordados. ')
            ]
        }
    );
};

const conflictsResolutionClause = () => {
    return new Paragraph(
        {
  style: 'justified',
  children: [
                boldAllCapsText('VIGÉSIMA NOVENA.- RESOLUCIÓN DE CONFLICTOS '),
                simpleText('Las diferencias que pudieren surgircon ocasión de la ejecución, interpretación o terminación del CONTRATO se someterán a lajusticia ordinaria.')
            ]
        }
    );
};

const noWaiverClause = () => {
    return new Paragraph(
        {
  style: 'justified',
  children: [
                boldAllCapsText('TRIGÉSIMA.- NO RENUNCIABILIDAD '),
                simpleText('El retardo o la mora de alguna de las partes en hacerefectivos sus derechos o exigir las compensaciones, no suponen que se está renunciando a losmismos.')
            ]
        }
    );
};

const domicileClause = () => {
    return new Paragraph(
        {
  style: 'justified',
  children: [
                boldAllCapsText('TRIGÉSIMA PRIMERA.- DOMICILIO'),
                simpleText(' Las partes fijan de común acuerdo como domicilio y paratodos los efectos contractuales,  la   ciudad  de  Bogotá  D.C')
            ]
        }
    );
};

const annexesClause = (contract: Contract) => {
    return [
        new Paragraph(
            {
  style: 'justified',
  children: [
                    boldAllCapsText('TRIGÉSIMA SEGUNDA.- ANEXOS'),
                    simpleText(' Las partes fijan de común acuerdo como domicilio y paratodos los efectos contractuales,  la   ciudad  de  Bogotá  D.C')
                ]
            }
        ),
        bulletText('Certificados de existencia y representación legal de PORVENIR.'),
        bulletText('Certificados de existencia y representación legal del CONTRATISTA.'),
        bulletText('Contentivo de la propuesta del xxxxxx xxxxxxxxxx, presentada por EL CONTRATISTA.'),
        bulletText('Contentivo de los lugares de entrega.'),
        bulletText('Contentivo del Acuerdo de confidencialidad suscrito por el CONTRATISTA.')
    ];
};

const prevalenceClause = () => {
    return new Paragraph(
        {
  style: 'justified',
  children: [
                boldAllCapsText('TRIGÉSIMA   TERCERA. - PREVALENCIA'),
                simpleText(' LAS PARTES declaran que ante cualquiercontradicción y/o ambigüedad entre lo establecido en la Propuesta de xxxxxxxxxxxx presentadapor EL CONTRATISTA, y el presente CONTRATO, prevalecerá lo estipulado en éste último.')
            ]
        }
    );
};

const finalSection = () => {
    return simpleParagraph('Como constancia de haber leído, entendido y aceptado las condiciones aquí previstas, se suscribe el presente CONTRATO en tres (3) ejemplares del mismo tenor y valor probatorio, enla ciudad de Bogotá,a los xxxxxxxxxxxxx.');
};

const signaturesSection = () => {
    return [
        simpleParagraph('Por PORVENIR (20)'),
        subTitle('ALEJANDRO GÓMEZ VILLEGAS'),
        simpleParagraph('C.C. No. 79.941.020'),
        simpleParagraph('Representante Legal'),
        simpleParagraph('Por EL CONTRATISTA (20)'),
        subTitle('xxxxxxxxxxxxxx'),
        simpleParagraph('C.C. No. xxxxxxxxx'),
        simpleParagraph('Representante Legal')
    ];
};

