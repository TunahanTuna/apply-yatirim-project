import React, { Fragment } from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'
import PopButton from '../../widgets/PopButton'

export default function Header() {
    return (
        <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-color-gray-100">
            <div className="relative">
                <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3" />
                <input
                    type="text"
                    placeholder="Ara..."
                    className="text-sm focus:outline-none  h-10 w-[24rem] border border-gray-300 rounded-sm pl-10 pr-3"
                />
            </div>
            <div className="flex items-center gap-2 mr-2">
                <PopButton data={<HiOutlineChatAlt fontSize={24} />} title="Messages" text="This is messages panel." />
                <PopButton
                    data={<HiOutlineBell fontSize={24} />}
                    title="Notifications"
                    text="This is notifications panel."
                />
            </div>
        </div>
    )
}
