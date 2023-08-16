import React from 'react';
interface DropdownProps {
    currentValue?: string | number | null;
    items: (number | string)[];
    dataName?: string;
    selectItem: (id: string, value: any) => void;
}
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
