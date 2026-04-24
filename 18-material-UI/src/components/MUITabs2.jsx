import React from 'react'

function MUITabs2(props) {

    const { value, index, children } = props; // gelen değerleri object destructing ile açıyoruz


    return (
        <div>

            {
                value == index && <div> {children} </div> // value index e eşitse değeri göster
            }

        </div>
    )
}

export default MUITabs2