import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });


export default function Layout({ children }) {
    return (

        <div className={inter.className}>
            <Header />
            {children}
            <Footer />
        </div>

    );
}
