import React from 'react';
interface TableProps {
    title?: string;
    headingNames?: {
        [key: string]: string;
    } | null;
    data: {
        [key: string]: string | number | null;
    }[];
    closeUp?: boolean;
    background?: string;
    width?: string;
    fFam?: string;
    fSize?: string;
    fCol?: string;
    tableFCol?: string;
    tBordW?: string;
    tBordC?: string;
    tBordR?: string;
    greyLine?: boolean;
    prevTxt?: string;
    nextTxt?: string;
    buttonEllipsis?: boolean;
}
export declare const Table: React.FC<TableProps>;
export default Table;
