import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div className="flex flex-col">
            Dashboard
            <Link className="underline" to="/oranlar">
                go to oranlar
            </Link>
        </div>
    )
}
