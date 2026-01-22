import { useState } from 'react'

export default function Board() {
    return (
        <>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </>
    )
}

function Square() {
    const [value, setValue] = useState(null)
    function clickHandler() {
        if (value) {
            setValue(null)
        } else {
            setValue('x')
        }
    }

    return (
        <button className="square" onClick={clickHandler}>
            {value}
        </button>
    )
}
