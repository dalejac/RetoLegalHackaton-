import {AlignmentType, HeadingLevel, Paragraph, TextRun} from 'docx';

export const documentHeader = (title: string) => {
    return new Paragraph(
        {
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.JUSTIFIED,
            spacing: {
                before: 200,
                after: 200
            },
            children: [
                new TextRun({
                    text: title ?? '',
                    allCaps: true,
                    color: '000',
                    bold: true,
                })
            ]
        });
};

export const sectionTitle = (title: string) => {
    return new Paragraph(
        {
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.JUSTIFIED,
            spacing: {
                before: 200,
                after: 200
            },
            children: [
                new TextRun({
                    text: title ?? '',
                    allCaps: true,
                    color: '000',
                    bold: true,
                })
            ]
        });
};

export const subTitle = (title: string) => {
    return new Paragraph(
        {
            heading: HeadingLevel.HEADING_3,
            alignment: AlignmentType.LEFT,
            spacing: {
                before: 200,
                after: 200
            },
            children: [
                new TextRun({
                    text: title ?? '',
                    allCaps: true,
                    color: '000',
                    bold: true,
                })
            ]
        }
    );
};

export const simpleParagraph = (paragraph: string) => {
    return new Paragraph(
        {
            text: paragraph,
            alignment: AlignmentType.LEFT,
        }
    );
};

export const boldAllCapsText = (text: string) => {
    return new TextRun({
        text,
        bold: true,
        allCaps: true,
    });
};

export const simpleText = (text: string) => {
    return new TextRun(text);
};


export const porvenirWord = boldAllCapsText('Porvenir');
export const contractWord = boldAllCapsText('Contrato');
export const contractorWord = boldAllCapsText('El Contratista');

export const paragraphNumber = (numb: number) => boldAllCapsText(` ${numb}) `);

export const paragraphNumberText = (value: string) => boldAllCapsText(` (${value})`);

export const bulletText = (text: string) => {
    return new Paragraph({
        style: 'justified',
        children: [
            simpleText(text),
        ],
        bullet: {
            level: 0,
        },
    });
};
