import {Document, Header} from 'docx';

export class DocumentCreator {
    create(): Document{
        const doc = new Document();
        
        doc.addSection({
            headers: {
                default: new Header({
                    children: [new Paragraph("CONTRATO DE COMPRAVENTA CELEBRADO ENTRE ----7- Y LA SOCIEDAD ADMINISTRADORA DE FONDOS DE PENSIONES Y CESANTÍAS PORVENIR S.A.
                    ")],
                }),
    }
}