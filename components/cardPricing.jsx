import { BellRing, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

const pricing = [
    {
        title: "Starter",
        description: "Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan  manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp.",
        price: "Gratis",

        namebutton: "Start Now"
    },
    {
        title: "Basic",
        description: "Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan  manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp.",
        price: "Rp. 65.000 /bulan",
        priceyear: "Rp. 650.000 /tahun",
        namebutton: "Get Started"
    },
    {
        title: "Premium",
        description: "Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan  manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp.",
        price: "Rp. 76.000 /bulan",
        priceyear: "Rp. 650.000 /tahun",
        namebutton: "Get Started"
    },
    {
        title: "Pro",
        description: "Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan  manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp.",
        price: "Rp. 86.000 /bulan",
        priceyear: "Rp. 650.000 /tahun",
        namebutton: "Get Started"
    }
]

const benefits = [
    {
        title: "100 Auto reply",
        icon: (<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_445_139" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="18">
                <rect x="0.883362" y="0.0278778" width="17.7276" height="17.7276" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_445_139)">
                <path d="M8.58377 11.292H10.8736L11.1506 12.1414C11.1998 12.2768 11.2798 12.3846 11.3906 12.4646C11.5014 12.5446 11.6245 12.5846 11.76 12.5846C11.9939 12.5846 12.1754 12.4892 12.3047 12.2984C12.434 12.1076 12.4617 11.9075 12.3878 11.6982L10.652 6.80469C10.6027 6.66927 10.5166 6.55848 10.3935 6.4723C10.2703 6.38612 10.1349 6.34304 9.9872 6.34304H9.50708C9.35935 6.34304 9.22393 6.38612 9.10082 6.4723C8.97771 6.55848 8.89154 6.66927 8.84229 6.80469L7.088 11.7352C7.01414 11.9445 7.04184 12.1383 7.1711 12.3169C7.30037 12.4954 7.47579 12.5846 7.69739 12.5846C7.83281 12.5846 7.95592 12.5446 8.06671 12.4646C8.17751 12.3846 8.25753 12.2768 8.30677 12.1414L8.58377 11.292ZM8.93462 10.2209L9.74714 7.7834L10.5412 10.2209H8.93462ZM8.26984 2.24354C8.06056 2.24354 7.88513 2.17275 7.74355 2.03118C7.60198 1.8896 7.53119 1.71417 7.53119 1.50489C7.53119 1.29561 7.60198 1.12018 7.74355 0.978604C7.88513 0.83703 8.06056 0.766243 8.26984 0.766243H11.2244C11.4337 0.766243 11.6091 0.83703 11.7507 0.978604C11.8923 1.12018 11.9631 1.29561 11.9631 1.50489C11.9631 1.71417 11.8923 1.8896 11.7507 2.03118C11.6091 2.17275 11.4337 2.24354 11.2244 2.24354H8.26984ZM9.74714 16.2779C8.83614 16.2779 7.97746 16.1024 7.1711 15.7516C6.36474 15.4007 5.65995 14.9237 5.05672 14.3204C4.45349 13.7172 3.97645 13.0124 3.62559 12.2061C3.27473 11.3997 3.0993 10.541 3.0993 9.63002C3.0993 8.71902 3.27473 7.86034 3.62559 7.05399C3.97645 6.24763 4.45349 5.54283 5.05672 4.93961C5.65995 4.33638 6.36474 3.85933 7.1711 3.50847C7.97746 3.15762 8.83614 2.98219 9.74714 2.98219C10.5104 2.98219 11.2429 3.1053 11.9446 3.35151C12.6463 3.59773 13.305 3.95474 13.9205 4.42255L14.4376 3.9055C14.573 3.77008 14.7453 3.70237 14.9546 3.70237C15.1639 3.70237 15.3362 3.77008 15.4717 3.9055C15.6071 4.04092 15.6748 4.21327 15.6748 4.42255C15.6748 4.63184 15.6071 4.80419 15.4717 4.93961L14.9546 5.45666C15.4224 6.0722 15.7794 6.73083 16.0256 7.43254C16.2719 8.13426 16.395 8.86675 16.395 9.63002C16.395 10.541 16.2195 11.3997 15.8687 12.2061C15.5178 13.0124 15.0408 13.7172 14.4376 14.3204C13.8343 14.9237 13.1295 15.4007 12.3232 15.7516C11.5168 16.1024 10.6581 16.2779 9.74714 16.2779Z" fill="#3366FF" />
            </g>
        </svg>
        ),
    },
    {
        title: "500 Broadcast",
        icon: (<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_482_144" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="19">
                <rect x="0.883362" y="0.885498" width="17.7276" height="17.7276" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_482_144)">
                <path d="M3.46863 15.6593C3.16086 15.6593 2.89925 15.5516 2.68382 15.3361C2.46838 15.1207 2.36066 14.8591 2.36066 14.5513C2.36066 14.2436 2.46838 13.982 2.68382 13.7665C2.89925 13.5511 3.16086 13.4434 3.46863 13.4434C3.7764 13.4434 4.038 13.5511 4.25344 13.7665C4.46888 13.982 4.5766 14.2436 4.5766 14.5513C4.5766 14.8591 4.46888 15.1207 4.25344 15.3361C4.038 15.5516 3.7764 15.6593 3.46863 15.6593ZM6.79255 15.6593C6.59557 15.6593 6.42322 15.6008 6.27549 15.4839C6.12776 15.3669 6.03543 15.21 5.9985 15.013C5.86308 14.2374 5.5153 13.5788 4.95516 13.0371C4.39502 12.4954 3.72716 12.1569 2.95158 12.0215C2.76691 11.9968 2.62226 11.9076 2.51762 11.7537C2.41298 11.5998 2.36066 11.4244 2.36066 11.2274C2.36066 11.0181 2.42529 10.8427 2.55455 10.7011C2.68382 10.5595 2.84078 10.5011 3.02544 10.5257C4.18266 10.6734 5.17368 11.1597 5.9985 11.9845C6.82332 12.8093 7.31575 13.8004 7.4758 14.9576C7.50042 15.1546 7.44502 15.3208 7.3096 15.4562C7.17418 15.5916 7.00183 15.6593 6.79255 15.6593ZM9.74714 15.6593C9.53785 15.6593 9.36243 15.5916 9.22085 15.4562C9.07928 15.3208 8.99618 15.1484 8.97156 14.9391C8.79921 13.3633 8.15597 12.0276 7.04184 10.932C5.92771 9.83629 4.58276 9.20844 3.00697 9.0484C2.81 9.02378 2.65304 8.9376 2.53609 8.78987C2.41913 8.64214 2.36066 8.46979 2.36066 8.27282C2.36066 8.06353 2.42529 7.88503 2.55455 7.7373C2.68382 7.58957 2.84078 7.52801 3.02544 7.55263C5.00748 7.71267 6.69406 8.48518 8.08518 9.87014C9.4763 11.2551 10.2642 12.9325 10.4489 14.9022C10.4735 15.1115 10.415 15.29 10.2734 15.4377C10.1319 15.5854 9.95642 15.6593 9.74714 15.6593ZM11.9631 15.6593C11.9631 14.3174 11.7138 13.0648 11.2152 11.9014C10.7166 10.7381 10.0334 9.72241 9.16545 8.8545C8.29754 7.98659 7.27882 7.30334 6.1093 6.80475C4.93977 6.30617 3.69022 6.05687 2.36066 6.05687V5.31822C2.36066 4.91197 2.50531 4.56419 2.79461 4.27488C3.08392 3.98558 3.4317 3.84093 3.83795 3.84093H15.6563C16.0626 3.84093 16.4104 3.98558 16.6997 4.27488C16.989 4.56419 17.1336 4.91197 17.1336 5.31822V14.182C17.1336 14.5883 16.989 14.936 16.6997 15.2253C16.4104 15.5146 16.0626 15.6593 15.6563 15.6593H11.9631Z" fill="#3366FF" />
            </g>
        </svg>
        ),
    },
    {
        title: "50 Campaign",
        icon: (<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_482_149" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="19">
                <rect x="0.883362" y="0.743057" width="17.7276" height="17.7276" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_482_149)">
                <path d="M15.287 15.8855C15.4963 15.8855 15.6717 15.8147 15.8133 15.6731C15.9549 15.5315 16.0256 15.3561 16.0256 15.1468C16.0256 14.9375 15.9549 14.7621 15.8133 14.6205C15.6717 14.4789 15.4963 14.4082 15.287 14.4082C15.0777 14.4082 14.9023 14.4789 14.7607 14.6205C14.6191 14.7621 14.5484 14.9375 14.5484 15.1468C14.5484 15.3561 14.6191 15.5315 14.7607 15.6731C14.9023 15.8147 15.0777 15.8855 15.287 15.8855ZM9.74714 16.9934C8.47913 16.9934 7.30037 16.6918 6.21086 16.0886C5.12135 15.4853 4.26268 14.7036 3.63482 13.7434L6.88488 10.4933L8.7869 12.1183C8.93463 12.2538 9.1039 12.3153 9.29472 12.303C9.48553 12.2907 9.64865 12.2168 9.78407 12.0814L12.7017 9.18222V9.60694C12.7017 9.81622 12.7725 9.99165 12.9141 10.1332C13.0557 10.2748 13.2311 10.3456 13.4404 10.3456C13.6497 10.3456 13.8251 10.2748 13.9667 10.1332C14.1082 9.99165 14.179 9.81622 14.179 9.60694V7.391C14.179 7.18171 14.1082 7.00628 13.9667 6.86471C13.8251 6.72313 13.6497 6.65235 13.4404 6.65235H11.2244C11.0152 6.65235 10.8397 6.72313 10.6981 6.86471C10.5566 7.00628 10.4858 7.18171 10.4858 7.391C10.4858 7.60028 10.5566 7.77571 10.6981 7.91728C10.8397 8.05886 11.0152 8.12964 11.2244 8.12964H11.6492L9.23008 10.5487L7.3096 8.94216C7.16187 8.81905 6.9926 8.76057 6.80178 8.76673C6.61096 8.77288 6.44784 8.84367 6.31242 8.97909L2.89618 12.3953C2.72383 11.9891 2.59148 11.5305 2.49915 11.0196C2.40682 10.5087 2.36066 10.0378 2.36066 9.60694C2.36066 8.58514 2.55455 7.6249 2.94234 6.72621C3.33013 5.82752 3.85642 5.04579 4.5212 4.381C5.18599 3.71622 5.96772 3.18993 6.86641 2.80214C7.7651 2.41435 8.72534 2.22046 9.74714 2.22046C10.7689 2.22046 11.7292 2.41435 12.6279 2.80214C13.5266 3.18993 14.3083 3.71622 14.9731 4.381C15.6379 5.04579 16.1641 5.82752 16.5519 6.72621C16.9397 7.6249 17.1336 8.58514 17.1336 9.60694V15.5161C17.1336 15.9224 16.989 16.2702 16.6997 16.5595C16.4104 16.8488 16.0626 16.9934 15.6563 16.9934H9.74714Z" fill="#3366FF" />
            </g>
        </svg>
        ),
    },
    {
        title: "500 Contact",
        icon: (<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_482_154" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="19">
                <rect x="0.883362" y="0.600403" width="17.7276" height="17.7276" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_482_154)">
                <path d="M9.74714 10.2025C10.3627 10.2025 10.8859 9.9871 11.3168 9.55622C11.7476 9.12534 11.9631 8.60213 11.9631 7.98659C11.9631 7.37105 11.7476 6.84784 11.3168 6.41697C10.8859 5.98609 10.3627 5.77065 9.74714 5.77065C9.1316 5.77065 8.60839 5.98609 8.17751 6.41697C7.74663 6.84784 7.53119 7.37105 7.53119 7.98659C7.53119 8.60213 7.74663 9.12534 8.17751 9.55622C8.60839 9.9871 9.1316 10.2025 9.74714 10.2025ZM3.83795 15.3731C3.4317 15.3731 3.08392 15.2284 2.79461 14.9391C2.50531 14.6498 2.36066 14.302 2.36066 13.8958V5.032C2.36066 4.62574 2.50531 4.27796 2.79461 3.98866C3.08392 3.69936 3.4317 3.5547 3.83795 3.5547H15.6563C16.0626 3.5547 16.4104 3.69936 16.6997 3.98866C16.989 4.27796 17.1336 4.62574 17.1336 5.032V13.8958C17.1336 14.302 16.989 14.6498 16.6997 14.9391C16.4104 15.2284 16.0626 15.3731 15.6563 15.3731H3.83795ZM5.13059 13.8958H14.3637C13.8097 13.2064 13.1388 12.6647 12.3509 12.2708C11.563 11.8768 10.6951 11.6798 9.74714 11.6798C8.79921 11.6798 7.93129 11.8768 7.1434 12.2708C6.35551 12.6647 5.68457 13.2064 5.13059 13.8958ZM4.5766 17.589C4.36732 17.589 4.19189 17.5182 4.05031 17.3767C3.90874 17.2351 3.83795 17.0597 3.83795 16.8504C3.83795 16.6411 3.90874 16.4657 4.05031 16.3241C4.19189 16.1825 4.36732 16.1117 4.5766 16.1117H14.9177C15.127 16.1117 15.3024 16.1825 15.444 16.3241C15.5855 16.4657 15.6563 16.6411 15.6563 16.8504C15.6563 17.0597 15.5855 17.2351 15.444 17.3767C15.3024 17.5182 15.127 17.589 14.9177 17.589H4.5766ZM4.5766 2.81606C4.36732 2.81606 4.19189 2.74527 4.05031 2.6037C3.90874 2.46212 3.83795 2.28669 3.83795 2.07741C3.83795 1.86812 3.90874 1.6927 4.05031 1.55112C4.19189 1.40955 4.36732 1.33876 4.5766 1.33876H14.9177C15.127 1.33876 15.3024 1.40955 15.444 1.55112C15.5855 1.6927 15.6563 1.86812 15.6563 2.07741C15.6563 2.28669 15.5855 2.46212 15.444 2.6037C15.3024 2.74527 15.127 2.81606 14.9177 2.81606H4.5766Z" fill="#3366FF" />
            </g>
        </svg>
        ),
    },
    {
        title: "50 Device",
        icon: (<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_482_159" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="19">
                <rect x="0.883362" y="0.458328" width="17.7276" height="17.7276" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_482_159)">
                <path d="M7.53119 7.10566C7.32191 7.10566 7.14648 7.03487 7.00491 6.8933C6.86333 6.75172 6.79254 6.57629 6.79254 6.36701C6.79254 6.15773 6.86333 5.9823 7.00491 5.84072C7.14648 5.69915 7.32191 5.62836 7.53119 5.62836H11.9631C12.1724 5.62836 12.3478 5.69915 12.4894 5.84072C12.6309 5.9823 12.7017 6.15773 12.7017 6.36701C12.7017 6.57629 12.6309 6.75172 12.4894 6.8933C12.3478 7.03487 12.1724 7.10566 11.9631 7.10566H7.53119ZM6.0539 17.4467C5.64764 17.4467 5.29986 17.3021 5.01055 17.0128C4.72125 16.7235 4.5766 16.3757 4.5766 15.9694V2.67377C4.5766 2.26751 4.72125 1.91973 5.01055 1.63043C5.29986 1.34112 5.64764 1.19647 6.0539 1.19647H13.4404C13.8466 1.19647 14.1944 1.34112 14.4837 1.63043C14.773 1.91973 14.9177 2.26751 14.9177 2.67377V15.9694C14.9177 16.3757 14.773 16.7235 14.4837 17.0128C14.1944 17.3021 13.8466 17.4467 13.4404 17.4467H6.0539ZM6.0539 13.7535H13.4404V4.88971H6.0539V13.7535Z" fill="#3366FF" />
            </g>
        </svg>
        ),
    },
    {
        title: "Excel / CSV Contact Import",
        icon: (<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_482_164" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="19">
                <rect x="0.883362" y="0.315796" width="17.7276" height="17.7276" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_482_164)">
                <path d="M6.79255 12.8728H10.4858C10.6951 12.8728 10.8705 12.8021 11.0121 12.6605C11.1536 12.5189 11.2244 12.3435 11.2244 12.1342C11.2244 11.9249 11.1536 11.7495 11.0121 11.6079C10.8705 11.4663 10.6951 11.3955 10.4858 11.3955H6.79255C6.58326 11.3955 6.40783 11.4663 6.26626 11.6079C6.12468 11.7495 6.0539 11.9249 6.0539 12.1342C6.0539 12.3435 6.12468 12.5189 6.26626 12.6605C6.40783 12.8021 6.58326 12.8728 6.79255 12.8728ZM6.79255 9.91825H12.7017C12.911 9.91825 13.0864 9.84746 13.228 9.70589C13.3696 9.56432 13.4404 9.38889 13.4404 9.1796C13.4404 8.97032 13.3696 8.79489 13.228 8.65332C13.0864 8.51174 12.911 8.44095 12.7017 8.44095H6.79255C6.58326 8.44095 6.40783 8.51174 6.26626 8.65332C6.12468 8.79489 6.0539 8.97032 6.0539 9.1796C6.0539 9.38889 6.12468 9.56432 6.26626 9.70589C6.40783 9.84746 6.58326 9.91825 6.79255 9.91825ZM6.79255 6.96366H12.7017C12.911 6.96366 13.0864 6.89287 13.228 6.7513C13.3696 6.60972 13.4404 6.43429 13.4404 6.22501C13.4404 6.01573 13.3696 5.8403 13.228 5.69872C13.0864 5.55715 12.911 5.48636 12.7017 5.48636H6.79255C6.58326 5.48636 6.40783 5.55715 6.26626 5.69872C6.12468 5.8403 6.0539 6.01573 6.0539 6.22501C6.0539 6.43429 6.12468 6.60972 6.26626 6.7513C6.40783 6.89287 6.58326 6.96366 6.79255 6.96366ZM4.5766 15.8274C4.17034 15.8274 3.82256 15.6828 3.53326 15.3935C3.24396 15.1042 3.0993 14.7564 3.0993 14.3501V4.00907C3.0993 3.60281 3.24396 3.25503 3.53326 2.96572C3.82256 2.67642 4.17034 2.53177 4.5766 2.53177H14.9177C15.3239 2.53177 15.6717 2.67642 15.961 2.96572C16.2503 3.25503 16.395 3.60281 16.395 4.00907V14.3501C16.395 14.7564 16.2503 15.1042 15.961 15.3935C15.6717 15.6828 15.3239 15.8274 14.9177 15.8274H4.5766Z" fill="#3366FF" />
            </g>
        </svg>
        ),
    },
    {
        title: "Google Contact Sync",
        icon: (<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_482_169" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="18">
                <rect x="0.883362" y="0.173248" width="17.7276" height="17.7276" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_482_169)">
                <path d="M8.95309 8.46448L7.90052 7.41191C7.7651 7.27649 7.59583 7.2057 7.3927 7.19955C7.18957 7.19339 7.01414 7.26418 6.86641 7.41191C6.73099 7.54733 6.66328 7.71968 6.66328 7.92896C6.66328 8.13824 6.73099 8.3106 6.86641 8.44601L8.43604 10.0341C8.58377 10.1818 8.75612 10.2557 8.95309 10.2557C9.15007 10.2557 9.32242 10.1818 9.47015 10.0341L12.9049 6.89485C12.9049 6.69788 12.8925 6.50706 12.8679 6.3224C12.8433 6.13774 12.7633 5.9777 12.6279 5.84228C12.4801 5.69455 12.3047 5.62068 12.1016 5.62068C11.8985 5.62068 11.723 5.69455 11.5753 5.84228L8.95309 8.46448ZM1.62201 15.6848V14.2075H17.1336C17.3429 14.2075 17.5183 14.2783 17.6599 14.4198C17.8015 14.5614 17.8723 14.7368 17.8723 14.9461C17.8723 15.1554 17.8015 15.3308 17.6599 15.4724C17.5183 15.614 17.3429 15.6848 17.1336 15.6848H1.62201ZM3.83795 13.4688C3.4317 13.4688 3.08392 13.3242 2.79461 13.0349C2.50531 12.7456 2.36066 12.3978 2.36066 11.9915V3.8664C2.36066 3.46014 2.50531 3.11236 2.79461 2.82305C3.08392 2.53375 3.4317 2.3891 3.83795 2.3891H15.6563C16.0626 2.3891 16.4104 2.53375 16.6997 2.82305C16.989 3.11236 17.1336 3.46014 17.1336 3.8664V11.9915C17.1336 12.3978 16.989 12.7456 16.6997 13.0349C16.4104 13.3242 16.0626 13.4688 15.6563 13.4688H3.83795Z" fill="#3366FF" />
            </g>
        </svg>

        ),
    },

]


export function CardPricing() {
    return (
        <div className="flex md:grid md:grid-cols-2 lg:flex lg:flex-row flex-col items-center gap-6">
            {pricing.map((card, index) => (
                <Card key={index}>
                    <CardHeader>
                        <CardTitle>{card.title}</CardTitle>
                        <CardDescription>{card.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="">
                            <h1 className="text-[20px] font-bold mb-2">{card.price}</h1>
                            <h1 className="text-[16px] text-gray-400 font-medium mb-6">{card.priceyear}</h1>
                            <Link href="/">
                                <Button variant="buttonprice">
                                    {card.namebutton}
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div>
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="mb-2 grid items-start"
                                >
                                    <div className="flex items-center gap-2">
                                        <div >
                                            {benefit.icon}
                                        </div>
                                        <p className="text-[12px] font-medium ">
                                            {benefit.title}
                                        </p>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardFooter>
                </Card >
            ))
            }
        </div >

    )
}
