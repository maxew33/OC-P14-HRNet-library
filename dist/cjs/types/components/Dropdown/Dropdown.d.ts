import React from 'react';
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
export default Dropdown;
