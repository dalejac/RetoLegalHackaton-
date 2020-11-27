import {Alignment, AlignmentType, Document, Header} from 'docx';
import {
    contractMainInfoSection,
} from './contract-sections/contract-main-info-section';
import {Contract} from '../../../dashboard/model/contract.model';
import {contractClausesSection} from './contract-sections/contract-clauses-section';
import {documentHeader, sectionTitle} from './file-helpers';

export class ContractGenerator {
    public create(contract: Contract): Document {
        console.log(contract);
        const document = new Document(
            {
                styles: {
                    paragraphStyles: [
                        {
                            id: 'justified',
                            run: {
                                size: 24,
                                color: 'black',
                            },
                            paragraph : {
                                alignment: AlignmentType.JUSTIFIED,
                            }
                        },
                        {
                            id: 'section',
                            run: {
                                size: 24,
                                color: 'black',
                            },
                            paragraph : {
                                alignment: AlignmentType.JUSTIFIED,
                                spacing: {
                                    after: 120
                                }
                            }
                        }
                    ]
                }
            }
        );

        document.addSection({
            headers: {
                default: new Header({
                    children: [
                        documentHeader(`CONTRATO DE COMPRAVENTA CELEBRADO ENTRE ----7- Y LA SOCIEDADADMINISTRADORA DE FONDOS DE PENSIONES Y CESANTÍAS PORVENIR S.A.`)
                    ],
                }),
            },
            children: [
                ...contractMainInfoSection(contract),
                ...contractClausesSection(contract),
            ]
        });
        return document;
    }

}

