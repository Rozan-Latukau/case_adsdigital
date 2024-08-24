"use client";

import { SearchIcon, Minus } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image";
import Link from "next/link";

const FAQ = [
    {
        judul: "Apa itu Forwardin?",
        jawab: "Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google."
    },
    {
        judul: "Apakah Forwardin cocok untuk saya?",
        jawab: "Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google."
    },
    {
        judul: "Apakah Forwardin perlu di-install ke komputer?",
        jawab: "Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google."
    },

]


const Footer = () => {
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {

    }, []);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-[#3366FF]">
            <div className="mx-8 md:mx-14">
                <div className="ml-0 lg:ml-40">
                    <div className="flex flex-col items-center justify-center pt-28 pb-28" id="faq">
                        <h1 className="text-white font-bold text-[24px] text-center">Frequently Asked Questions</h1>
                        <form className="pt-14 mx-auto">
                            <div className="flex">
                                <div className="relative w-full md:w-[40rem]">
                                    <input type="search" id="search-dropdown" className="block p-3 w-full md:w-[37rem] z-20 text-sm rounded-lg text-gray-900 bg-gray-50" />
                                    <button type="submit" className="absolute top-0 end-0 p-3 text-sm font-medium h-full text-white bg-[#3366FF]">
                                        <SearchIcon className="h-6 w-6 text-white" />
                                    </button>
                                </div>
                            </div>
                        </form>


                        {/* <div className="flex w-full max-w-sm items-center space-x-2 pt-14">
                    <Input type="search" placeholder="Search" />
                    <Button type="submit" variant="btnSearch"><SearchIcon className="mr-2 h-6 w-6 text-white" /></Button>
                    </div> */}
                        <div className="mt-10 flex flex-col items-center">
                            {FAQ.map((faq, index) => (
                                <div className="bg-white p-4 md:w-[40rem] w-full mt-4 rounded-lg" key={index} >
                                    <div className="flex justify-between items-center "  >
                                        <h3 className="text-[16px] md:text-[20px] font-bold" >{faq.judul}</h3>
                                        <Minus className="w-8 h-8 p-2 bg-[#3366FF] text-white cursor-pointer" onClick={() => handleToggle(index)} />
                                    </div>
                                    <p
                                        className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? "max-h-screen pt-6" : "max-h-0"
                                            }`}
                                    >
                                        {faq.jawab}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid md:grid-flow-row md:grid-cols-3 gap-8 md:gap-20 justify-center" id="contact">
                        <div className="flex flex-col">
                            <Image src="/assets/Logo/Logo2.png" alt="Logo" width={200} height={200} />
                            <p className="text-white pt-6">Fowardin is your ultimate communication management solution. We empower businesses of all sizes with efficient message forwarding, streamlined contact management, and powerful campaign scheduling. Our mission is to simplify your communication processes, helping you engage with your audience effectively and effortlessly. Join us in transforming your communication game today!</p>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-white text-lg font-semibold">Contact Us</h3>
                            <p className="text-white pt-6">Join our mailing list to receive updates, exclusive content, and early access to upcoming events. By signing up, you become an integral part of our community, spreading the message of compassion and making a difference.</p>
                            <Link href="/" className="text-white pt-4">Email: info@fowarin</Link>
                            <Link href="/" className="text-white pt-4">Phone: +1 (123) 456-789</Link>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg text-white font-semibold">Lets Talk</h3>
                            <Link href="/" className="text-white pt-4">Facebook</Link>
                            <Link href="/" className="text-white pt-4">Instagram</Link>
                            <Link href="/" className="text-white pt-4">Twitter</Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 pt-20 md:pt-24 pb-10">
                        <p className="text-white font-extralight">Powered By</p>
                        <Image src="/assets/Logo/Logo3.png" alt="Logo" width={150} height={150} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
