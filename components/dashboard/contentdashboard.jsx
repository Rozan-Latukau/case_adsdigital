"use client"

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const ContentDashboard = () => {
    const [devices, setDevices] = useState(13)

    useEffect(() => {
        const timer = setTimeout(() => setDevices(66), 500)
        return () => clearTimeout(timer)
    }, [])
    const [contacts, setContacts] = useState(13)

    useEffect(() => {
        const timer = setTimeout(() => setContacts(20), 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="flex md:flex-row flex-col items-start gap-3 mt-8">
            <div className="w-full bg-white dark:bg-transparent dark:border dark:border-[#444444] p-6 rounded-lg">
                <div className="flex flex-col md:grid md:grid-flow-row md:grid-cols-2 gap-10 justify-center items-start">
                    <div className="flex gap-6 items-center">
                        <div className="flex w-20 flex-col gap-10 md:gap-14 justify-center">
                            <p className="text-[12px] md:text-[14px]">Paket Saat ini</p>
                            <p className="text-[12px] md:text-[14px]">Devices</p>
                            <p className="text-[12px] md:text-[14px]">Contacts</p>
                        </div>
                        <div className="w-full flex flex-col gap-8 md:gap-12">
                            <div className="flex items-center">
                                <div className="flex items-center gap-2">
                                    <h1 className="text-[24px] font-extrabold">Starter</h1>
                                    <p className="bg-black text-white dark:bg-white dark:text-black px-2 text-[12px] font-light rounded-full">Free</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <Progress value={devices} className="w-full" color="bg-red-500" />
                                <p className="text-[10px] text-[#777C88]">8 dari 10 device yang tersedia</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <Progress value={contacts} className="w-full" color="bg-green-500" />
                                <p className="text-[10px] text-[#777C88]">5 dari 100 kontak yang tersedia</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-5 md:gap-10 w-full">
                        <div className="md:text-end text-start">
                            <p className="text-[12px] text-gray-300">Aktif sampai dengan</p>
                            <p className="text-[12px] text-black dark:text-white">Selasa, 29 Agustus 2023</p>
                        </div>
                        <div className="md:text-end text-start">
                            <p className="text-[14px] text-black dark:text-white">Upgrade paket untuk meningkatkan batasan fitur yang ada</p>
                        </div>
                        <Link href="">
                            <Button variant="outline" className="text-blue-500">Upgrade Paket</Button>
                        </Link>
                    </div>
                </div>
                <Link href="">
                    <p className="text-center text-gray-300 md:mt-8 mt-6 hover:text-blue-500">Tampilkan kapasitas fitur lainnya</p>
                </Link>
            </div>
            <div className="md:w-2/3 w-full bg-white dark:bg-transparent dark:border dark:border-[#444444] p-6 rounded-lg">
                <h1 className="text-[20px] font-semibold mb-3">Pesan Terakhir</h1>
                <div className="bg-gray-100 dark:bg-transparent dark:border dark:border-[#444444] rounded-lg flex items-center px-4 py-2">
                    <div className="bg-blue-600 rounded-full p-1">
                        <svg width="18" height="18" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.94588 7.56759C4.96699 7.56759 3.37831 5.97891 3.37831 4.00003C3.37831 2.04901 4.96699 0.432459 6.94588 0.432459C8.89689 0.432459 10.5134 2.04901 10.5134 4.00003C10.5134 5.97891 8.89689 7.56759 6.94588 7.56759ZM8.33946 8.90543C11.0151 8.90543 13.1891 11.0794 13.1891 13.7551C13.1891 14.2847 12.7432 14.7027 12.2136 14.7027H1.65027C1.12071 14.7027 0.702637 14.2847 0.702637 13.7551C0.702637 11.0794 2.84875 8.90543 5.52443 8.90543H8.33946Z" fill="white" />
                        </svg>
                    </div>
                    <div className="flex flex-col ms-2">
                        <p className="font-bold text-[12px]">Anda</p>
                        <p className="text-[12px]">Hai apa kabarmu hari ini? Semoga...</p>
                    </div>
                    <p className="bg-blue-600 px-2 text-[12px] ms-auto text-white rounded-md">Terkirim</p>
                </div>
                <div className="bg-gray-100 dark:bg-transparent dark:border dark:border-[#444444] rounded-lg flex items-center px-4 py-2 mt-2">
                    <div className="bg-blue-600 rounded-full p-1">
                        <svg width="18" height="18" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.94588 7.56759C4.96699 7.56759 3.37831 5.97891 3.37831 4.00003C3.37831 2.04901 4.96699 0.432459 6.94588 0.432459C8.89689 0.432459 10.5134 2.04901 10.5134 4.00003C10.5134 5.97891 8.89689 7.56759 6.94588 7.56759ZM8.33946 8.90543C11.0151 8.90543 13.1891 11.0794 13.1891 13.7551C13.1891 14.2847 12.7432 14.7027 12.2136 14.7027H1.65027C1.12071 14.7027 0.702637 14.2847 0.702637 13.7551C0.702637 11.0794 2.84875 8.90543 5.52443 8.90543H8.33946Z" fill="white" />
                        </svg>
                    </div>
                    <div className="flex flex-col ms-2">
                        <p className="font-bold text-[12px]">Anda</p>
                        <p className="text-[12px]">Hai apa kabarmu hari ini? Semoga...</p>
                    </div>
                    <p className="bg-blue-600 px-2 text-[12px] ms-auto text-white rounded-md">Terkirim</p>
                </div>
                <div className="bg-gray-100 dark:bg-transparent dark:border dark:border-[#444444] rounded-lg flex items-center px-4 py-2 mt-2">
                    <div className="bg-green-400 rounded-full p-1 w-7 h-7">
                        <p className="text-[13px] text-white font-semibold text-center">IA</p>
                    </div>
                    <div className="flex flex-col ms-2">
                        <p className="font-bold text-[12px]">Ihsanul Afkar</p>
                        <p className="text-[12px]">Hai apa kabarmu hari ini? Semoga...</p>
                    </div>
                    <p className="bg-green-400 px-2 text-[12px] ms-auto text-white rounded-md">Diterima</p>
                </div>
                <Link href="">
                    <p className="text-center text-blue-500 mt-4 hover:text-gray-300">Tampilkan lainnya</p>
                </Link>

            </div>
        </div>
    )
}

export default ContentDashboard
