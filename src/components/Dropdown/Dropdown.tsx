import React, { useState } from 'react'
import styles from './Dropdown.module.css'

interface DropdownProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    selectItem: (name: string, value: any) => void
    items: (number | string)[]
    currentValue?: string | number | null
    dataName?: string

    width?: string
    fFam?: string
    fSize?: string
    fCol?: string
    textAlign?: 'center' | 'right' | 'left'
    underline?: boolean

    lBg?: string
    lWidth?: string
    lHeight?: string
    lBordW?: string
    lBordC?: string
    lBordR?: string
    greyLine?: boolean
    itemPad?: string
}

const Dropdown: React.FC<DropdownProps> = (props) => {
    const {
        selectItem,
        items,
        currentValue,
        dataName,

        width,
        fFam,
        fSize,
        fCol,
        textAlign,
        underline,

        lBg,
        lWidth,
        lHeight,
        lBordW,
        lBordC,
        lBordR,

        greyLine,
        itemPad,
    } = props

    const wborder = underline ? `${lBordW} solid ${lBordC}` : ''

    const wrapperStyle = {
        fontFamily: fFam,
        fontSize: fSize,
        color: fCol,
        width: width,
        borderBottom: wborder,
    }

    const listStyle = {
        background: lBg,
        width: lWidth,
        hegiht: lHeight,
        borderWidth: lBordW,
        borderColor: lBordC,
        borderRadius: lBordR,
    }

    const eltStyle = {
        padding: itemPad,
    }

    const grayed = greyLine ?? true

    const [isDropped, setIsDropped] = useState(false)

    const handleClick = () => {
        setIsDropped(!isDropped)
    }

    const handleSelect = (item: string | number) => {
        selectItem(dataName ?? '', item.toString())
        setIsDropped(false)
    }

    return (
        <div className={styles.dropdown} style={wrapperStyle}>
            {dataName && <div>{dataName} :</div>}
            <div
                className={
                    styles.value + ' ' + (isDropped ? styles.dropped : '')
                }
                onClick={handleClick}
                style={{ textAlign: textAlign }}
            >
                {currentValue ?? 'select'}

                {isDropped && (
                    <ul className={styles.list} style={listStyle}>
                        {items.map((item, key) => (
                            <li
                                key={'li' + key}
                                onClick={() => handleSelect(item)}
                                style={{
                                    ...eltStyle,
                                    ...(grayed
                                        ? key % 2 === 0
                                            ? { background: '#d9d9d9bb' }
                                            : {}
                                        : {}),
                                }}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Dropdown
