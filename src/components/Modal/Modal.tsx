import React, { FormEvent, useState } from 'react'

interface ModalProps {
    message?: string
    label?: string
    confirm: (e: FormEvent) => void
}

const Modal: React.FC<ModalProps> = (props) => {

    return (
        <div className="confirm-modal">
            <div className="confirm-modal-wrapper">
                {props.message} 
                <button className="create-btn" onClick={props.confirm}>
                    {props.label ?? 'OK'}
                </button>
            </div>
        </div>
    )
}

export default Modal