import React from 'react'
import { useSelector } from 'react-redux'
import { Factory, Countries, Worker, Machine, MachinePart, WorldWide } from '../../assets/icons'
import classNames from 'classnames'
export default function BasicFigures() {
    const { basic_figures } = useSelector((state) => state.dataReducer)
    return (
        <div className="w-full flex flex-col overflow-y-auto">
            <div className="w-full text-center justify-center items-center font-bold text-4xl pt-10">
                <h1>Temel Rakamlar</h1>
            </div>
            <div className="w-full px-40  gap-10 h-full flex pt-10">
                <div className=" text-black text-4xl w-full flex justify-between flex-col gap-10">
                    <div>
                        <BasicFiguresContainer
                            figureTitle={basic_figures[0][1]}
                            figureNumber={basic_figures[0][2]}
                            icon={<Worker width="6rem" />}
                            position="top"
                            side="left"
                        />
                    </div>
                    <div>
                        <BasicFiguresContainer
                            figureTitle={basic_figures[1][1]}
                            figureNumber={basic_figures[1][2]}
                            icon={<Machine width="6rem" />}
                            position="mid"
                            side="left"
                        />
                    </div>

                    <div>
                        <BasicFiguresContainer
                            figureTitle={basic_figures[2][1]}
                            figureNumber={basic_figures[2][2]}
                            icon={<MachinePart width="6rem" />}
                            position="bottom"
                            side="left"
                        />
                    </div>
                </div>
                <div className="flex items-center w-full justify-center">
                    <div className="bg-gray-500 text-white text-4xl p-32 rounded-full shadow-xl">
                        Şirket Bilgileri Gelecek
                    </div>
                </div>
                <div className=" text-black text-4xl w-full flex justify-between flex-col gap-10">
                    <div>
                        <BasicFiguresContainer
                            figureTitle={basic_figures[3][1]}
                            figureNumber={basic_figures[3][2]}
                            icon={<Factory width="8rem" />}
                            position="top"
                            side="right"
                        />
                    </div>
                    <div>
                        <BasicFiguresContainer
                            figureTitle={basic_figures[4][1]}
                            figureNumber={basic_figures[4][2] * 100}
                            icon={<WorldWide width="8rem" />}
                            position="mid"
                            side="right"
                            percentage="%"
                        />
                    </div>
                    <div>
                        <BasicFiguresContainer
                            figureTitle={basic_figures[5][1]}
                            figureNumber={basic_figures[5][2]}
                            icon={<Countries width="8rem" />}
                            position="bottom"
                            side="right"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function BasicFiguresContainer({ figureTitle, figureNumber, icon, position, side, percentage = '' }) {
    return (
        <div
            className={classNames(
                'text-right w-full flex items-center justify-center p-2 rounded-3xl',
                position == 'top' ? 'flex-col' : '',
                position == 'mid' ? 'flex-row' : '',
                position == 'bottom' ? 'flex-col-reverse' : '',
                side == 'right' ? 'flex-row-reverse' : ''
            )}
        >
            <div className={classNames(side == 'right' ? 'text-left' : 'text-right')}>
                <h1 className="font-bold w-full text-3xl whitespace-nowrap p-2">{figureTitle}</h1>
                <span>{figureNumber.toLocaleString() + (percentage && percentage)}</span>
            </div>
            <div
                className={classNames(
                    'w-full flex items-end',
                    position != 'mid' ? 'px-1' : 'justify-center',
                    side == 'left' ? 'justify-end' : 'justify-start'
                )}
            >
                {icon}
            </div>
        </div>
    )
}
