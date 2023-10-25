import React from 'react'

export const Testimoni = () => {
  return (
    <section id="Testimoni" className='pb-10'>
    <h1 className="dark:text-white text-black text-3xl font-extrabold text-center pb-10">Testimonial</h1>

    <div
        className="relative h-56 md:h-[600px] lg:mx-20 2xl:mx-56 ">

        <div className=" flex lg:flex-row 2xl:mx-40 lg:mx-5"
            data-carousel-item>
            <div className="w-1/4">
                <img src="/image/promotions/WA-1.jpeg"
                    className="absolute block lg:w-64 h-full object-cover"
                    alt="..." />
            </div>
            <div className="w-1/4">
                <img src="/image/promotions/WA-2.jpeg"
                    className="absolute block lg:w-64 h-full object-cover"
                    alt="..." />
            </div>
            <div className="w-1/4">
                <img src="/image/promotions/WA-3.jpeg"
                    className="absolute block lg:w-64 h-full object-cover"
                    alt="..." />
            </div>
            <div className="w-1/4">
                <img src="/image/promotions/WA-4.jpeg"
                    className="absolute block lg:w-64 h-full object-cover"
                    alt="..." />
            </div>
        </div>


    </div>

    

</section>
    
  )
}
