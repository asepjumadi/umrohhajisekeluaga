import React from 'react'
import { data } from '../data'
import { UnHeader } from '../components/UnHeader'
import { Footer } from '../components/Footer'
export const PaketTour = () => {
    return (
        <div>
            <UnHeader />
            <div className='lg:p-20 mf:p-5 flex flex-col items-center justify-center'>
                <div className='flex lg:flex-row mf:flex-col lg:gap-6 mf:gap-4 mf:pt-20 lg:pt-5'>
                    {
                        data.map((item) => {
                            return (
                                <a href={item.url} key={item.id}>
                                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                                        <img class="rounded-t-lg" className='h-[40vh] w-full' src={item.srcimg} alt="" />

                                        <div class="p-5">

                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>

                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.content}</p>

                                        </div>
                                    </div>
                                </a>
                            )
                        })

                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}
