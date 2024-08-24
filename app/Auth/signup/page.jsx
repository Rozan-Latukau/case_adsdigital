"use client"

import LayoutAuth from "@/app/layout/layoutauth";
import Image from "next/image";
import { Lexend_Deca } from "next/font/google";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Link from "next/link";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



const lexendDeca = Lexend_Deca({ subsets: ["latin"] });

const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    username: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
})

const SignUp = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            username: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit() {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <LayoutAuth>
            <div className="md:bg-[#ECF2FA] bg-white min-h-screen ">
                <div className="mx-8 md:mx-32 py-8 min-h-screen">
                    <div className="flex md:justify-start justify-center">
                        <Link href="/">
                            <Image src="/assets/Logo/Logo.png" alt="Logo" width={150} height={150} />
                        </Link>
                    </div>
                    <div className="lg:pt-8 lg:gap-10 flex items-center justify-center mt-[40%] lg:mt-0">
                        <div className="lg:w-1/2">
                            <div className="lg:flex lg:flex-col lg:items-center hidden">
                                <Image src="/assets/Section-1.png" alt="Section 1" width={400} height={400} layout="responsive" />
                                <div className={lexendDeca.className}>
                                    <h1 className="text-[20px] md:text-[28px] font-extrabold pb-2">Elevate Your Messaging Efficiency with Our Innovative Admin Tools</h1>
                                </div>
                                <p>Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis.</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="p-4 md:p-8 md:shadow-xl bg-white w-full lg:h-[70%] md:shadow-gray-200">
                                <div className="flex flex-col items-center justify-center text-center">
                                    <h1 className="text-[25px] md:text-[30px] font-bold ">Welcome to Fowardin</h1>
                                    <p className="font-medium">Revolutionize your communication <br />journey with Fowardin today</p>
                                </div>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mt-8">
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input type="email" placeholder="Email" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="username"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input type="text" placeholder="Username" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="telephone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <div className="flex items-center">
                                                            <Select>
                                                                <SelectTrigger className="w-40 mr-2">
                                                                    <SelectValue placeholder="(ID) +62" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectGroup>
                                                                        <SelectLabel>Pilih Nomor</SelectLabel>
                                                                        <SelectItem value="(ID) +62">(ID) +62</SelectItem>
                                                                        <SelectItem value="(US) +1">(US) +1</SelectItem>
                                                                        <SelectItem value="(IN) +91">(IN) +91</SelectItem>
                                                                        <SelectItem value="(UK) +44">(UK) +44</SelectItem>
                                                                    </SelectGroup>
                                                                </SelectContent>
                                                            </Select>
                                                            <Input
                                                                type="text"
                                                                placeholder="Whatsapp Phone Number"
                                                                {...field}
                                                            />
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="password"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input type="text" placeholder="Password" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <Link href="/">
                                            <Button type="submit" variant="buttonprice" className="mt-6">Submit</Button>
                                        </Link>
                                        <div className="flex items-center justify-center gap-1">
                                            <p>Sudah punya akun ?</p>
                                            <Link href="/Auth/signin">
                                                <p className="text-blue-500 cursor-pointer">Masuk di sini</p>
                                            </Link>
                                        </div>
                                    </form>
                                </Form>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </LayoutAuth>
    )
}

export default SignUp
