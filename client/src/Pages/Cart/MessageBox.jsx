import React from 'react'

function MessageBox({children}) {
    return (
        <div className="py-12 mt-12 rounded-2xl text-center bg-green-100">
            {children}
        </div>
    )
}

export default MessageBox
