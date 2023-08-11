import React, { FormEvent } from 'react';

interface ModalProps {
    message?: string;
    label?: string;
    confirm: (e: FormEvent) => void;
}
declare const Modal: React.FC<ModalProps>;

interface DropdownProps {
    currentValue?: string | number | null;
    items: (number | string)[];
    dataName?: string;
    selectItem: (id: string, value: string) => void;
}
declare const Dropdown: React.FC<DropdownProps>;

interface TableProps {
    title?: string;
    headingNames?: {
        [key: string]: string;
    } | null;
    data: object[];
}
declare const Table: React.FC<TableProps>;

export { Dropdown, Modal, Table };
