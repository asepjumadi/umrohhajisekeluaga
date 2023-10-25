import React from 'react'
import {Header} from '../components/Header'
import {Home} from '../components/Home'
import {Tentang} from '../components/Tentang'
import {Layanan} from '../components/Layanan'
import {Galery} from '../components/Galery'
import {Testimoni} from '../components/Testimoni'
import {Footer} from '../components/Footer'
import { FAQ } from '../container/FAQ'
export const Root = () => {
  return (
    <div className='dark:bg-black bg-slate-200'>
    <Header/>
    <Home/>
    <Tentang/>
    <Layanan/>
    <Galery/>
    <Testimoni/>
    <FAQ/>
    <Footer/>
 </div>
  )
}
