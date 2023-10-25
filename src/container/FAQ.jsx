import React from 'react'
import FAQWithAccordion from '../components/FAQAccordion'
export const FAQ = () => {
    const faqData = [
        {
            id: 1,
            question: 'Berapa jarak Hotel dgn Masjid Haram & Masjid Nabawi ?',
            answer: 'Kami mengutamakan kedekatan hotel dengan masjid. Baik saat di Mekah maupun di Madinah. Alhamdulillah MIW telah bekerjasama dengan beberapa hotel terdekat yang salah satunya adalah hotel Elaf Al Maheer Mekah (bintang 4), dapat ditempuh selama 8 ment berjalan kaki - 450m',
        },
        {
            id: 2,
            question: 'Apakah MIW mengadakan manasik untuk Haji atau Umroh ?',
            answer: "Manasik adalah agenda wajib yang harus ada sebelum keberangkatan jama'ah MIW.Untuk kenyamanan dan dalam meningkatkan pemahaman jama'ah, MIW mengadakan manasik di dalam gedung pertemuan atau ruang pertemuan hotel",
        },
        {
            id: 3,
            question: 'Apa perbedaan kamar Double,Triple dan Quad ?',
            answer: "Perbedaan Kamar Double, triple dan quard adalah jumlah peruntukan disetiap kamarnya. Kamar doubel berarti kamar untuk 2 orang dan ini cocok untuk suami istri.Kamar triple kamar yang disediakan untuk 3 orang sedangkan quad adalah kamar untuk 4 orang.Jama'ah MIW dapat membuat request untuk kebutuhan kamar ini.",
        },
        {
            id: 4,
            question: 'Apakah Madinah Iman Wisata adalah Agen Resmi ?',
            answer: "Alhamdulillah MIW adalah penyedia jasa perjalanan haji dan umroh resmi. MIW telah memiliki izin resmi.Izin Penyelenggara Umroh SK Umroh No U.215 2021 Izin Penyelenggara Haji Khusus SK Haji No. 319 2021 MIW ebagai peyelenggaran perjalanan ibadah haji dan umroh alhamdulillah termasuk akreditasi A.",
        },
        {
            id: 5,
            question: 'Pesawat Apa yang digunakan MIW ?',
            answer: "Kenyamanan perjalanan menggunakan salahsatu pesawat terbaik. Tersedia Monitor disetiap kursi penumpang berisi berbagai hiburan seperti Murotal Al Quran, berbagai film pilihan dll yg bisa dinikmati selamat perjalanan.Pramugari dari Indonesia sehingga mudah komunikasi bagi yg belum bisa bahasa asing. Dan menu makannya khas nusantara.Jama'ah jiga dapat melakukan upgrade pesawat ke kelas bisnis.",
        },
        {
            id: 6,
            question: 'Apakah MIW Memiliki Program Umroh Cicilan ?',
            answer: "Alhamdulillah sekarang ini MIW telah bekerjasama dengan salah satu lembaga keuangan syari'ah. Hal ini dimaksudkan untuk memfasilitasi jama'ah yang yang akan membayar haji atau umroh dengan cara di cicil.Untuk kenyamaan jama'ah, persyaratan dan administrasi akan dibantu sepenuhnya oleh petugas kami",
        },
    ];
    return (
        <div className=" container mx-auto mt-8">
            <h1 className="dark:text-white text-black text-3xl font-extrabold text-center pb-10">FAQ</h1>
            <div className='flex flex-row gap-4 justify-center'>
                <div>
                    {faqData.slice(0, Math.ceil(faqData.length / 2)).map((item, index) => (
                        <FAQWithAccordion
                            key={item.id}
                            question={item.question}
                            answer={item.answer}
                            index={index}
                        />
                    ))}
                </div>
                <div>
                    {faqData.slice(Math.ceil(faqData.length / 2)).map((item, index) => (
                        <FAQWithAccordion
                            key={item.id}
                            question={item.question}
                            answer={item.answer}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
