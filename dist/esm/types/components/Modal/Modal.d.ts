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
export default Modal;
