import {AlignmentType, Document, HeadingLevel, Paragraph, TextRun} from 'docx';
import {boldAllCapsText, sectionTitle, simpleText} from './file-helpers';

export class ContractGenerator {
    // tslint:disable-next-line: typedef
    public create(contractInfo: any): Document {
        console.log(contractInfo);
        const document = new Document();

        document.addSection({
            children: [
                sectionTitle(`CONTRATO DE COMPRAVENTA CELEBRADO ENTRE ----7- Y LA SOCIEDADADMINISTRADORA DE FONDOS DE PENSIONES Y CESANTÍAS PORVENIR S.A.`),
                contractResume(contractInfo),
                sectionTitle('Claúsulas'),
                firstClause(contractInfo),
                secondClause(contractInfo),
                firstParagraph(contractInfo),
                secondParagraph(contractInfo),
                thirdParagraph(contractInfo),
                fourthParagraph(contractInfo)
            ],
        });

        return document;
    }

}


export const contractResume = (contractInfo: any) => {
    return new Paragraph({
        text: `Entre los suscritos a saber: ALEJANDRO GOMEZ VILLEGAS, mayor de edad y vecino de estaciudad, identificado con la cédula de ciudadanía No. 79.941.020, quien en su calidad deVicepresidente, obra en nombre y representación de la  SOCIEDAD ADMINISTRADORA DEFONDOS DE PENSIONES Y CESANTÍASPORVENIR S.A., sociedad de servicios financieros,con domicilio principal en la ciudad de Bogotá, debidamente autorizada para desarrollar suobjeto social, todo lo cual acredita con el certificado de existencia y representación legalexpedido por la Superintendencia Financiera de Colombia, el cual se incorpora al presentecomo Anexo 1,  quien  en adelante se denominará PORVENIR, de una parte y de la otra, ----4---------------, mayor de edad y vecino identificado con la cédula de ciudadanía No. ------5-----quien en su calidad de  ----6----, obra en nombre y representación de  ------7  ------, sociedadcomercial con N.I.T. -----8-------, y domicilio principal en la ciudad de ---9--, estando debidamenteautorizado para la celebración del presente contrato, todo lo cual se acredita con el certificadode existencia y representación legal expedido por la Cámara de Comercio de – 10--, el cual seanexa  al presente como  Anexo 2,  quien  adelante  se denominará  EL CONTRATISTA,yconjuntamente  LAS   PARTES,  hemos   convenido   celebrar   el   presente  CONTRATO   DECOMPRAVENTA, en adelante EL CONTRATO, el cual se regirá por las siguientes cláusulas yen lo no previsto en ellas por las disposiciones legales vigentes:`,
    });
};

export const firstClause = (contractInfo: any) => {
    return new Paragraph({
        children: [
            boldAllCapsText('PRIMERA. - OBJETO Y ALCANCE: EL CONTRATISTA '),
            simpleText('actuando con sus propios medios,bajo su cuenta y riesgo, con autonomía técnica y administrativa, se obliga para con '),
            boldAllCapsText('Porvenir'),
            simpleText(' a título de compraventa, a la venta y distribución de XXX11.1XXXX (XX) unidades del producto“XXXXXX11 XXXXXXX”de conformidad con la '),
            boldAllCapsText('Oferta Comercial'),
            simpleText(' de fecha x13xxx (xxx)de   xxxxx   presentada   por '),
            boldAllCapsText('El Contratista'),
            simpleText(', y en contraprestación por la compraventa '),
            boldAllCapsText('Porvenir'),
            simpleText(' se obliga a pagar el precio convenido.'),
        ]
    });
};

export const secondClause = (contractInfo: any) => {
    return new Paragraph({
        children: [
            boldAllCapsText('SEGUNDA. - VALOR:PORVENIR '),
            simpleText('se obliga a pagar al '),
            boldAllCapsText('Contratista'),
            simpleText(' la suma de'),
            boldAllCapsText(' xxxxx17xxxxxxxxx M/cte ($ xxxxxxx)'),
            simpleText(' IVA incluido,  por cada XXX11 X vendido y entregado, para untotal de'),
            boldAllCapsText(' XXXXXXXXX16 XXXXXXXXXX M/cte  ($  XXXXX)'),
            simpleText(' IVA incluido, por xx11.1 xxxx (xx)unidades del producto “xxxx11 xxxxx”.')
        ]
    });
};

export const firstParagraph = (contractInfo: any) => {
    return new Paragraph(
        {
            children: [
                boldAllCapsText('Paragráfo Primero'),
                simpleText('Los productos solicitados a '),
                boldAllCapsText('El Contratista,'),
                simpleText(' se realizarán ademanda y de acuerdo a las necesidades de '),
                boldAllCapsText('Porvenir')
            ]
    });
};

export const secondParagraph = (contractInfo: any) => {
    return new Paragraph(
        {
            children: [
                boldAllCapsText('Paragráfo Segundo'),
                simpleText('Dentro del precio se encuentran incluidos la totalidad de los gastosrequeridos por '),
                boldAllCapsText('El Contratista '),
                simpleText(' para la ejecución del objeto contractual. En consecuencia,todos los gastos e impuestos que se generen en desarrollo del '),
                boldAllCapsText('Contrato'),
                simpleText('serán asumidos por '),
                boldAllCapsText('Contratista')
            ]
        });
};

export const thirdParagraph = (contactInfo: any) => {
    return new Paragraph(
        {
            children: [
                boldAllCapsText('Paragráfo Tercero'),
                simpleText('El valor del '),
                boldAllCapsText('Contrato '),
                simpleText('quedará inalterable durante el periodo deduración,  sin  que pueda invocarse ningún tipo de alza o costo para un eventual ajuste. '),
                boldAllCapsText('Porvenir'),
                simpleText(' podrá reducir el monto de la cuota respectiva, en caso que '),
                boldAllCapsText('El Contratista'),
                simpleText(' no acredite la ejecución de la totalidad del objeto del '),
                boldAllCapsText('Contrato'),
                simpleText(' a que se ha comprometido,quedando'),
                boldAllCapsText('Porvenir'),
                simpleText(' obligado a pagar el monto de lo efectivamente ejecutado.'),
            ]
        });
};

export const fourthParagraph = (contactInfo: any) => {
    return new Paragraph(
        {
            children: [
                boldAllCapsText('Paragráfo Cuarto'),
                simpleText('Los recibos parciales de las tareas ejecutadas que se hagan al'),
                boldAllCapsText('Contratista '),
                simpleText('no implican aceptación final por parte de'),
                boldAllCapsText('Porvenir'),
                simpleText('como quiera que laobligación principal del '),
                boldAllCapsText('Contratista'),
                simpleText(' es la de ejecutar completamente el objeto del'),
                boldAllCapsText('Contrato'),
                simpleText(' aquí convenido en su integridad y en la forma y tiempo debidos'),
            ]
        });
};
