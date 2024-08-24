import { Inter } from "next/font/google";
import "../globals.css";
import AsideDashboard from "@/components/dashboard/asidedashboard";
import { ThemeProvider } from "@/components/theme-provider"
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function LayoutDashboard({ children }) {
    return (
        <div className={inter.className}>

            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <AsideDashboard />
                {children}
            </ThemeProvider>

        </div>
    );
}
