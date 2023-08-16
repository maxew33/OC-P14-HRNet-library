import React from 'react';
interface TableProps {
    title?: string;
    headingNames?: {
        [key: string]: string;
    } | null;
    data: {
        [key: string]: string | number;
    }[];
}
export declare const Table: React.FC<TableProps>;
export default Table;
