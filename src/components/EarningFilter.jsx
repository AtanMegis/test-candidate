import React from 'react'

const EarningFilter = (onChangeFilter, selected) => {
    const yearHandler = (event) => {
        onChangeFilter(event.target.value)
    }
    return (
        <>
            <div>This Week</div>
            <select value={selected} onChange={yearHandler}>
                <option value="2021">Last Week</option>
                <option value="2020">Last Month</option>
            </select>
        </>
    )
}

export default EarningFilter
