import React from 'react'

export default MenuRouter = ({ title, description, path }) => {
    return (
        <div className="w-full h-64 hover:bg-red-800 hover:bg-opacity-80 backdrop-blur-lg border rounded-xl border-gray-50 bg-red-900 ">
            <Link
                to={path && path}
                className="w-full text-left flex flex-col items-center justify-center h-full m-4 hover:no-underline text-red-100"
            >
                <h1 className="text-4xl text-left w-full p-2">{title && title}</h1>
                <p className="text-left p-2">{description && description}</p>
            </Link>
        </div>
    )
}
