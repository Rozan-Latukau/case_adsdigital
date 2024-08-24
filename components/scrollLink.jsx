import Link from "next/link";

const ScrollLinks = [
    {
        name: "Get Started",
        path: "#started",

    },
    {
        name: "Broadcast",
        path: "#broadcast"
    },
    {
        name: "Auto Reply",
        path: "#autoreply"
    },
    {
        name: "Opportunity",
        path: "#oppurtunity"
    },
    {
        name: "Pricing",
        path: "#pricing"
    },
    {
        name: "FAQ",
        path: "#faq"
    },
    {
        name: "Contact Us",
        path: "#contact"
    }
]
const ScrollLink = () => {
    return (
        <div className="w-0.5 h-full bg-gray-400 flex">
            <div className="lg:flex lg:flex-col gap-4 hidden ps-4">
                {ScrollLinks.map((link, index) => {
                    return (
                        <Link href={link.path} key={index} className="font-medium hover:text-black text-gray-400">{link.name
                        }</Link>
                    )
                })}
            </div>
        </div>
    )
}

export default ScrollLink;