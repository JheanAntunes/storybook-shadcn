import React from 'react'

function useDate() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return {
        date,
        setDate,
    }
}

export default useDate
