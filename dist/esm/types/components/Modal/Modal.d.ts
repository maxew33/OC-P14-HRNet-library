import React, { FormEvent } from 'react';
interface ModalProps {
    message?: string;
    label?: string;
    confirm: (e: FormEvent) => void;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
