import {AlignmentType, Paragraph} from 'docx';
import {Contract} from '../../../../dashboard/model/contract.model';

export const contractMainInfoSection = (contract: Contract) => {
    return  [
        contractResume(contract),
    ];
};
export const contractResume = (contract: Contract) => {
    return new Paragraph({
        text: `Entre los suscritos a saber: ALEJANDRO GOMEZ VILLEGAS, mayor de edad y vecino de esta ciudad, identificado con la cédula de ciudadanía No. 79.941.020, quien en su calidad deVicepresidente, obra en nombre y representación de la  SOCIEDAD ADMINISTRADORA DE FONDOS DE PENSIONES Y CESANTÍAS PORVENIR S.A., sociedad de servicios financieros, con domicilio principal en la ciudad de Bogotá, debidamente autorizada para desarrollar su objeto social, todo lo cual acredita con el certificado de existencia y representación legal expedido por la Superintendencia Financiera de Colombia, el cual se incorpora al presente como Anexo 1,  quien  en adelante se denominará PORVENIR, de una parte y de la otra, ----4---------------, mayor de edad y vecino identificado con la cédula de ciudadanía No. ------5-----quien en su calidad de  ----6----, obra en nombre y representación de  ------7  ------, sociedad comercial con N.I.T. -----8-------, y domicilio principal en la ciudad de ---9--, estando debidamente autorizado para la celebración del presente contrato, todo lo cual se acredita con el certificado de existencia y representación legal expedido por la Cámara de Comercio de – 10--, el cual se anexa  al presente como  Anexo 2,  quien  adelante  se denominará  EL CONTRATISTA, y conjuntamente  LAS   PARTES,  hemos   convenido   celebrar   el   presente  CONTRATO   DE COMPRAVENTA, en adelante EL CONTRATO, el cual se regirá por las siguientes cláusulas yen lo no previsto en ellas por las disposiciones legales vigentes:`,
        style: 'justified'
    });
};





