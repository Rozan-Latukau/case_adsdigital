import LayoutDashboard from '@/app/Layout/layoutdahsboard';
import { CalendarIcon } from "lucide-react";
import ContentDashboard from "@/components/dashboard/contentdashboard";
import AnalitikDashboard from '@/components/dashboard/analitikdashboard';
import { ModeToggle } from "@/components/dark-mode";


const Dashboard = () => {
    return (
        <LayoutDashboard>
            <div className="p-4 lg:ml-64 bg-[#F3F5F8] dark:bg-[#1F1F21] rounded-2xl lg:mt-5 lg:me-5">
                <div className="p-4 mt-3">
                    {/* Profile Atas */}
                    <div className="flex justify-center md:justify-end gap-3 items-center">
                        <div className="bg-white dark:bg-black rounded-full p-4">
                            <svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 group-hover:text-white dark:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M9 1V1.625C11.2812 2.09375 13 4.09375 13 6.5V7.09375C13 8.5625 13.5312 10 14.5 11.0938L14.7188 11.3438C15 11.6562 15.0625 12.0625 14.9062 12.4375C14.75 12.7812 14.375 13 14 13H2C1.59375 13 1.21875 12.7812 1.0625 12.4375C0.90625 12.0625 0.96875 11.6562 1.25 11.3438L1.46875 11.0938C2.4375 10 3 8.5625 3 7.09375V6.5C3 4.09375 4.6875 2.09375 7 1.625V1C7 0.46875 7.4375 0 8 0C8.53125 0 9 0.46875 9 1ZM8 16C7.46875 16 6.9375 15.8125 6.5625 15.4375C6.1875 15.0625 6 14.5312 6 14H10C10 14.5312 9.78125 15.0625 9.40625 15.4375C9.03125 15.8125 8.5 16 8 16Z" />
                            </svg>
                        </div>
                        <div className="bg-white dark:bg-black rounded-full p-2 flex items-center">
                            <p className="px-5 md:px-10 text-center font-medium text-[12px] md:text-[16px]">Alif Rizki</p>
                            <div className="bg-blue-600 rounded-full p-2">
                                <svg width="18" height="18" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.94588 7.56759C4.96699 7.56759 3.37831 5.97891 3.37831 4.00003C3.37831 2.04901 4.96699 0.432459 6.94588 0.432459C8.89689 0.432459 10.5134 2.04901 10.5134 4.00003C10.5134 5.97891 8.89689 7.56759 6.94588 7.56759ZM8.33946 8.90543C11.0151 8.90543 13.1891 11.0794 13.1891 13.7551C13.1891 14.2847 12.7432 14.7027 12.2136 14.7027H1.65027C1.12071 14.7027 0.702637 14.2847 0.702637 13.7551C0.702637 11.0794 2.84875 8.90543 5.52443 8.90543H8.33946Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-black rounded-full p-4">
                            <svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 group-hover:text-white dark:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M15.4688 5.21875C15.5938 5.5 15.5 5.78125 15.2812 6L13.9375 7.21875C13.9688 7.46875 14 7.75 14 8C14 8.28125 13.9688 8.5625 13.9375 8.8125L15.2812 10.0312C15.5 10.25 15.5938 10.5312 15.4688 10.8125C15.3438 11.1875 15.1875 11.5312 15 11.875L14.8438 12.125C14.625 12.4688 14.4062 12.8125 14.1562 13.125C13.9688 13.3438 13.6562 13.4062 13.375 13.3125L11.6562 12.7812C11.2188 13.0938 10.75 13.3438 10.2812 13.5625L9.875 15.3438C9.8125 15.625 9.59375 15.8438 9.3125 15.9062C8.875 15.9688 8.4375 16 7.96875 16C7.53125 16 7.09375 15.9688 6.65625 15.9062C6.375 15.8438 6.15625 15.625 6.09375 15.3438L5.6875 13.5625C5.21875 13.3438 4.75 13.0938 4.3125 12.7812L2.59375 13.3125C2.3125 13.4062 2 13.3438 1.8125 13.125C1.5625 12.8125 1.34375 12.4688 1.125 12.125L0.96875 11.875C0.78125 11.5312 0.625 11.1875 0.5 10.8125C0.375 10.5312 0.46875 10.25 0.6875 10.0312L2.03125 8.8125C2 8.5625 2 8.28125 2 8C2 7.75 2 7.46875 2.03125 7.21875L0.6875 6C0.46875 5.78125 0.375 5.5 0.5 5.21875C0.625 4.84375 0.78125 4.5 0.96875 4.15625L1.125 3.90625C1.34375 3.5625 1.5625 3.21875 1.8125 2.90625C2 2.6875 2.3125 2.625 2.59375 2.71875L4.3125 3.25C4.75 2.9375 5.21875 2.65625 5.6875 2.46875L6.09375 0.6875C6.15625 0.40625 6.375 0.1875 6.65625 0.125C7.09375 0.0625 7.53125 0 8 0C8.4375 0 8.875 0.0625 9.3125 0.125C9.59375 0.1875 9.8125 0.40625 9.875 0.6875L10.2812 2.46875C10.75 2.65625 11.2188 2.9375 11.6562 3.25L13.375 2.71875C13.6562 2.625 13.9688 2.6875 14.1562 2.90625C14.4062 3.21875 14.625 3.5625 14.8438 3.90625L15 4.15625C15.1875 4.5 15.3438 4.84375 15.4688 5.21875ZM8 10.5C9.375 10.5 10.5 9.40625 10.5 8C10.5 6.625 9.375 5.5 8 5.5C6.59375 5.5 5.5 6.625 5.5 8C5.5 9.40625 6.59375 10.5 8 10.5Z" />
                            </svg>
                        </div>
                        <ModeToggle />
                    </div>

                    {/* Nama dan Tanggal */}
                    <div className="flex items-center mt-10">
                        <h1 className="text-[14px] md:text-[24px] font-extrabold dark:text-white">Selamat siang, Alifr</h1>
                        <div className="flex flex-col ms-auto">
                            <p className="text-[12px] text-gray-300 text-end">Tanggal hari ini</p>
                            <p className="text-[12px] text-gray-400">Selasa, 29 Agustus 2023</p>
                        </div>
                        <CalendarIcon className="w-4 h-4 ms-2" />
                    </div>

                    {/* Starter dan Pesan */}
                    <ContentDashboard />

                    {/* Analitik */}
                    <AnalitikDashboard />
                </div>
            </div>

        </LayoutDashboard >
    )
}

export default Dashboard
