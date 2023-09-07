/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FormEvent, Fragment, useEffect, useState } from 'react'
import Dropdown from '../Dropdown'
import styles from './Table.module.css'
import Modal  from '../Modal'

interface TableProps {
    title?: string
    headingNames?: { [key: string]: string } | null
    data: { [key: string]: string | number }[]
    closeUp?: boolean
    background?: string

    width?: string
    fFam?: string
    fSize?: string
    fCol?: string

    tableFCol?: string    
    tBordW?: string
    tBordC?: string
    tBordR?: string

    greyLine?: boolean

    prevTxt?: string
    nextTxt?: string
    buttonEllipsis?: boolean
}

export const Table: React.FC<TableProps> = (props) => {
    const { 
        title, 
        headingNames, 
        data, 
        closeUp, 
        background,
        tBordW, 
        tBordC, 
        tBordR, 
        width, 
        fFam, 
        fSize,
        fCol, 
        tableFCol,
        greyLine, 
        prevTxt,
        nextTxt, 
        buttonEllipsis } = props

    // ========================================
    // set the headings
    // ========================================

    const headings: { [key: string]: string } = {}

    headingNames ? 
    Object.keys(headingNames).forEach((data) => {
        headings[data] = headingNames[data]
    }) :
    Object.keys(data[0]).forEach((data) => {
        headings[data] = data
    })

    // ========================================
    // sort data by clicking on the table header
    // ========================================

    const [displayedData, setDisplayedData] = useState(data)

    const [sortedData, setSortedData] = useState(displayedData)

    const [sortedKey, setSortedKey] = useState({ key: '', asc: false })

    const handleSort = (key: string) => {
        // get the column key
        setCurrentPage(1)

        sortedKey.key === key
            ? setSortedKey((prevSortedKey) => ({
                  ...prevSortedKey,
                  asc: !prevSortedKey.asc,
              }))
            : setSortedKey({ key: key, asc: false })
    }

    useEffect(() => {
        const tmpData = [...displayedData].sort((a: any, b: any) => {
            if (a[sortedKey.key] > b[sortedKey.key])
                return sortedKey.asc ? 1 : -1
            if (a[sortedKey.key] < b[sortedKey.key])
                return sortedKey.asc ? -1 : 1
            return 0
        })

        setSortedData(tmpData)
    }, [sortedKey, displayedData])

    // ========================================
    // number of entries shown
    // ========================================

    const [displayingQty, setDisplayingQty] = useState(10)

    const handleSelectQty = (_id: string, value: number) => {
        setDisplayingQty(value)
        setCurrentPage(1)
    }

    // ========================================
    // Page navigation
    // ========================================

    const [currentPage, setCurrentPage] = useState(1)
    const [pagesQty, setPagesQty] = useState(0)

    useEffect(() => {
        setPagesQty(Math.ceil(displayedData.length / displayingQty))
        console.log(pagesQty)
    }, [displayingQty, displayedData, pagesQty])

    const handleSelectPage = (idx: number) => {
        setCurrentPage(idx)
    }

    // navigation form prev / next button
    const handleNavPage = (dir: number) => {
        let tempPage = currentPage
        tempPage += dir
        tempPage > 0 && tempPage <= pagesQty && setCurrentPage(tempPage)
    }

    const ellipsis = buttonEllipsis ?? 'true'

    // ========================================
    // Searchbar
    // ========================================

    const [searchInput, setSearchInput] = useState('')

    const handleInput = (e: FormEvent) => {
        const target = e.target as HTMLFormElement
        setCurrentPage(1)
        setSearchInput(target.value)
    }

    useEffect(() => {
        dataSearching(searchInput.toString())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchInput])

    const dataSearching = (word: string) => {
        const searchedWord = word.toLowerCase()

        const tempData: React.SetStateAction<{ [key: string]: any }[]> = []

        props.data.forEach((data) => {
            const keys: string[] = Object.keys(data)
            let match = false
            keys.forEach((key) => {
                if (!match) {
                    const wordToCompare = data[key].toString().toLowerCase()
                    if (wordToCompare.match(searchedWord)) {
                        tempData.push(data)
                        match = true
                    }
                }
            })
        })

        setDisplayedData(tempData)
    }

    // ========================================
    // closeUp : get infos by clicking on the line
    // ========================================

    const [infosSelected, setInfosSelected] = useState([''])

    const [infosShown, setInfosShown] = useState(false)

    const openOverlay = closeUp ?? true

    const handleClick = (data: any) => {
        const tmpArray: any[] = []

        {
            Object.keys(headings).map((key) =>
                {
                    const keyData = data[key as keyof typeof data] ?? '---'
                    tmpArray.push(headings[key] + ': ' + keyData)
                }
            )
        }

        setInfosSelected(tmpArray)

        showModal()
    }

    const showModal = () => {
        setInfosShown(!infosShown)
    }

    // ========================================
    // custom style
    // ========================================

    const grayed = greyLine ?? 'true'

    const globalStyle = {
        fontFamily: fFam,
        color: fCol,
        fontSize: fSize
    }

    const tableStyle = {
        width : width,
        borderWidth: tBordW,
        borderColor: tBordC,
        borderRadius: tBordR,        
        background: background,
        color: tableFCol,
    }

    const lineStyle = {
        cursor: openOverlay ? 'pointer' : 'default',
    }

    const btnStyle = {
        color: tableFCol,
        fontSize: fSize,
        background: background
    }

    return (
        <section className={styles.section} style={globalStyle}>
            <div className={styles.entriesDisplayed}>
                <span className={styles.dropdown}>
                    Show
                    <Dropdown
                        items={[10, 25, 50, 100]}
                        selectItem={handleSelectQty}
                        currentValue={displayingQty.toString()}
                        width="75px"
                        textAlign='center'
                        fCol={fCol}
                        fSize={fSize}
                        fFam={fFam}
                        lBordW={tBordW ?? '2px'}
                    />
                    entries
                </span>
                <form className={styles.form}>
                    search
                    <input
                        type="text"
                        name=""
                        id=""
                        value={searchInput}
                        onInput={handleInput}
                    />
                </form>
            </div>

            <table className={styles.table}>
                <caption>{title ?? ''}</caption>
                <tbody style={tableStyle}>
                    <tr>
                        {Object.keys(headings).map((name: string, idx) => (
                            <th
                                scope="col"
                                key={'col' + idx}
                                onClick={() => handleSort(name)}
                                className={styles.heading}
                            >
                                {headings[name]}{' '}
                                {name === sortedKey.key &&
                                    (sortedKey.asc ? '▲' : '▼')}
                            </th>
                        ))}
                    </tr>
                    {sortedData.map(
                        (data, rowIdx) =>
                            rowIdx >= (currentPage - 1) * displayingQty &&
                            rowIdx < currentPage * displayingQty && (
                                <tr
                                    key={'row' + rowIdx + 1}
                                    onClick={() =>
                                        openOverlay && handleClick(data)
                                    }
                                    className={grayed? styles.grayed:''}
                                    style={lineStyle}
                                >
                                    {Object.keys(headings).map((key, colIdx) => (
                                        <td
                                            scope="col"
                                            key={
                                                'row' + rowIdx + 'col' + colIdx
                                            }
                                        >
                                            {data[key as keyof typeof data]}
                                        </td>
                                    ))}
                                </tr>
                            )
                    )}
                </tbody>
            </table>

            <div className={styles.tableNavigation}>
                <span>
                    Showing {(currentPage - 1) * displayingQty + 1} to{' '}
                    {currentPage === pagesQty
                        ? displayedData.length
                        : currentPage * displayingQty}{' '}
                    of {displayedData.length} entries
                </span>
                <div className={styles.pageSelection}>
                    <button
                        className={currentPage === 1 ? styles.disabled : ''}
                        onClick={() => handleNavPage(-1)}
                        style={btnStyle}
                    >
                        {prevTxt ?? 'prev'}
                    </button>

                    {/* page selection */}

                    {Array.from(Array(pagesQty)).map((_, idx) => (
                        <Fragment key={'pageNavigation' + idx}>
                            {!ellipsis 
                            || 
                            pagesQty < 7 
                            ||
                            Math.abs(currentPage - idx - 1) < 3 
                            ||
                            (currentPage <= 2 && idx <= 4) 
                            ||
                            (currentPage >= pagesQty - 2 &&
                                idx > pagesQty - 6) 
                            ||
                            idx === 0 
                            ||
                            idx === pagesQty - 1 ? (
                                currentPage === idx + 1 ? (
                                    <span className={styles.currentPage}>
                                        {idx + 1}
                                    </span>
                                ) : (
                                    <button
                                        onClick={() =>
                                            handleSelectPage(idx + 1)
                                        }
                                        className={styles.otherPage}
                                        key={'pageBtn' + idx}
                                        style={btnStyle}
                                    >
                                        {idx + 1}
                                    </button>
                                )
                            ) : (
                                (currentPage - 3 === idx + 1 ||
                                    currentPage + 3 === idx + 1 ||
                                    (currentPage <= 2 && idx === 5) ||
                                    (currentPage >= pagesQty - 2 &&
                                        idx > pagesQty - 7)) && (
                                    <span className={styles.currentPage}>
                                        ...
                                    </span>
                                )
                            )}
                        </Fragment>
                    ))}

                    <button
                        className={
                            currentPage === pagesQty ? styles.disabled : ''
                        }
                        onClick={() => handleNavPage(1)}
                        style={btnStyle}
                    >
                        {nextTxt ?? 'next'}
                    </button>
                </div>
            </div>
            {infosShown && (
                <Modal
                    overlay={true}
                    close={showModal}
                    confirm={showModal}
                    message={infosSelected}
                    fSize={fSize}
                    fFam={fFam}
                    fCol={tableFCol}
                    bordC={tBordC}
                    bordR={tBordR}
                    bordW={tBordW}
                    bg={background}
                    lineHeight='1,5'
                />
            )}
        </section>
    )
}

export default Table