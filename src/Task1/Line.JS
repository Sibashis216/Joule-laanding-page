import React from 'react'

function Line() {
    return (
        <div>
            <svg height="810" width="800">
                <line style={{ x1: "0", y1: "180", x2: "180", y2: "180", stroke: "rgb(255,0,0)", strokeWidth: "5" }} />
            </svg>

        </div>
    )
}

export default Line