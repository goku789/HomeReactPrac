import React from 'react'


function FunctionalClick() {
    function clickHandeler() {
        console.log('On click button')
    }

    return (
        <div>
            <button onClick={clickHandeler}>FunctionalClick</button>
        </div>
    )
}



export default FunctionalClick