import React from 'react'

export const Home = () => {
    return (
        <section id="HOME"
            className=" xf:pt-10 lg:pt-0 lg:bg-cover mf:bg-auto bg-center bg-no-repeat bg-[url('/image/miw-bgf.jpg')] bg-gray-600 bg-blend-multiply">
            <div
                className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1
                    className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Umroh
                    Haji Sekeluarga </h1>
                <h1
                    className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Sebuah
                    Langkah Menuju Reuni Di Surga </h1>
                <p
                    className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Saatnya mewujudkan impian suci kita bersama keluarga tercinta. Konsultasikan rencana ibadah Umroh dan Haji kita bersama Madinah Iman Wisata(MIW) sekarang. Bersiaplah untuk memulai perjalanan menuju reuni abadi di surga.</p>
                <div
                    className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="/paket-tour"
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-amber-700 hover:bg-amber-600 focus:ring-4 dark:hover:text-black focus:ring-amber-300 dark:focus:ring-amber-900">
                        Lihat Umroh Haji
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 10">
                            <path stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=6281904235462"
                        className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-amber-400 focus:ring-4 focus:ring-gray-400">
                        Konsultasi Sekarang
                    </a>
                </div>
            </div>
        </section>
    )
}
