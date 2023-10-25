import React from 'react'
import { UnHeader } from '../components/UnHeader'
import { Footer } from '../components/Footer'
import {FurodaHeader} from "../components/FurodaHeader"
export const Furoda = () => {
    return (
        <>
            <FurodaHeader />
            <div>
                <div className=' flex flex-col items-center justify-center py-10 gap-4'>
                    <section id='HOME'>
                    <img src="/image/furoda/27228d62-b441-450b-9ede-3c759c773eef.jpg" className='lg:h-[90vh] lg:w-[50vw] mf:h-[50%] mf:w-[100%] self-center' alt="" />
                    </section>
                    <section id='FURODA'>
                    <img src="/image/furoda/f7699ad0-a28a-4792-85cf-2d75ce08fadd.jpg" className='lg:h-[90vh] lg:w-[50vw] mf:h-[50%] mf:w-[100%] self-center' alt="" />
                    </section>
                    <section id='BIAYA'>
                    <img src="/image/furoda/31cde604-3089-4e9e-9a9c-8b3bb9a261b6.jpg" className='lg:h-[90vh] lg:w-[50vw] mf:h-[50%] mf:w-[100%] self-center' alt="" />
                    </section>
                    <section id='KOMITMEN'>
                    <img src="/image/furoda/af704172-16aa-482f-9bd5-a3ab3df95656.jpg" className='lg:h-[90vh] lg:w-[50vw] mf:h-[50%] mf:w-[100%] self-center' alt="" />
                    </section>
                    <section id='JADWAL'>
                    <img src="/image/furoda/febb7e79-d0dd-4d71-aedb-a1994130681b.jpg" className='lg:h-[90vh] lg:w-[50vw] mf:h-[50%] mf:w-[100%] self-center' alt="" />
                    </section>
                </div>
            </div>
            <Footer />
        </>
    )
}
