import {AlignmentType, HeadingLevel, Paragraph, TextRun} from 'docx';

export const sectionTitle = (title: string) => {
    return new Paragraph(
        {
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.JUSTIFIED,
            spacing: {
                before: 200,
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
