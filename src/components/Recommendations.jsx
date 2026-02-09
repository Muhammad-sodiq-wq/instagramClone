import React from 'react'
import man from './../assets/man.jpg';
import ktoto from './../assets/ktoto.jpg';

const Recommendations = () => {
    const now = new Date()
    return (
        <>
            <div className='m-auto'>
                <div className='flex items-center'>
                    <img src={man} alt="accaunt img" className='rounded-[50%] size-15' />
                    <div className='ml-2'>
                        <p>
                            mrmuhammadsodiq107
                        </p>
                        <p>
                            Мухаммадсодик
                        </p>
                    </div>
                    <p className='text-blue-500 font-medium text-[14px]'>
                        Переключиться
                    </p>
                </div>

                <div className='flex items-center gap-[100px] mt-8 mb-6'>
                    <p className='font-medium'>Рекомендации для вас</p>
                    <a href="#" className='hover:text-gray-600 font-medium'>Все</a>
                </div>
                <div className='flex items-center'>
                    <img src={ktoto} alt="" className='rounded-[50%] size-15' />
                    <div className='ml-2'>
                        <p>
                            abdulaziz
                        </p>
                        <p>
                            Подписан(-а) nurasilsidikov
                        </p>
                    </div>
                    <p className='text-blue-500 font-medium text-[14px]'>
                        Подписаться
                    </p>
                </div>

                <div className='mt-12'>
                    <p>© {now.getFullYear()} Instagram from Meta</p>
                </div>

            </div>
        </>
    )
}

export default Recommendations