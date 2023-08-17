import React, { FormEvent, useState } from 'react'
import styles from './Modal.module.css'

interface ModalProps {
    message?: string
    label?: string
    confirm: (e: FormEvent) => void
}

const Modal: React.FC<ModalProps> = (props) => {

    return (
        <div className={styles.test}>
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