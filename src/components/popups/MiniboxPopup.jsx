import React from 'react'

export default function MiniboxPopup({ visible, onClick }) {
    if (!visible) return null
    return (
        <div
            className="fixed z-10 inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center"
            onClick={() => onClick()}
        >
            <div className="bg-white p-2 rounded"> MiniboxPopup</div>
        </div>
    )
}
