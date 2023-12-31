import React, { useState } from 'react'
import styles from './Dropdown.module.css'

interface DropdownProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    selectItem: (name: string, value: any) => void
    items: (number | string)[]
    currentValue?: string | number | null
    dataName?: string
    dataLabel?: string

    width?: string
    height?: string
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
        dataLabel,

        width,
        height,
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

    const line = underline ?? 'true'

    const wborder = line
        ? `${lBordW ?? '2px'} solid ${lBordC ?? 'black'}`
        : 'none'

    const wrapperStyle = {
        fontFamily: fFam,
        fontSize: fSize,
        color: fCol,
        width: width,
        height: height,
        borderBottom: wborder,
    }

    const listStyle = {
        background: lBg,
        width: lWidth,
        hegiht: lHeight,
        borderWidth: lBordW,
        borderColor: lBordC,
        borderRadius: lBordR,
        color: fCol,
    }

    const valueStyle = {
        textAlign: textAlign,
        color: fCol,
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
            {dataLabel && <div>{dataLabel} :</div>}
            <div
                className={
                    styles.value + ' ' + (isDropped ? styles.dropped : '')
                }
                onClick={handleClick}
                style={valueStyle}
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