"use client"

import Link from "next/link";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

const Links = [
    {
        name: "Features",
        path: "/",
        subMenu: [
            { name: "Feature 1", path: "/" },
            { name: "Feature 2", path: "/" },
            { name: "Feature 3", path: "/" }
        ]
    },
    {
        name: "Pricing",
        path: "/"
    },
    {
        name: "Demo",
        path: "/"
    },
    {
        name: "Blog",
        path: "/"
    }
]

const Navbar = () => {
    const pathName = usePathname();
    console.log(pathName);
    return (
        <nav className="flex flex-col md:flex-row md:gap-8 gap-6">
            {Links.map((link, index) => {
                if (link.subMenu) {
                    return (
                        <DropdownMenu key={index}>
                            <DropdownMenuTrigger>
                                <div className="inline-flex gap-3 items-center font-medium hover:text-accent transition-all">
                                    {link.name}
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                                        <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                                    </svg>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {link.subMenu.map((subLink, subIndex) => (
                                    <DropdownMenuItem asChild key={subIndex}>
                                        <Link href={subLink.path}>{subLink.name}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    );
                } else {
                    return (
                        <Link href={link.path} key={index} className={`${link.path === pathName && "font-medium hover:text-accent transition-all"}`}>
                            {link.name}
                        </Link>
                    );
                }
            })}
        </nav>
    );
}

export default Navbar;
