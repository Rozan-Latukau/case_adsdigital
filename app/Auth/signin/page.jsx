"use client";

import LayoutAuth from "@/app/layout/layoutauth";
import Image from "next/image";
import { Lexend_Deca } from "next/font/google";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, getCsrfToken } from "next-auth/react";
import { useEffect, useState } from "react";

const lexendDeca = Lexend_Deca({ subsets: ["latin"] });

const formSchema = z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(8).max(50),
});

const SignIn = () => {
    const [csrfToken, setCsrfToken] = useState(null);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const router = useRouter();

    useEffect(() => {
        const fetchCsrfToken = async () => {
            const token = await getCsrfToken();
            setCsrfToken(token ?? null);
        };
        fetchCsrfToken();
    }, []);

    const onSubmit = async (data) => {
        if (!csrfToken) return;

        const result = await signIn('credentials', {
            redirect: false,
            username: data.username,
            password: data.password,
            csrfToken: csrfToken,
        });
        console.log(result);
        if (result?.ok) {
            router.push('/Dashboard');
        } else {
            alert('Invalid credentials');
        }

    };

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
                                <div className="flex flex-col items-center justify-center">
                                    <h1 className="text-[25px] md:text-[30px] font-bold">Welcome Back</h1>
                                    <p className="font-medium">We’re so excited to see you again!</p>
                                </div>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mt-8">
                                        <FormField
                                            control={form.control}
                                            name="username"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input type="text" placeholder="Username / Email" {...field} />
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
                                                        <Input type="password" placeholder="Password" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <Link href="">
                                            <p className="cursor-pointer text-blue-500 mt-3 text-[14px] font-medium">Lupa Password?</p>
                                        </Link>
                                        <Button type="submit" variant="buttonprice" className="mt-6"> Submit</Button>
                                        <div className="flex items-center justify-center gap-1">
                                            <p>Butuh buat akun?</p>
                                            <Link href="/Auth/signup">
                                                <p className="text-blue-500 cursor-pointer">Daftar Disini</p>
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
    );
};

export default SignIn;
