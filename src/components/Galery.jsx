import React from 'react'

export const Galery = () => {
  return (
    <section id="GALERI" className="flex flex-col mx-auto max-w-screen-xl items-center justify-center pt-10 mf:pb-10 lg:pb-20">
    <h1 className="dark:text-white text-black text-3xl py-10 text-center">Galery Foto Jamaah Madinah
        Iman Wisata</h1>
    <div className="flex flex-row gap-4 py-5">
        <img src="/image/umroh/um0.png"
            className="lg:w-[400px] lg:lg:h-[250px] mf:w-[45vw] mf:h-[16vh]" alt/>
        <img src="/image/umroh/um1.jpg"
            className="lg:w-[400px] lg:h-[250px] mf:w-[45vw] mf:h-[16vh]" alt/>
    </div>
    <div className="flex flex-row gap-4 py-5">
        <img src="/image/umroh/um2.jpg"
            className="lg:w-[400px] lg:h-[250px] mf:w-[45vw] mf:h-[16vh]" alt/>
        <img src="/image/umroh/um3.jpg"
            className="lg:w-[400px] lg:h-[250px] mf:w-[45vw] mf:h-[16vh]" alt/>
    </div>

</section>
  )
}
