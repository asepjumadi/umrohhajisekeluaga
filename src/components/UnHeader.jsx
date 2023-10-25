import React from 'react'

export const UnHeader = () => {
    return (
        <div>
            <nav
                className="bg-white border-gray-200 dark:bg-gray-900 xf:fixed xf:w-full z-40">
                <div
                    className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#HOME" className="flex items-center">
                        <img src="/image/logomiw-transparant-300x185.png"
                            className="h-8 mr-3" alt="madinah iman wisata" />
                        <span
                            className="self-center mf:text-md font-semibold whitespace-nowrap dark:text-white text-black lg:text-xl">Umroh
                            Haji Sekeluarga</span>
                    </a>
                    <a data-collapse-toggle="navbar-default" href='/'
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className='dark:fill-white fill-black h-10 w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                    </a>
                    <div className="hidden w-full md:block md:w-auto"
                        id="navbar-default">
                        <ul
                            className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/"
                                    className="block py-2 pl-3 pr-4 text-white bg--700 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-amber-500"
                                    aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="blog.umrohhajisekeluarga.com/all"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-700 md:p-0 dark:text-white md:dark:hover:text-amber-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Artikel</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
