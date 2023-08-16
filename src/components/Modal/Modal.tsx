import React, { FormEvent, useState } from 'react'

import styles from './Modal.module.css'

interface ModalProps {
    message?: string
    label?: string
    confirm: (e: FormEvent) => void

    overlay?: boolean
    fFam?: string
    fSize?: string
    fCol?: string

    bg?: string
    pad?: string
    width?: string
    bordW?: string
    bordC?: string
    bordR?: string

    bfFam?: string
    bfSize?: string
    bfCol?: string
    bbg?: string
    bpad?: string
    bwidth?: string
    bbordW?: string
    bbordC?: string
    bbordR?: string
    hoverBg?: string
    hoverCol?: string
}

const Modal: React.FC<ModalProps> = (props) => {
    const [isHover, setIsHover] = useState(false)

    const {
        message,
        label,
        confirm,
        overlay,
        fFam,
        fSize,
        fCol,
        bg,
        pad,
        width,
        bordW,
        bordC,
        bordR,
        bfSize,
        bfFam,
        bfCol,
        bbg,
        bpad,
        bwidth,
        bbordW,
        bbordC,
        bbordR,
        hoverBg,
        hoverCol,
    } = props

    const modalStyle = {
        background: bg,
        padding: pad,
        width: width,
        borderWidth: bordW,
        borderColor: bordC,
        borderRadius: bordR,
    }

    const btnStyle = {
        background: isHover ? hoverBg ?? bbg ?? bg : bbg ?? bg,
        fontFamily: bfFam ?? fFam,
        fontSize: bfSize ?? fSize,
        color: isHover ? hoverCol ?? bfCol ?? fCol : bfCol ?? fCol,
        padding: bpad ?? pad,
        borderWidth: bbordW ?? bordW,
        borderColor: bbordC ?? bordC,
        borderRadius: bbordR ?? bordR,
        width: bwidth,
    }

    return (
        <div
            className={overlay ? styles.overlay : ''}
            style={{ fontFamily: fFam, fontSize: fSize, color: fCol }}
        >
            <div className={styles.modal} style={modalStyle}>
                {message}
                {confirm && (
                    <button
                        className={styles.btn}
                        onClick={confirm}
                        style={btnStyle}
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        {label ?? 'OK'}
                    </button>
                )}
            </div>
        </div>
    )
}

export default Modal
