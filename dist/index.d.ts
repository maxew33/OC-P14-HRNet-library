import React, { FormEvent } from 'react';

interface ModalProps {
    message?: string;
    label?: string;
    confirm?: (e: FormEvent) => void;
    overlay?: boolean;
    fFam?: string;
    fSize?: string;
    fCol?: string;
    bg?: string;
    pad?: string;
    width?: string;
    bordW?: string;
    bordC?: string;
    bordR?: string;
    bfFam?: string;
    bfSize?: string;
    bfCol?: string;
    bbg?: string;
    bpad?: string;
    bwidth?: string;
    bbordW?: string;
    bbordC?: string;
    bbordR?: string;
    hoverBg?: string;
    hoverCol?: string;
}
declare const Modal: React.FC<ModalProps>;

interface DropdownProps {
    selectItem: (name: string, value: any) => void;
    items: (number | string)[];
    currentValue?: string | number | null;
    dataName?: string;
    dataLabel?: string;
    width?: string;
    height?: string;
    fFam?: string;
    fSize?: string;
    fCol?: string;
    textAlign?: 'center' | 'right' | 'left';
    underline?: boolean;
    lBg?: string;
    lWidth?: string;
    lHeight?: string;
    lBordW?: string;
    lBordC?: string;
    lBordR?: string;
    greyLine?: boolean;
    itemPad?: string;
}
declare const Dropdown: React.FC<DropdownProps>;

interface TableProps {
    title?: string;
    headingNames?: {
        [key: string]: string;
    } | null;
    data: {
        [key: string]: string | number;
    }[];
}
declare const Table: React.FC<TableProps>;

export { Dropdown, Modal, Table };
