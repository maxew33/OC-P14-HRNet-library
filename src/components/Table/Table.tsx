import React from 'react'

interface TableProps {
    title?: string
    headingNames?: { [key: string]: string } | null
    data: object[]
}

export const Table: React.FC<TableProps> = (props) => {
    let namesGiven = props.headingNames
        ? Object.values(props.headingNames)
        : null

    const dataKeys: string[] = Object.keys(props.data[0])

    //check if headingNames keys and data keys are the same
    if (props.headingNames) {
        const dataKeysToCompare = props.data.length > 0 ? dataKeys : []

        const missingKeys = Object.keys(props.headingNames).filter(
            (key) => !dataKeysToCompare.includes(key)
        )

        if (missingKeys.length > 0) {
            namesGiven = null
            console.warn(
                `Key${missingKeys.length > 2 ? 's' : ''} ${missingKeys.join(
                    ', '
                )} ${
                    missingKeys.length > 2 ? 'are' : 'is'
                } missing in the heading names objects given. Data keys will be used instead.`
            )
        }
    }

    //get the table colmuns heading name
    const headingNames = namesGiven || dataKeys

    return (
        <table className="table">
            <caption>{props.title ?? ''}</caption>
            <tbody>
                <tr>
                    {headingNames.map((name, idx) => (
                        <th scope="col" key={'col' + idx}>
                            {name}
                        </th>
                    ))}
                </tr>
                {props.data.map((data, rowIdx) => (
                    <tr key={'row' + rowIdx + 1}>
                        {dataKeys.map((key, colIdx) => (
                            <th
                                scope="col"
                                key={'row' + rowIdx + 'col' + colIdx}
                            >
                                {data[key as keyof typeof data]}
                            </th>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table