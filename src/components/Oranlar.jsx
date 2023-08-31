import React from 'react'
import { Link } from 'react-router-dom'

export default function Oranlar() {
    return (
        <div>
            Oranlar
            <Link className="underline" to="/">
                go to Dashboard
            </Link>
        </div>
    )
}
