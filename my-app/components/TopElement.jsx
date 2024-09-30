
import Link from 'next/link'
import React from 'react'

const TopElement = () => {
    return (
        <div className='flex flex-col '>
            <div className="flex gap-5 items-center">
                <div className="min-w-20 h-20 bg-red-300"></div>
                <div className="">
                    <h2 className='title-2 mb-1'>The Elder Scrolls VI </h2>
                    <Link href={`/blog/gdfgfd`} className="text-sm font-semibold text-accent">
                        Read More
                    </Link>
                </div>
            </div>
            <div className="mt-5">
                <ul className='flex flex-col gap-2'>
                    <li className='text-base '>
                    <strong>Жанр:</strong> Платформер
                    </li>
                    <li className='text-base '> <strong>Платформы: </strong> Nintendo Switch</li>
                    <li className='text-base '> <strong>Дата выхода:</strong>  12 февраля 2021</li>
                </ul>
            </div>
            <div className="pt-2 ">
                <p className="text ">Хотя информации об игре The Elder Scrolls VI пока крайне мало, одно только её упоминание вызывает волну ажиотажа среди геймеров. Bethesda пока держит проект в секрете, но фанаты уже много лет ждут возвращения в мир Тамриэля. Многие надеются, что студия привнесет в серию новые элементы, такие как улучшенная графика, интерактивность мира и расширенные ролевые возможности.</p>
            </div>
            
            <div className="mt-5">
                <h3 className='text-lg font-bold mb-3'>Особенности:</h3>
                <ul className='flex flex-col gap-2'>
                    <li className='text-base li'>
                        Классический платформер с множеством уникальных механик.
                    </li>
                    <li className='text-base li'>Новый режим с открытыми уровнями.</li>
                    <li className='text-base li'>Возможность кооперативной игры до четырех игроков.</li>
                </ul>
            </div>

        </div>
    )
}

export default TopElement